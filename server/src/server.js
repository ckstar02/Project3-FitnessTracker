import app from './app.js'
import db from './config/connection.js';

db();

app.listen(3001)
console.log('Server on port', 3000)