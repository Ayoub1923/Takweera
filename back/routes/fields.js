const route = require('express').Router()
const { getFields, getOneField, addField, deleteField, updateField } = require('../controllers/fields')
route.get('/', getFields)
route.get('/:id', getOneField)
route.post('/', addField)
route.delete('/:id', deleteField)
route.patch('/:id', updateField)
module.exports = route