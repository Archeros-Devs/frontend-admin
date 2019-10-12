var http = require('http');
var express = require('express');
var app = express();

const baseDir = `/home/peruibemelhor/www/`

app.use(express.static(`${baseDir}`))
app.get('*', (req,res) => res.sendFile('index.html', {root : baseDir}))

const port = process.env.PORT_PERUIBE

app.listen(port, ()=> console.log('Site Peruibe Melhor Rodando...'))
