const route = require('express').Router()
const { getUsers, getOneUser, addUser, deleteUser, updateUser } = require('../controllers/users')
route.get('/', getUsers)
route.get('/:id', getOneUser)
route.post('/', addUser)
route.delete('/:id', deleteUser)
route.patch('/:id', updateUser)
module.exports = route