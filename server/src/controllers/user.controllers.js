import { User } from "../models/index.js";
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId).select('-password');

        if (!user){
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export const deleteUser = async (req, res) => {
    const survey = await UserSurvey.findByIdAndDelete(req.params.id)
    
    if (!survey) return res.status(404).json({ message: "Survey not found"})
    res.json(survey)
}

export const updateUser = async (req, res) =>{
    const survey = await UserSurvey.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!survey) return res.status(404).json({message: "Survey not found"})
    res.json(survey)
}

export const getUserGoals = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).populate('dailyGoals');

        if (!user){
            return res.status(404).json({ message: 'User by that id not found.' });
        }

        res.status(200).json(user.dailyGoals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}