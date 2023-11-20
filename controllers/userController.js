'use strict';
let Models = require('../models');

const getUsers = (res) => {
    Models.User.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const createUser = (data, res) => {
    console.log(data)
    new Models.User(data).save()
    .then(data => res.send({results: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const updateUser = (req,res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const deleteUser = (req,res) => {
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, {useFindAndModify: false})
}