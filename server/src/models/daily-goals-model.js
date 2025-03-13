import mongoose from "mongoose";


const dailyGoalsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,  
});

const DailyGoals = mongoose.model('DailyGoals', dailyGoalsSchema);
export default DailyGoals;