const express = require('express');
const { ObjectId } = require('mongodb');
const multer = require('multer');

const validateObjectId = (req, res, next) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send("ID no válido");
  }
  next();
};

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connnetion')
const Cliente = require('./Models/Cliente');
const Formulario = require('./Models/Formulario');

app.post("/Registrar", async(req,res)=>{
  let cliente = new Cliente(req.body);
  let result = await cliente.save();
  res.send(result);
})



app.post("/IniciarSesion", async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).send({ message: "Email y contraseña son obligatorios." });
  }

  try {
    const cliente = await Cliente.findOne({ email, password });
    
    if (cliente) {
      res.send({ message: "Inicio de sesión exitoso", cliente });
    } else {
      res.status(401).send({ message: "Credenciales incorrectas." });
    }
  } catch (error) {
    console.error("Error al buscar cliente:", error);
    res.status(500).send({ message: "Error del servidor." });
  }
});

app.get('/Comunidad', async (req, res) => {
  try {
    
    const formularios = await Formulario.find({});
    
    
    res.status(200).json(formularios);
  } catch (error) {
    console.error("Error al obtener los formularios:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

  
app.delete('/formularios/:id',  async (req, res) => {
  const { Types } = require('mongoose');
  const id = new Types.ObjectId(req.params.id);
  console.log(id)

  try {
    const deletedFormulario = await Cliente.findByIdAndDelete(id);
    if (!deletedFormulario) {
      return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.status(200).json({ message: 'Formulario eliminado con éxito', deletedFormulario });
  } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.put('/formularios/:id', validateObjectId ,async (req, res) => {
  const { Types } = require('mongoose');
  const id = new Types.ObjectId(req.params.id);
  const updateData = req.body;
  console.log(id)
  try {
    const result = await Cliente.findByIdAndUpdate(id, updateData, {new: true });
    res.status(200).json(result);
  }catch (error){
    console.error(error);
    res.status(500).send("Error al actualizar el formulario");
  }
});

const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB

app.post("/Formulario", upload.single("image"), async (req, res) => {
  try {
    const { name, comentario } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Debe subir una imagen." });
    }

    const imageUrl = `/uploads/${req.file.filename}`; // Ruta relativa de la imagen

    // Crear un nuevo documento en MongoDB
    const formulario = new Formulario({
      name,
      comentario,
      image: imageUrl, // Almacena la ruta de la imagen
    });

    const result = await formulario.save();

    res.status(201).json({
      message: "Formulario enviado con éxito.",
      data: result,
    });
  } catch (error) {
    console.error("Error al guardar el formulario:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});
app.listen(4000);

