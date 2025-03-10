import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const {
        firstName, lastName, age, gender, weightKg, heightCm, caloricIntake, email, password 
    } = req.body;

    if (!firstName || !lastName || !age || !gender || !weightKg || !heightCm || !caloricIntake || !email || !password){
        res.status(400).json({ message: 'All fields are required.' });
    }
    
    try{
        const hashedPassword = await bcrypt(password, 10);
    
        const user = await UserSurvey.create({
            firstName, lastName,
            age, weightKg, heightCm, caloricIntake,
            email, hashedPassword,
            dailyGoals: [],
            savedRecipes: []
        });

        const token = await createAccessToken({ id: user._id });
        res.cookie("token", token);
    
        res.status(200).json(user);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body

    try {


        const userFound = await User.findOne({email})

        if (!userFound)
            return res.status(400).json({ message: "User not found" }); 

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch)
            return res.status(400).json({ message: "Incorrect password" })

        const token = await createAccessToken({id: userFound._id})

        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
