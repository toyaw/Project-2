const express = require('express')
const userRouter = express.Router()
// Import the necessary APIs from your models
const userApi = require('../models/user.js')
const quoteApi = require('../models/quote.js')

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that will return all users and render the users.hbs template
userRouter.get('/', (req, res) => {
    userApi.getAllUsers()
        .then(users => {
            res.render('users/users', {users})
        })
})

//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that will render the newUserForm.hbs template
userRouter.get('/new', (req, res) => {
    res.render('users/newUserForm')
})

//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that redirects to /users after completion
userRouter.post('/', (req, res) => {
    userApi.createUser(req.body)
        .then(() => {
            res.redirect('/users')
        })
})

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:userId" that will return both the user and all issues assigned to that user
// and render the singleUser.hbs template
userRouter.get('/:userId', (req, res) => {
    userApi.getUserById(req.params.userId)
        .then(user => {
            quoteApi.getQuoteByUserId(req.params.userId)
                .then(quote => {
                    res.render('users/singleUser', {user, quote})
                })
        })
})

module.exports = userRouter
