import mongoose, { Schema } from 'mongoose';

const UserSurveySchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required."],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, "Last name is required."],
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: [18, "This app is intended for those who are 18 and up."],
      trim: true
    },
    gender: {
      type: String,
      required: [true, "Gender is needed to calculate your caloricIntake."],
      trim: true,
      enum: ['Male', 'Female']
    },
    weightKg: {
      type: Number,
      required: [true, "Weight is needed to calculate your caloricIntake."],
      trim: true,
    },
    heightCm: {
      type: Number,
      required: [true, "Height is needed to calculate your caloricIntake."],
      trim: true
    },
    caloricIntake: {
      type: Number,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      validate: {
        validator: (email) => {
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        },
        message: "Please enter a valid email address."
      },
      unique: true
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      trim: true,
      minlength: [8, 'Password must be atleast 8 characters long.']
    },
    dailyGoals: [
      {
        type: Schema.Types.ObjectId,
        ref: 'DailyGoals'
    }
    ],
    savedRecipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }
    ]
  },{
    timestamps: true,
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);

//Virtual for dailyGoals
UserSurveySchema.virtual('numDailyGoals').get(() => {
  return this.dailyGoals?.length || 0;
});

// Virtual for savedRecipes
UserSurveySchema.virtual('numSavedRecipe').get(() => {
  return this.savedRecipes?.length || 0;
});

const User = mongoose.model('UserSurvey', UserSurveySchema);
export default User;