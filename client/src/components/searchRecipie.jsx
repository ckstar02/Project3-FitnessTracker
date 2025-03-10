import React, {useState} from 'react';
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

    if (calories-min.value != "" && calories-max.value != ""){
        apirequest = apirequest + `&calories=${calories-min.value}-${calories-max.value}`;
    } else if (calories-min.value != ""){
        apirequest = apirequest + `&calories=${calories-min.value}-100`;
    } else if (calories-max.value != ""){
        apirequest = apirequest + `&calories=1-${calories-max.value}`;
    }

    if(fat.checked){
        apirequest = apirequest + '&health';
    }
    if(saturated.checked){
        apirequest = apirequest + '&health';
    }
    if(trans.checked){
        apirequest = apirequest + '&health';
    }
    if(monounsaturated.checked){
        apirequest = apirequest + '&health';
    }
    if(polyunsaturated.checked){
        apirequest = apirequest + '&health';
    }
    if(carbs.checked){
        apirequest = apirequest + '&health';
    }
    if(fiber.checked){
        apirequest = apirequest + '&health';
    }
    if(sugars.checked){
        apirequest = apirequest + '&health';
    }
    if(protein.checked){
        apirequest = apirequest + '&health';
    }
    if(cloesterol.checked){
        apirequest = apirequest + '&';
    }
    if(sodium.checked){
        apirequest = apirequest + '&';
    }
    if(calcium.checked){
        apirequest = apirequest + '&';
    }
    if(magnesium.checked){
        apirequest = apirequest + '&';
    }
    if(potassium.checked){
        apirequest = apirequest + '&';
    }
    if(iron.checked){
        apirequest = apirequest + '&';
    }
    if(phosphorus.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminA.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminC.checked){
        apirequest = apirequest + '&';
    }
    if(thiamin.checked){
        apirequest = apirequest + '&';
    }
    if(ribolavin.checked){
        apirequest = apirequest + '&';
    }
    if(niacin.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminB6.checked){
        apirequest = apirequest + '&';
    }
    if(folate.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminB12.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminD.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminE.checked){
        apirequest = apirequest + '&';
    }
    if(vitaminK.checked){
        apirequest = apirequest + '&';
    }
    fetch(apirequest)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then (data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    return{
        
    }
};