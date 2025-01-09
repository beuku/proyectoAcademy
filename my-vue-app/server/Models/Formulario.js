const mongoose = require('mongoose');

const formularioShema = new mongoose.Schema({
  name:String,
  cometario:String,
  image: String,
});
module.exports= mongoose.model("Formulario",formularioShema);