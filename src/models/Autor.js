import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String },
    },
    {
        versionKey: false  //versionKey versiona os modelos, é util pois se adicionarmos um novo campo ele versiona o schema e atualiza a versão do campo
    }
)

const autores = mongoose.model('autores', autorSchema)

export default autores