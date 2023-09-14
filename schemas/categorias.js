import mongoose from "mongoose";
import { Mongoose } from "./productos";


const schemaCategoria = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    descripcion:{
        type :String ,  
    }
})

const modeloCategoria = mongoose.model("categoria", schemaCategoria)

module.exports = {modeloCategoria}