import { DailyGoals, User } from "../models/index.js";

export const getAllGoals = async (req, res) => {
    const goals = await DailyGoals.find();
    res.json(goals);
}
export const getGoal = async (req, res) => {
    const goal = await DailyGoals.findById(req.params.id);
    if (!goal) return res.status(404).json({message: "Could not find goal"});
    res.json(goal);
}
export const createGoal = async (req, res) => {
    const userId = req.params.id;
    const { hoursOfSleep, caloriesConsumed, activeHours } = req.body;

    if (!hoursOfSleep || !caloriesConsumed || !activeHours){
        return res.status(400).json({ message: 'ALl fields are required.' });
    }

    try {
        const user = await User.findById(userId);
        if (!user){
            return res.status(404).json({ message: 'User by that id not found.' });
        }

        const newGoal = await DailyGoals.create({
            hoursOfSleep,
            caloriesConsumed,
            activeHours
        });

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { DailyGoals: newGoal._id } },
            { new: true }
        ).populate('DailyGoals');

        res.status(201).json({ Goal: newGoal, user: updatedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const deleteGoal = async (req, res) => {
    const { goalId, userId } = req.params;

    try {
        const goal = await DailyGoals.findByIdAndDelete(goalId);

        if (!goal){
            return res.status(404).json({ message: 'Goal by that id not found.' });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { $pull: { dailyGoals: goalId }},
            { new: true }
        );

        if (!user){
            return res.status(404).json({ message: 'User by that if not found.' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const updateGoal = async (req, res) => {
    const { goalId } = req.params;
    try {
        const updatedGoal = await DailyGoals.findByIdAndUpdate(
            goalId,
            req.body,
            { new: true }
        );

        if (!updatedGoal){
            return res.status(404).json({ message: 'Goal by that id not found' });
        }

        res.json(updateGoal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}