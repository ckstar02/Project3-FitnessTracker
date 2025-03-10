import { Router } from 'express'
import { getAllPersonalGoals, getPersonalGoal, createPersonalGoal, deletePersonalGoal, updatePersonalGoal } from '../controllers/personal.goal.controller'
import { authRequired } from '../middlewares/validateToken'


const router = Router()

router.get('/pgoals', authRequired, getAllPersonalGoals)

router.get('/pgoals/:id', authRequired, getPersonalGoal)

router.post('/pgoals', authRequired, createPersonalGoal)

router.put('/pgoals/:id', authRequired, updatePersonalGoal)

router.delete('/pgoals/:id', authRequired, deletePersonalGoal)

export default router