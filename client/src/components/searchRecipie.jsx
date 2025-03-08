import react from 'react';
import recipieSearch from '../pages/recipieSearch'

export const searchRecipie {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let apirequest = "https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=3342f2d5&app_key=44ff12f05c664ef3be2be0381"

    //Getting the response
    if(celery-free.checked==true){
        apirequest = apirequest + '&health=celery-free';
    }
    if(crustacen-free-free.checked==true){
        apirequest = apirequest + '&health=crustacen-free';
    }
    if(dairy-free.checked==true){
        apirequest = apirequest + '&health=dairy-free';
    }
    if(egg-free.checked==true){
        apirequest = apirequest + '&health=egg-free';
    }
    if(fish-free.checked==true){
        apirequest = apirequest + '&health=fish-free';
    }
    if(gluten-free.checked==true){
        apirequest = apirequest + '&health=gluten-free';
    }
    if(lupine-free.checked==true){
        apirequest = apirequest + '&health=lupine-free';
    }
    if(mustard-free.checked==true){
        apirequest = apirequest + '&helath=mustard-free';
    }
    if(peanut-free.checked==true){
        apirequest = apirequest + '&health=peanut-free';
    }
    if(sesame-free.checked==true){
        apirequest = apirequest + '&health=sesame-free';
    }
    if(shellfish-free.checked==true){
        apirequest = apirequest + '&health=shellfish-free';
    }
    if(soy-free.checked==true){
        apirequest = apirequest + '&health=soy-free';
    }
    if(tree-nut-free.checked==true){
        apirequest = apirequest + '&health=tree-nut-free';
    }
    if(wheat-free.checked==true){
        apirequest = apirequest + '&health=wheat-free';
    }

    if(alcohol-free.checked==true){
        apirequest = apirequest + '&health=alcohol-free';
    }
    if(balanced.checked==true){
        apirequest = apirequest + '&diet=balanced';
    }
    if(high-fiber.checked==true){
        apirequest = apirequest + '&diet=high-fiber';
    }
    if(high-protien.checked==true){
        apirequest = apirequest + '&diet=high-protien';
    }
    if(keto.checked==true){
        apirequest = apirequest + '&health=keto-friendly';
    }
    if(kidney-friendly.checked==true){
        apirequest = apirequest + '&health=kidney-friendly';
    }
    if(kosher.checked==true){
        apirequest = apirequest + '&health=kosher';
    }
    if(low-carb.checked==true){
        apirequest = apirequest + '&diet=low-carb';
    }
    if(low-fat.checked==true){
        apirequest = apirequest + '&diet=low-fat';
    }
    if(low-potassium.checked==true){
        apirequest = apirequest + '&health=low-potassium';
    }
    if(low-sodium.checked==true){
        apirequest = apirequest + '&diet=low-sodium';
    }
    if(no-oil-added.checked==true){
        apirequest = apirequest + '&health=no-oil-added';
    }
    if(paleo.checked==true){
        apirequest = apirequest + '&health=paleo';
    }
    if(pescatarian.checked==true){
        apirequest = apirequest + '&health=pescatarian';
    }
    if(pork-free.checked==true){
        apirequest = apirequest + '&health=pork-free';
    }
    if(red-meat-free.checked==true){
        apirequest = apirequest + '&health=red-meat-free';
    }
    if(sugar-concious.checked==true){
        apirequest = apirequest + '&health=sugar-concious';
    }
    if(vegan.checked==true){
        apirequest = apirequest + '&health=vegan';
    }
    if(vegetarian.checked==true){
        apirequest = apirequest + '&health=vegetarian';
    }

    if (calories-min.value != "" && calries-max.value != ""){
        apirequest = apirequest + `&calories=${calories-min.value}-${calories-max.value}`;
    } else if (calories-min.value != ""){
        apirequest = apirequest + `&calories=${calories-min.value}-100`;
    } else if (calories-max.value != ""){
        apirequest = apirequest + `&calories=1-${calories-max.value}`;
    }

    if(fat.checked==true){
        apirequest = apirequest + '&health';
    }
    if(saturated.checked==true){
        apirequest = apirequest + '&health';
    }
    if(trans.checked==true){
        apirequest = apirequest + '&health';
    }
    if(monounsaturated.checked==true){
        apirequest = apirequest + '&health';
    }
    if(polyunsaturated.checked==true){
        apirequest = apirequest + '&health';
    }
    if(carbs.checked==true){
        apirequest = apirequest + '&health';
    }
    if(fiber.checked==true){
        apirequest = apirequest + '&health';
    }
    if(sugars.checked==true){
        apirequest = apirequest + '&health';
    }
    if(protien.checked==true){
        apirequest = apirequest + '&health';
    }

}
