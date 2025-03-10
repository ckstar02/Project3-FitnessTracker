import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getAllRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe } from '../controllers/saved.recipes.controller.js';

const router = Router()

router.get('/recipes',authRequired, getAllRecipes)
router.get('/recipes/:id', authRequired, getRecipe)
router.post('/recipes', authRequired, addRecipe)
router.put('/recipes/:id', authRequired, updateRecipe)
router.delete('/recipes/:id', authRequired, deleteRecipe)

export default router