import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send({code: 200, message: 'OK!'})
}) 

app.get('/makanan', (req, res) => {
    res.send({makanan: ['Sate', 'Kirik']})
})


app.listen(3001);