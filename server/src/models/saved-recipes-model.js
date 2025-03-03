import mongoose from "mongoose";

const savedRecipes = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      calories: {
        type: Number,
        required: true,
      }
},{
    timestamps: true,
})

export default mongoose.model('Recipe', savedRecipes)