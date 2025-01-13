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


  
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Nombre único para cada archivo
  },
});
const upload = multer({ storage });





app.post("/Formulario", upload.single("image"), async (req, res) => {
  try {
    const { name, comentario } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Debe subir una imagen." });
    }

    

 
    const formulario = new Formulario({
      name,
      comentario,
      image:`/uploads/${req.file.filename}`,  
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

app.get("/Comunidad", async (req, res) => {
  try {
    const formularios = await Formulario.find(); // Obtén todos los documentos de la colección
    res.status(200).json(formularios);
  } catch (error) {
    console.error("Error al obtener los formularios:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});
app.use("/uploads", express.static("uploads"));
app.listen(4000);

