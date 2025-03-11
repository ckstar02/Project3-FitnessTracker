import mongoose from "mongoose";

const personalGoalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('PersonalGoal', personalGoalSchema)