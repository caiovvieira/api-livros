import express from 'express';
import autorController from '../controllers/autoresControllers.js';


const router = express.Router()

router.get('/autores', autorController.index)
router.post('/autores', autorController.store)
router.get('/autores/:id', autorController.show)
router.put('/autores/:id', autorController.update)
router.delete('/autores/:id', autorController.delete)


export default router


