
const mongoose = require('mongoose');

const clinetShema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
});
module.exports= mongoose.model("Cliente",clinetShema);

