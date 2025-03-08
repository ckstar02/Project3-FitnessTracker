import { Router } from "express";
import apiRoutes from './api/index.js';
// import { authenticateToken } from '../middleware';


const router = Router();

router.use('/api', apiRoutes);
// router.use('auth')

export default router;