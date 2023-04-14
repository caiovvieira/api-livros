import livros from '../models/Livro.js';

class LivroController {

    static async index(req, res) {
        try {
            const getLivros = await livros.find().populate('autor') //o metodo populate mostra todas as associações feitas ao nosso documento, é necessario passar o nome do campo da nossa coleção que iremos popular 
            return res.status(200).json(getLivros)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async store(req, res) {
        try {
            let newLivro = new livros(req.body)
            let saveLivro = await newLivro.save()
            return res.status(201).json(saveLivro)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async show(req, res) {
        try {
            const { id } = req.params
            let getLivro = await livros.findById(id).populate('autor', 'nome')  //na campo autor do nosso documento iremos mostrar apenas a propriedade nome da nossa associação
            return res.status(201).json(getLivro)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params
            let updateLivro = await livros.findByIdAndUpdate(id, { $set: req.body })
            return res.status(200).json("livro atualizado")

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            let deleteLivro = await livros.findByIdAndRemove(id)
            return res.status(200).json("livro deletado")

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

export default LivroController