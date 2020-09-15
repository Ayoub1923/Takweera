const User = require('../models/users')
const getUsers = async (req, res) => {
  const users = await User.find()
  res.send(users)
}
const getOneUser = async (req, res) => {
  const users = await User.findOne({_id:req.params.id})
  res.send(users)
}
const addUser = (req, res) => {
  const user = new User(req.body)
  user.save().then(() => res.json(user)).catch(err => console.log(err))
}
const deleteUser = async (req, res) => {
  const user = await User.deleteOne(req.body)
  res.send(user)
}
const updateUser = async (req, res) => {
  const user = await User.updateOne({ _id: req.params.id }, { $set: req.body })
  res.send(user)
}
module.exports = { getUsers,getOneUser, addUser, deleteUser, updateUser } 