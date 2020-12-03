const express = require("express")

const app = express()

const plans = require("./routes/plans.js")

app.get('/hello', (request, response) => {
    response.status(200).send('Hello World')
})

app.use(plans)

app.listen(3001)