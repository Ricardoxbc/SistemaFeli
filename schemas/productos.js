const mongoose = require("mongoose")
module.exports =  mongoose

const schemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true,  
    } ,
    unidades: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
        
    },
    proveedor: {
        type: String,
    },
    modelo:{
        type: String,
    }
})

const modeloProductos = mongoose.model("productos", schemaProducto);

module.exports = {modeloProductos}