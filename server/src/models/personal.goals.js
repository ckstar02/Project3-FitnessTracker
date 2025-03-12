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

const PersonalGoal = mongoose.model('PersonalGoal', personalGoalSchema);
export default PersonalGoal;