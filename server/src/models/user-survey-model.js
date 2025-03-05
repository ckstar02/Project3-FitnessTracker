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

export default mongoose.model('UserSurvey', UserSurveySchema);