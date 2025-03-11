import React, {useEffect, useData} from 'react';
import { useLocation } from 'react-router-dom';
import recipieSearch from '../pages/recipieSearch';

export const searchRecipie = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let apirequest = "https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=3342f2d5&app_key=44ff12f05c664ef3be2be0381";

    //Getting the response
    const celeryFree = document.getElementById('celeryFree');
    const crustaceanFree = document.getElementById('crustaceanFree');
    const dairyFree = document.getElementById('dairyFree');
    const eggFree = document.getElementById('eggFree');
    const fishFree = document.getElementById('fishFree');
    const glutenFree = document.getElementById('glutenFree');
    const lupineFree = document.getElementById('lupineFree');
    const mustardFree = document.getElementById('mustardFree');
    const peanutFree = document.getElementById('peanutFree');
    const sesameFree = document.getElementById('sesameFree');
    const shellfishFree = document.getElementById('shellfishFree');
    const soyFree = document.getElementById('soyFree');
    const treeNutFree = document.getElementById('treeNutFree');
    const wheatFree = document.getElementById('wheatFree');
    const alcoholFree = document.getElementById('alcoholFree');
    const balanced = document.getElementById('balanced');
    const highFiber = document.getElementById('highFiber');
    const highProtien = document.getElementById('highProtien');
    const keto = document.getElementById('keto');
    const kidneyFriendly = document.getElementById('kidneyFriendly');
    const kosher = document.getElementById('kosher');
    const lowCarb = document.getElementById('lowCarb');
    const lowFat = document.getElementById('lowFat');
    const lowPotassium = document.getElementById('lowPotassium');
    const lowSodium = document.getElementById('lowSodium');
    const noOilAdded = document.getElementById('noOilAdded');
    const paleo = document.getElementById('paleo');
    const pescatarian = document.getElementById('pescatarian');
    const porkFree = document.getElementById('porkFree');
    const redMeatFree = document.getElementById('redMeatFree');
    const sugarConcious = document.getElementById('sugarConcious');
    const vegan = document.getElementById('vegan');
    const vegetarian = document.getElementById('vegetarian');
    const fat = document.getElementById('fat');
    const saturated = document.getElementById('saturated');
    const trans = document.getElementById('trans');
    const monounsaturated = document.getElementById('monounsaturated');
    const polyunsaturated = document.getElementById('polyunsaturated');
    const carbs = document.getElementById('carbs');
    const fiber = document.getElementById('fiber');
    const sugars = document.getElementById('sugars');
    const protein = document.getElementById('protein');
    const cloesterol = document.getElementById('cloesterol');
    const sodium = document.getElementById('sodium');
    const calcium = document.getElementById('calcium');
    const magnesium = document.getElementById('magnesium');
    const potassium = document.getElementById('potassium');
    const iron = document.getElementById('iron');
    const phosphorus = document.getElementById('phosphorus');
    const vitaminA = document.getElementById('vitaminA');
    const vitaminC = document.getElementById('vitaminC');
    const thiamin = document.getElementById('thiamin');
    const ribolavin = document.getElementById('ribolavin');
    const niacin = document.getElementById('niacin');
    const vitaminB6 = document.getElementById('vitaminB6');
    const folate = document.getElementById('folate');
    const vitaminB12 = document.getElementById('vitaminB12');
    const vitaminD = document.getElementById('vitaminD');
    const vitaminE = document.getElementById('vitaminE');
    const vitaminK = document.getElementById('vitaminK');
    const caloriesMAX = document.getElementById('caloriesMAX');
    const caloriesMIN = document.getElementById('caloriesMIN');
    
    if (celeryFree.checked) {
        apirequest += '&health=celery-free';
    }
    if(crustaceanFree.checked){
        apirequest = apirequest + '&health=crustacean-free';
    }
    if(dairyFree.checked){
        apirequest = apirequest + '&health=dairy-free';
    }
    if(eggFree.checked){
        apirequest = apirequest + '&health=eg-free';
    }
    if(fishFree.checked){
        apirequest = apirequest + '&health=fish-free';
    }
    if(glutenFree.checked){
        apirequest = apirequest + '&health=gluten-free';
    }
    if(lupineFree.checked){
        apirequest = apirequest + '&health=lupine-free';
    }
    if(mustardFree.checked){
        apirequest = apirequest + '&health=mustard-free';
    }
    if(peanutFree.checked){
        apirequest = apirequest + '&health=peanut-free';
    }
    if(sesameFree.checked){
        apirequest = apirequest + '&health=sesame-free';
    }
    if(shellfishFree.checked){
        apirequest = apirequest + '&health=shellfish-free';
    }
    if(soyFree.checked){
        apirequest = apirequest + '&health=soy-free';
    }
    if(treeNutFree.checked){
        apirequest = apirequest + '&health=tree-nut-free';
    }
    if(wheatFree.checked){
        apirequest = apirequest + '&health=wheat-free';
    }
    if(alcoholFree.checked){
        apirequest = apirequest + '&health=alcohol-free';
    }
    if(balanced.checked){
        apirequest = apirequest + '&diet=balanced';
    }
    if(highFiber.checked){
        apirequest = apirequest + '&diet=high-fiber';
    }
    if(highProtien.checked){
        apirequest = apirequest + '&diet=high-protien';
    }
    if(keto.checked){
        apirequest = apirequest + '&health=keto-friendly';
    }
    if(kidneyFriendly.checked){
        apirequest = apirequest + '&health=kidney-friendly';
    }
    if(kosher.checked){
        apirequest = apirequest + '&health=kosher';
    }
    if(lowCarb.checked){
        apirequest = apirequest + '&diet=low-carb';
    }
    if(lowFat.checked){
        apirequest = apirequest + '&diet=low-fat';
    }
    if(lowPotassium.checked){
        apirequest = apirequest + '&health=low-potassium';
    }
    if(lowSodium.checked){
        apirequest = apirequest + '&diet=low-sodium';
    }
    if(noOilAdded.checked){
        apirequest = apirequest + '&health=no-oil-added';
    }
    if(paleo.checked){
        apirequest = apirequest + '&health=paleo';
    }
    if(pescatarian.checked){
        apirequest = apirequest + '&health=pescatarian';
    }
    if(porkFreee.checke){
        apirequest = apirequest + '&health=pork-free';
    }
    if(redMeatFree.checked){
        apirequest = apirequest + '&health=red-meat-free';
    }
    if(sugarConcious.checked){
        apirequest = apirequest + '&health=sugar-concious';
    }
    if(vegan.checked){
        apirequest = apirequest + '&health=vegan';
    }
    if(vegetarian.checked){
        apirequest = apirequest + '&health=vegetarian';
    }

    if (caloriesMIN.value != "" && caloriesMAX.value != ""){
        apirequest = apirequest + `&calories=${caloriesMIN.value}-${caloriesMAX.value}`;
    } else if (caloriesMIN.value != ""){
        apirequest = apirequest + `&calories=${caloriesMIN.value}-100`;
    } else if (caloriesMAX.value != ""){
        apirequest = apirequest + `&calories=1-${caloriesMAX.value}`;
    }
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(apirequest);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading, Please Wait...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h1>Search Results:</h1>
            <p>Showing results from {data.from} to {data.to} out of {data.count} total results.</p>
            <div>
                <h2>Recipies:</h2>
                <ul>
                    {data.hits.map((item, index) => {
                        const recipe = item.recipe;
                        const thumbnailUrl = recipe.images.THUMBNAIL.url;
                        const label = recipe.label;
                        const shareAs = recipe.shareAs;
                        return (
                            <li key={index}>
                                <h3>{label}</h3>
                                <img src={thumbnailUrl} alt={label} />
                                <a href={shareAs} target="_blank" rel="noopener noreferrer">View Recipe </a>
                                <button onClick={test}>Save</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {data._links && data._links.next && (
                <a href={data._links.next.href}>{data._links.next.title}</a>
            )}
        </div>
    );
};