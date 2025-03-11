import { Router } from 'express'
import { getAllPersonalGoals, getPersonalGoal, createPersonalGoal, deletePersonalGoal, updatePersonalGoal } from '../../controllers/personal.goal.controller'
import { authRequired } from '../../middlewares/validateToken'


const router = Router();

router.route('/').get(authRequired, getAllPersonalGoals);

router.route('/:id').get(authRequired, getPersonalGoal);

router.route('/').post(authRequired, createPersonalGoal);

router.route('/:id').put(authRequired, updatePersonalGoal);

router.route('/:id').delete(authRequired, deletePersonalGoal);

export { router as personalGoalRoutes };