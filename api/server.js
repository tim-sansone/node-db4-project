const express = require('express');
const server = express();
server.use(express.json())

const Recipes = require('./model')


server.get('/api/recipes/:id', (req, res, next) => {
    
    Recipes.getRecipeById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(next)
})

server.use((error, req, res, next) => {
    res.status(error.status || 500).json({message: error.message || 'internal server error'})
})

module.exports = server;
