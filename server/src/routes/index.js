import { Router } from "express";
import { authenticateToken } from '../middleware.js'


const router = Router();

router.use('/api')
router.use('auth')

export default router;