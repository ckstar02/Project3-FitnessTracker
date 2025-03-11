import mongoose from "mongoose";


const dailyGoalsSchema = new mongoose.Schema({
    hoursOfSleep: {
        type: Number,
        required: true,
    },
    caloriesConsumed: {
        type: Number,
        required: true,
    },
    activeHours: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,  
});

const DailyGoals = mongoose.model('DailyGoals', dailyGoalsSchema);
export default DailyGoals;