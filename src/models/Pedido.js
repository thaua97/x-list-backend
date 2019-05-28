const mongoose = require('mongoose')

const Pedido = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Pedido', Pedido)