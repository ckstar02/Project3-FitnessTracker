import { Router } from "express";
import { getAllGoals, getGoal, createGoal, updateGoal, deleteGoal } from "../controllers/daily.goals.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.get('/dgoals', authRequired, getAllGoals)

router.get('/dgoals/:id', authRequired, getGoal)

router.post('/dgoals', authRequired, createGoal)

router.put('/dgoals/:id', authRequired, updateGoal)

router.delete('/dgoals/:id', authRequired, deleteGoal)

export default router