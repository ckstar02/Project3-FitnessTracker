import app from './app.js'
import db from './config/connection.js';

db();

app.listen(4000)
console.log('Server on port', 4000)