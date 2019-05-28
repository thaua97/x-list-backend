const mongoose = require('mongoose')

const Fila = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    endereço: {
        type: String,
    },
    Pedidos: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Pedido'
        }
    ],
}, {
    timestamps: true
})

module.exports = mongoose.model('Fila', Fila)