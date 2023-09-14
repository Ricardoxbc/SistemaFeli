const mongoose = require("mongoose")

const schemaProveedor = new mongoose.Schema({
    // rif: {
    //     type : Number,
    //     required: true
    // },
    nombre: {
        type: String ,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
    },
    email:{
        type:String,
        required: true,
    }
})

const modeloProveedor = mongoose.model("proveedor", schemaProveedor);

module.exports = {modeloProveedor}