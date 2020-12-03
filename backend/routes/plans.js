const express = require("express")

const router = express.Router()

const plansController = require("../controllers/plans")

router.get('/plans', plansController.findAll)

router.get('/plans/:id', (req, res) => {
    res.status(500).send('Get by id Not implemented')
})

router.post('/plans', (req, res) => {
    res.status(500).send('Post Not implemented')
})

router.put('/plans/:id', (req, res) => {
    res.status(500).send('Put Not implemented')
})

router.delete('/plans/:id', (req, res) => {
    res.status(500).send('Delete Not implemented')
})


module.exports = router