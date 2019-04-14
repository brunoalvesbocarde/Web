const express = require('express')
const app = express()
const bodyparse = require('body-parser')

app.use(bodyparse.urlencoded({ extended: true}))

app.post('/usuarios',(req, resp)  => {
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario incluido</h1>')

} )

app.post('/usuarios/:id',(req, resp)  => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>Parabens. Usuario alterado</h1>')

} )
app.listen(3003)