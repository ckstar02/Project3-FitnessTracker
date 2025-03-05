import Recipe from '../models/saved-recipes-model.js';

export const getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find()
    if (!recipes) return res.status(404).json({message: 'No recipes saved yet'})
    res.json(recipes)
}
export const getRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) return res.status({ message: 'Recipe not found'})
    res.json(recipe)
}

export const addRecipe = async (req, res) => {
    const { name, category, calories } = req.body

    const newRecipe = new Recipe({
        name, 
        category, 
        calories
    })
    const savedRecipe = await newRecipe.save()
    res.json(savedRecipe)

}
export const deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findByIdAndDelete(req.params.id)
    if (!recipe) return res.status(404).json({message: "Recipe not found"})
    res.json(recipe)
}
export const updateRecipe = async (req, res) => {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    if (!recipe) return res.status({message: 'Recipe not found'})
    res.json(recipe)
}