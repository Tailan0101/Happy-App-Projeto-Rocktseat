//importar dependecia
const express = require('express');
const path = require('path')
const pages = require('./page.js')



//iniciando A Express Biblioteca
const server = express()
//ultilizar body no require
.use(express.urlencoded({ extended: true}))
//ultilizando arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname,"views"))
.set('view engine', 'hbs')

//rotas da aplicação
.get('/', pages.index)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


// ligando servidor
server.listen(5500)
