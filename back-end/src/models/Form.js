const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  
  cpf: { type: String, required: true },
  userName: { type: String, required: true },
  fone: { type: String, required: true },
  email: { type: String, required: true },

  cep: { type: String, required: true },
  publicPlace: { type: String, required: true },
  number: { type: String, required: true },
  neighborhood: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

module.exports = mongoose.model('Form', FormSchema);
