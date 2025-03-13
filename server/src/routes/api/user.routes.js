import { Router } from "express";
import { authRequired } from "../../middlewares/validateToken.js";
import { getAllUsers, getUser, updateUser, deleteUser, getUserGoals } from "../../controllers/user.controllers.js";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.route('/:id/goals').get(getUserGoals);
router.put('/:id', authRequired, updateUser);
router.delete('/:id', authRequired, deleteUser);

export { router as userRoutes };