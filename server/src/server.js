import express from 'express';
import db from './config/connection.js';
import routes from './routes/app.js';

import morgan from 'morgan';
import cookieParser from 'cookie-parser';

await db();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
