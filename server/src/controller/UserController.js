import express from 'express';
// import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from "../models/index.js";

const app = express();
app.use(express.json());

// Get all Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('dailyGoals').populate('savedRecipes');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get User by id
export const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('dailyGoals').populate('savedRecipes');
    if (!user){
      res.status(404).json({ message: 'User by that id not found.' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Create User
export const createUser = async (req, res) => {
  const {
    firstName, lastName,
    age, weight, height, activityLvl, calories,
    email, password
  } = req.body;

  if (!firstName || lastName || age || weight || height || activityLvl || calories || email || password){
    res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = await bcrypt(password, 10);
  try {
    const user = await User.create({ firstName, lastName,
       age, weight, height, calories, 
       email, hashedPassword,
      dailyGoals: [],
      savedRecipes: []
      });
      
      await user.save();
      res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginToAcc = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password){
    res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user){
      res.status(404).json({ message: 'Incorrect email.'});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      res.status(404).json({ message: 'Incorrect password.' });
    }

    const payload = { email, role: 'user'};
    const token = jwt.sign(payload, createSecretKey, { expiresIn: '1h' });

    const safeUser = {
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email
    };

    res.status(200).json({success: true, token, user: safeUser});
  } catch (err) {
    res.status(500).json({ messsage: err.message });
  }
}