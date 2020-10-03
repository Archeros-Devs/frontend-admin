const express = require('express')
const cors = require('cors')
const app = express()
const baseDir = `${__dirname}/build/`
const port = 80

app.use(cors());
app.use(express.json());
app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))
app.listen(port, () => console.log(`Servidor subiu com sucesso na porta ${port}`))