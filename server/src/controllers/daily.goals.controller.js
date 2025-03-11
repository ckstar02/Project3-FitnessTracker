import { DailyGoals } from "../models/index.js";

export const getAllGoals = async (req, res) => {
    const goals = await DailyGoals.find()
    res.json(goals)
}
export const getGoal = async (req, res) => {
    const goal = await DailyGoals.findById(req.params.id)
    if (!goal) return res.status(404).json({message: "Could not find goals"})
    res.json(goal)
}
export const createGoal = async (req, res) => {
    const { hoursOfSleep, caloriesConsumed, activeHours } = req.body
    const newGoal = new DailyGoals({
        hoursOfSleep, 
        caloriesConsumed, 
        activeHours
    })
    const savedGoal = await newGoal.save()
    res.json(savedGoal)
}
export const deleteGoal = async (req, res) => {
    const goal = await DailyGoals.findByIdAndDelete(req.params.id)
    if (!goal) return res.status(404).json({ message: 'Could not find goals'})
    res.json(goal)
}
export const updateGoal = async (req, res) => {
    const goal = await DailyGoals.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!goal) return res.status(404).json({ message: 'Could not find goals'})
    res.json(goal)
}