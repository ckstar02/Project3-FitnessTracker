import { Router } from "express";
import { getAllGoals, getGoal, createGoal, updateGoal, deleteGoal } from "../../controllers/daily.goals.controller.js";
import { authRequired } from "../../middlewares/validateToken.js";

const router = Router();

router.route('/').get(authRequired, getAllGoals);

router.route('/:goalId').get(authRequired, getGoal);

router.route('/user/:id').post(authRequired, createGoal);

router.route('/:goalId/user/:userId').put(authRequired, updateGoal);

router.route('/:goalId/user/:userId').delete(authRequired, deleteGoal);

export { router as dailyGoalRoutes };