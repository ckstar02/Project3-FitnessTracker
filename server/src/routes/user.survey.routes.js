import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getAllSurveys, getSurvey, createSurvey, updateSurvey, deleteSurvey } from "../controllers/user.survey.controller.js";

const router = Router()

router.get('/surveys', authRequired, getAllSurveys)
router.get('/surveys/:id', authRequired, getSurvey)
router.post('/surveys', authRequired, createSurvey)
router.put('/surveys/:id', authRequired, updateSurvey)
router.delete('/surveys/:id', authRequired, deleteSurvey)

export default router