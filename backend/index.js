import express from "express"

const app = express();

app.get('/', (res, req) => {
    req.send({code: 200, message: "API OK"})
})

app.get('/makanan', (res, req) => {
    req.send({code: 200, message: "Makanan"})
})


app.listen(3001);