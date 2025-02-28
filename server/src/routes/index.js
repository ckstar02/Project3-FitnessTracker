import { Router } from "express";
import { authenticateToken } from '../middleware'


const router = Router();

router.use('/api')
router.use('auth')

export default router;