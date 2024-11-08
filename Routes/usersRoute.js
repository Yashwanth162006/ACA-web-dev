const express = require('express')
const Router = express.Router()
const usersController = require('../Controllers/userController')
const authController = require('../Controllers/authController')

Router.route('/signup').post(authController.signup)
Router.route('/login').post(authController.login)
Router.route('/forgotPassword').post(authController.sendToken)
Router.route('/resetPassword/').patch(authController.resetPassword)
Router.route('/updatePassword').patch(authController.protect,authController.updatePassword)
Router.route('/').get(usersController.getAllUsers).post(usersController.createUser).patch(authController.protect,usersController.updateUser).delete(authController.protect,usersController.deleteUser)
Router.route('/:id').get(usersController.getUserById)

module.exports = Router