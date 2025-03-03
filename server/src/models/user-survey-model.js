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
    heightft: {
      type: Number,
      required: true,
      trim: true
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
  },{
    timestamps: true,
  },
  {
    toJSON: {
      virtuals: true
    },
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