import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';

import authRoutes from './routes/api/auth.routes.js';
import goalsRoutes from './routes/daily.goals.routes.js'
import recipesRoutes from './routes/saved.recipes.routes.js'
import surveyRoutes from './routes/api/user.survey.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', goalsRoutes);
app.use('/api', recipesRoutes);
app.use('/api', surveyRoutes);

export default app;