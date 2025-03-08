import UserSurvey from "../models/user-survey-model.js";


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
    const { firstname, lastname, age, weightlbs, heightft } = req.body
    const newSurvey = new UserSurvey({
        firstname,
        lastname,
        age,
        weightlbs,
        heightft
    })
    const savedSurvey = await newSurvey.save()
    res.json(savedSurvey)

    //   const {
    //     firstName, lastName,
    //     age, weight, height, activityLvl, calories,
    //     email, password
    //   } = req.body;
    
    //   if (!firstName || lastName || age || weight || height || activityLvl || calories || email || password){
    //     res.status(400).json({ message: 'All fields are required' });
    //   }
    
    //   const hashedPassword = await bcrypt(password, 10);
    //   try {
    //     const user = await User.create({ firstName, lastName,
    //        age, weight, height, calories, 
    //        email, hashedPassword,
    //       dailyGoals: [],
    //       savedRecipes: []
    //       });
          
    //       await user.save();
    //       res.status(201).json(user);
    //   } catch (err) {
    //     res.status(500).json({ message: err.message });
    //   }
    // };
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