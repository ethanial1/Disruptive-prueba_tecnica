import { Router } from 'express';
import passport from 'passport';
import { loginController, registerUserController } from './auth.controller.js';
import { UserMiddleware } from '../middlewares/user.mw.js';
import {
  createCategoryController,
  createTematicaController,
  removeCategoryController,
  getCategoriesController,
  getTematicasController,
} from './categoria.controller.js';
import { getContentValidator } from '../middlewares/biblioteca.js';
import { addContentController, getContentController } from './bibloteca.controller.js';
import { newCategoryValidator } from '../middlewares/category.js';

const router = Router();

router.post('/auth/login', UserMiddleware.login, loginController);
router.post('/auth/register', UserMiddleware.register, registerUserController);

router.use(passport.authenticate('jwt', { session: false }))

router.post('/category/add-one', newCategoryValidator, createCategoryController);
router.get('/category/list', getCategoriesController);
router.delete('/category/remove', removeCategoryController);

router.post('/tematica/add-one', newCategoryValidator, createTematicaController);
router.get('/tematica/list', getTematicasController);
router.put('/tematica/update');
router.delete('/tematica/remove');

router.get('/biblioteca', getContentValidator, getContentController)
router.post('/biblioteca/add', addContentController);
router.put('/biblioteca/update-item');
router.delete('/biblioteca/remove-item');

export default router;
