import { Router } from "express";
import { getAllGoals, getGoal, createGoal, updateGoal, deleteGoal } from "../controllers/daily.goals.controller";
import { authRequired } from "../middlewares/validateToken";

const router = Router()

router.get('goals', authRequired, getAllGoals)

router.get('/goals/:id', authRequired, getGoal)

router.post('/goals', authRequired, createGoal)

router.put('/goals/:id', authRequired, updateGoal)

router.delete('/goals/:id', authRequired, deleteGoal)

export default router