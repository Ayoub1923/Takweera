const Field = require('../models/field')
const getFields = async (req, res) => {
  const fields = await Field.find()
  res.send(fields)
}
const getOneField = async (req, res) => {
  const field = await Field.findOne({ _id: req.params.id })
  res.send(field)
}
const addField = (req, res) => {
  const field = new Field(req.body)
  field.save().then(() => res.json(field)).catch(err => console.log(err))
}
const deleteField = async (req, res) => {
  const field = await Field.deleteOne(req.body)
  res.send(field)
}
const updateField = async (req, res) => {
  const field = await Field.updateOne({ _id: req.params.id }, { $set: req.body })
  res.send(field)
}
module.exports = { getFields, getOneField, addField, updateField, deleteField } 