import mongoose, { Schema } from 'mongoose';

const UserSurveySchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      validate: {
        validator: (e) => e < 18,
        message: 'This app is intended for users that are ages 18 and up.'
      },
      trim: true
    },
    weightlbs: {
      type: Number,
      required: true,
      trim: true
    },
    heightcm: {
      type: Number,
      required: true,
      trim: true
    },
    caloricIntake: {
      type: Number,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (e) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e),
        message: 'Please enter a valid email',
      },
      trim: true
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 8
    },
    dailyGoals: [
      {
        type: Schema.Types.ObjectId,
        ref: 'DaylyGoals'
    }
    ],
    savedRecipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SavedRecipes'
    }
    ]
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

const UserSurvey = mongoose.model('UserSurvey', UserSurveySchema);
export default UserSurvey;