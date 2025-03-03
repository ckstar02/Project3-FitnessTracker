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
})

export default mongoose.model('DailyGoals', dailyGoalsSchema)