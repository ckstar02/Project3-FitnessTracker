import { Router } from "express";
import { getAllGoals, getGoal, createGoal, updateGoal, deleteGoal } from "../controllers/daily.goals.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.route('/').get(authRequired, getAllGoals);

router.route('/:id').get(authRequired, getGoal);

router.route('/').post(authRequired, createGoal);

router.route('/:id').put(authRequired, updateGoal);

router.route('/:id').delete(authRequired, deleteGoal);

export { router as dailyGoalRoutes };