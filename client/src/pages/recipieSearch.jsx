import '../css/recipieSearch.css';
import React from 'react';
import Header from '../components/Header';

export default function recipieSearch(){
  return(
    <>
      <Header />
        <main>
            <section>
                <div id="box">
                    <h1>Recipie Search</h1>
                    <section>
                        <div id='div-left' class='side-div'>
                            <h2 id='keyword'>Search By Keyword</h2>
                            <br/>
                            <h2 id='allergies'>Allergies</h2>
                            <br/>
                            <h2 id='diets'>Diets</h2>
                            <br/>
                            <h2 id='calories'>Calories</h2>
                            <br/>
                            <h2 id='nutrients'>Nutrients</h2>
                        </div>
                        <section id="details">
                            <div id="keywordBox">
                                <p>Enter keywords for recipies. Ex "coffee" or "chicken enchilada"</p>
                                <h3>Keywords</h3>
                                <textarea id='keywordResponse'>Type one or more keywords</textarea>
                            </div>
                            <div id="allergiesBox">
                                    <input id='celery-free' type="checkbox">Celery-Free</input>
                                    <input id='crustacean-free' type="checkbox">Crustacean-Free</input>
                                    <input id='dairy-free' type="checkbox">Dairy-Free</input>
                                    <input id='egg-free' type="checkbox">Egg-Free</input>
                                    <input id='fish-free' type="checkbox">Fish-Free</input>
                                <br/>
                                    <input id='gluten-free' type="checkbox">Gluten-Free</input>
                                    <input id='lupine-free' type="checkbox">Lupine-Free</input>
                                    <input id='mustard-free' type="checkbox">Mustard-Free</input>
                                    <input id='peanut-free' type="checkbox">Peanut-Free</input>
                                    <input id='sesame-free' type="checkbox">Sesame-Free</input>
                                <br/>
                                    <input id='shellfish-free' type="checkbox">Shellfish-Free</input>
                                    <input id='soy-free' type="checkbox">Soy-Free</input>
                                    <input id='tree-nut-free' type="checkbox">Tree-Nut-Free</input>
                                    <input id='wheat-free' type="checkbox">Wheat-Free</input>
                            </div>
                            <div id="dietsBox">
                                    <input id='alcohol-free' type="checkbox">Alcohol-Free</input>
                                    <input id='balanced' type="checkbox">Balanced</input>
                                    <input id='high-fiber' type="checkbox">High-Fiber</input>
                                    <input id='high-protien' type="checkbox">High-Protien</input>
                                    <input id='keto' type="checkbox">Keto</input>
                                <br/>
                                    <input id='kidney-friendly' type="checkbox">Kidney Friendly</input>
                                    <input id='kosher' type="checkbox">Kosher</input>
                                    <input id='low-carb' type="checkbox">Low-Carb</input>
                                    <input id='low-fat' type="checkbox">Low-Fat</input>
                                    <input id='low-potassium' type="checkbox">Low Potassium</input>
                                <br/>
                                    <input id='low-sodium' type="checkbox">Low-Sodium</input>
                                    <input id='no-oil-added' type="checkbox">No oil added</input>
                                    <input id='paleo' type="checkbox">Paleo</input>
                                    <input id='pescatarian' type="checkbox">Pescatarian</input>
                                    <input id='pork-free' type="checkbox">Pork-free</input>
                                <br/>    
                                    <input id='red-meat-free' type="checkbox">Red meat-free</input>
                                    <input id='sugar-concious' type="checkbox">Sugar-conscious</input>
                                    <input id='vegan' type="checkbox">Vegan</input>
                                    <input id='vegetarian' type="checkbox">Vegetarian</input>
                            </div>
                            <div id="caloriesBox">
                                <p>Please provide minimum desired calories per serving. Defalt is 1</p>
                                <input id='calories-min' type='number'></input> <p>kcal</p>
                                <p>Please provide maximum desired calories per serving. Defalt is 100</p>
                                <input id='calories-max' type='number'></input> <p>kcal</p>
                            </div>
                            <div id="nutrientsBox">
                                <h3>Macronutrients</h3>
                                    <input id='fat' type="checkbox">Fat</input>
                                    <input id='saturated' type="checkbox">Saturated</input>
                                    <input id='trans' type="checkbox">Trans</input>
                                    <input id='monounsaturated' type="checkbox">Monounsaurated</input>
                                    <input id='polyunsaturated' type="checkbox">Polyunsaturated</input>
                                <br/>
                                    <input id='carbs' type="checkbox">Carbs</input>
                                    <input id='fiber' type="checkbox">Fiber</input>
                                    <input id='sugars' type="checkbox">Sugars</input>
                                    <input id='protien' type="checkbox">Protien</input>
                                <h3>Micronutrients</h3>
                                    <input id='cloesterol' type="checkbox">Cloesterol</input>
                                    <input id='sodium' type="checkbox">Sodium</input>
                                    <input id='calcium' type="checkbox">Calcium</input>
                                    <input id='magnesium' type="checkbox">Magnesium</input>
                                    <input id='potassium' type="checkbox">Potassium</input>
                                <br/>
                                    <input id='iron' type="checkbox">Iron</input>
                                    <input id='phosphorus' type="checkbox">Phosphorus</input>
                                    <input id='vitamin-a' type="checkbox">Vitamin A</input>
                                    <input id='vitamin-c' type="checkbox">Vitamin C</input>
                                    <input id='thiamin' type="checkbox">Thiamin (B1)</input>
                                <br/>
                                    <input id='ribolavin' type="checkbox">Riboflavin (B2)</input>
                                    <input id='niacin' type="checkbox">Niacin (B3)</input>
                                    <input id='vitamin-b6' type="checkbox">Vitamin B6</input>
                                    <input id='folate' type="checkbox">Folate (Equivalent)</input>
                                    <input id='vitamin-b12' type="checkbox">Vitamin B12</input>
                                <br/>
                                    <input id='vitamin-d' type="checkbox">Vitamin D</input>
                                    <input id='vitamin-e' type="checkbox">Vitamin E</input>
                                    <input id='vitamin-k' type="checkbox">Vitamin K</input>
                            </div>
                        </section>
                        <div id='div-right' class='side-div'>
                            <button id='searchButton'onClick={searchRecipie}>Search</button>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    </>
  );
}