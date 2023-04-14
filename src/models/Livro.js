import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true }, //associa o a coleção de autores na coleção de livros através do id do documento, a porpriedade ref serve para referenciar qual colecao iremos associar a colecao de livros
    editora: { type: String, required: true },
    numeroPaginas: { type: Number }
})

const livros = mongoose.model('livros', livroSchema)

export default livros
