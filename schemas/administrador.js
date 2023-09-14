import mongoose from "mongoose";

const schemaAdmin = mongoose.Schema({
    cedula: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
    },
    email: {
        type :String ,
        required: true
    },
    usuario:{
        type:String,
        required: true
    },
    constraseña: {
        type: String,
        required: true,
    }
})

const modeloAdmnistrador = mongoose.model("administrador", schemaAdmin)

module.exports = {modeloAdmnistrador}