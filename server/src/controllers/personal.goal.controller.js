import { PersonalGoal } from '../models/index.js';

export const getAllPersonalGoals = async (req, res) => {
    const goals = await PersonalGoal.find()
    res.json(goals)
}

export const getPersonalGoal = async (req, res) => {
    const goal = await PersonalGoal.findById(req.params.id)
    if (!goal) return res.status(404).json({ message: "Personal Goal not found"})
    res.json(goal)
}

export const createPersonalGoal = async (req, res) => {
    const { title, description } = req.body

    const newGoal = new PersonalGoal({
        title,
        description,
    })
    const savedGoal = newGoal.save()
    res.json(savedGoal)
}

export const deletePersonalGoal = async (req, res) => {
    const goal = await PersonalGoal.findByIdAndDelete(req.params.id)
    if (!goal) return res.status(404).json({ message: "Personal Goal not found"})
    res.sendStatus(204)
}

export const updatePersonalGoal = async (req, res) => {
    const goal = await PersonalGoal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!goal) return res.status(404).json({ message: "Personal Goal not found"})
    res.json(goal)
}