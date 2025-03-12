import { Router } from 'express';
import { authRoutes } from './auth.routes.js';
import { dailyGoalRoutes } from './daily.goals.routes.js';
import { recipeRouter } from './saved.recipes.routes.js';
import { personalGoalRoutes } from './personal.goal.routes.js';
import { userRoutes } from './user.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/goals', dailyGoalRoutes);
router.use('/recipes', recipeRouter);
router.use('/pgoals', personalGoalRoutes);
router.use('/user', userRoutes);

export default router;