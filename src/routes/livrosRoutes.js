import express from "express";
import LivroController from "../controllers/livrosControllers.js";


const router = express.Router()

router.get('/livros', LivroController.index)
router.post('/livros', LivroController.store)
router.get('/livros/:id', LivroController.show)
router.put('/livros/:id', LivroController.update)
router.delete('/livros/:id', LivroController.delete)


export default router


