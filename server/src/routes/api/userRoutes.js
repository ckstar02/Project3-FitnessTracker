import Router from 'express';

const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  loginToAcc

} from '../../controller/UserController.js';

router.route('/').get(getAllUsers).post(createUser).post(loginToAcc);

router.route('/:userId').get(getUserById);

export { router as userRouter };