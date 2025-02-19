import mongoose from 'mongoose';

const db = async () => {
    try {
        await mongoose.connect(process.env.ATLASURI || 'mongodb://127.0.0.1:27017/fitness_startDb');
        console.log('Database connected.');
        return mongoose.connection;
    } catch(error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
}

export default db;