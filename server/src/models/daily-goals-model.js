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
})

export default mongoose.model('DailyGoals', dailyGoalsSchema)