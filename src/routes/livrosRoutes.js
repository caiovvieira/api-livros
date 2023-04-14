import express from 'express';
import livroController from '../controllers/livrosControllers.js';


const router = express.Router()

router.get('/livros', livroController.index)
router.post('/livros', livroController.store)
router.get('/livros/:id', livroController.show)
router.put('/livros/:id', livroController.update)
router.delete('/livros/:id', livroController.delete)


export default router


