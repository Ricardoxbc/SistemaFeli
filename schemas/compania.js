import mongoose from "mongoose";


const schemaCompañia = mongoose.Schema({
    rif: {
        type : String,
        required: true,
    },
    nombre: {
        type : String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
    }
})

const modelocompañia = mongoose.model("compañia", schemaCompañia);

module.exports = modelocompañia