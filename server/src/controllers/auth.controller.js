import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const {
        firstname, lastname, age, gender, weightKg, heightCm, caloricIntake, email, password 
    } = req.body;

    if (!firstname || !lastname || !age || !gender || !weightKg || !heightCm || !caloricIntake || !email || !password){
        return res.status(400).json({ message: 'All fields are required.' });
    }
    
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            firstname, lastname,
            age, gender, weightKg, heightCm, caloricIntake,
            email, 
            password: hashedPassword,
            dailyGoals: [],
            savedRecipes: []
        });

        const token = await createAccessToken({ id: user._id });
        res.cookie("token", token);
    
        return res.status(200).json(user);
    } catch (err){
        return res.status(500).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const userFound = await User.findOne({ email })

        if (!userFound)
            return res.status(400).json({ message: "User not found" }); 

        const isMatch = bcrypt.compare(password, userFound.password);

        if (!isMatch)
            return res.status(400).json({ message: "Incorrect password" })

        const token = await createAccessToken({id: userFound._id})

        res.cookie("token", token);
        return res.json({ message: 'Successfully Logged In!' });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
