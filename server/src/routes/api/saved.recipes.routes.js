import { Router } from 'express';
import { authRequired } from '../../middlewares/validateToken.js';
import { getAllRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe } from '../../controllers/saved.recipes.controller.js';

const router = Router();

router.route('/').get(authRequired, getAllRecipes);
router.route('/:id').get(authRequired, getRecipe);
router.route('/').post(authRequired, addRecipe);
router.route('/:id').put(authRequired, updateRecipe);
router.route('/:id').delete(authRequired, deleteRecipe);

export { router as recipeRouter };