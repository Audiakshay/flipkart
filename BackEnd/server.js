const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const port = 8080
const paymentController = require('./Controllers/paymentController')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//API
app.post('/orders', paymentController.orders);
app.post('/verify', paymentController.verify)


app.listen(port, () => {
  console.log(`BackEnd app Running on port ${port}`)
})