import { Router } from 'express';
import { userRouter } from './userRoutes.js';
import { authRoutes } from './auth.routes.js';
import { dailyGoalRoutes } from './daily.goals.routes.js';
import { recipeRouter } from './saved.recipes.routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRoutes);
router.use('goals', dailyGoalRoutes);
router.use('recipes', recipeRouter)

export default router;