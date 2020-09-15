const mongoose = require('mongoose')
const Field = mongoose.Schema({
  nom: { type: String, required: true },
  image: { type: String, required: true },
  gouvernorat: { type: String, required: true },
  adresse: { type: String, required: true },
  cout: { type: String, required: true },
  douche: { type: String, reuquired: true },
  vestiaire: { type: String, required: true },
  acailableDate: String,
  acailableTime: String,
  description: String,
  tel: { type: String, required: true }
})
module.exports = mongoose.model('fields', Field)