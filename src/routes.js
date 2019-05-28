const express = require('express')
const routes = express.Router()

const FilaController = require('./controllers/FilaController')
const PedidoController = require('./controllers/PedidoController')

routes.post('/fila', FilaController.store)
routes.get('/fila/:id',FilaController.show)

routes.post(
    '/fila/:id/pedido', PedidoController.store
)

module.exports = routes