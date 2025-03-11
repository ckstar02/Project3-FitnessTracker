// import { User } from "../models/User.js";
import bcrypt from 'bcrypt';

export const getAllSurveys = async (req, res) => {
    const surveys = await UserSurvey.find()
    res.json(surveys)
}

export const getSurvey = async (req, res) => {
    const survey = await UserSurvey.findById(req.params.id)
    
    if (!survey) return res.status(404).json({ message: "Survey not found"})
    res.json(survey)
}

export const createSurvey = async (req, res) => {
    const {
        firstName, lastName, age, gender, weightKg, heightCm, caloricIntake, email, password 
    } = req.body;

    if (!firstName || !lastName || !age || !gender || !weightKg || !heightCm || !caloricIntake || !email || !password){
        res.status(400).json({ message: 'All fields are required.' });
    }

    try{
        const hashedPassword = await bcrypt(password, 10);

        const user = await User.create({
            firstName, lastName,
            age, weightKg, heightCm, caloricIntake,
            email, hashedPassword,
            dailyGoals: [],
            savedRecipes: []
        });

        res.status(201).json(user);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
}

export const deleteSurvey = async (req, res) => {
    const survey = await UserSurvey.findByIdAndDelete(req.params.id)
    
    if (!survey) return res.status(404).json({ message: "Survey not found"})
    res.json(survey)
}

export const updateSurvey = async (req, res) =>{
    const survey = await UserSurvey.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!survey) return res.status(404).json({message: "Survey not found"})
    res.json(survey)
}