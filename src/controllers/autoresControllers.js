import autores from '../models/Autor.js';

class AutorController {

    static async index(req, res) {
        try {
            const getAutores = await autores.find()
            return res.status(200).json(getAutores)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async store(req, res) {
        try {
            let newAutor = new autores(req.body)
            let saveAutor = await newAutor.save()
            return res.status(201).json(saveAutor)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async show(req, res) {
        try {
            const { id } = req.params
            let getAutor = await autores.findById(id)
            return res.status(201).json(getAutor)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params
            let updateAutor = await autores.findByIdAndUpdate(id, { $set: req.body })
            return res.status(200).json("autor atualizado")

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            let deleteAutor = await autores.findByIdAndRemove(id)
            return res.status(200).json("autor deletado")

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

export default AutorController