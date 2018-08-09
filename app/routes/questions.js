const express = require('express');

const questionRoutes = express.Router();

const {questionsController} = require('../controllers')


questionRoutes.get('/', (req, res) => {
    questionsController.getAll().then(questions => {
        res.send({
            results : questions
        });
    }).catch(() => res.status(400).send({error : 'An Error Occured'}))
    
})

questionRoutes.get('/:id', (req, res) => {
    questionsController.get(req.params.id).then(question => {
        res.send({
            results : question
        });
    }).catch(() => res.status(400).send({error : 'No question with that id exist'}));
})

questionRoutes.post('/', (req, res) => {
    questionsController.save(req.body).then(question => {
        res.send({
            results : question
        })
    }).catch(() => res.status(404).send({error :'An Error Occured'}))
})

questionRoutes.post('/:id/answers', (req, res) => {
    questionsController.addAnswer(req.params.id, req.body).then(answer => {
        res.send({
            results : answer
        })
    }).catch(error => res.status(400).send({error}))
    
})

module.exports = questionRoutes;