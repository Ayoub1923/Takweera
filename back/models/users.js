const mongoose = require('mongoose')
const User = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  role: String,
  gouvernorat: { type: String, required: true },
  adresse: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true })
module.exports = mongoose.model('users', User)