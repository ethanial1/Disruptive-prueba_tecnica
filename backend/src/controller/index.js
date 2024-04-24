import { Router } from 'express';
import { registerUserController } from './auth.controller.js';
import { UserMiddleware } from '../middlewares/user.mw.js';
import { createCategoryController } from './categoria.controller.js';
import { newCategoryDTO } from '../middlewares/category.mw.js';
import { createTematicaController } from './tematica.controller.js';
import { bibliotecaMw } from '../middlewares/biblioteca.mw.js';
import { bibliotectaController } from './bibloteca.controller.js';

const router = Router();

router.post('/auth/login', UserMiddleware.login, registerUserController);
router.post('/auth/register', UserMiddleware.register, registerUserController);

// categoria
router.post('/category/add-one', newCategoryDTO, createCategoryController);

// tematica
router.post('/tematica/add-one', newCategoryDTO, createTematicaController);

// biblioteca
router.get('/biblioteca', bibliotecaMw, bibliotectaController)

export default router;
