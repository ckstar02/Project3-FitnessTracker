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
                                <input id='celeryFree' type="checkbox" />
                                    <label for='celeryFree'>Celery Free</label>
                                <input id='crustaceanFree' type="checkbox" />
                                    <label for='crustaceanFree'>Crustacean-Free</label>
                                <input id='dairyFree' type="checkbox" />
                                    <label for='dairyFree'>Dairy-Free</label>
                                <input id='eggFree' type="checkbox" />
                                    <label for='eggFree'>Egg-Free</label>
                                <input id='fishFree' type="checkbox" />
                                    <label for='fishFree'>Fish-Free</label>
                                <br/>
                                <input id='glutenFree' type="checkbox" />
                                    <label for='glutenFree'>Gluten-Free</label>
                                <input id='lupineFree' type="checkbox" />
                                    <label for='lupineFree'>Lupine-Free</label>
                                <input id='mustardFree' type="checkbox" />
                                    <label for='mustardFree'>Mustard-Free</label>
                                <input id='peanutFree' type="checkbox" />
                                    <label for='peanutFree'>Peanut-Free</label>
                                <input id='sesameFree' type="checkbox" />
                                    <label for='sesameFree'>Sesame-Free</label>
                                <br/>
                                <input id='shellfishFree' type="checkbox" />
                                    <label for='shellfishFree'>Shellfish-Free</label>
                                <input id='soyFree' type="checkbox" />
                                    <label for='soyFree'>Soy-Free</label>
                                <input id='treeNutFree' type="checkbox" />
                                    <label for='treeNutFree'>Tree-Nut-Free</label>
                                <input id='wheatFree' type="checkbox" />
                                    <label for='wheatFree'>Wheat-Free</label>
                            </div>
                            <div id="dietsBox">
                                <input id='alcoholFree' type="checkbox" /> 
                                    <label for='alcoholFree'>Alcohol Free</label>
                                <input id='balanced' type="checkbox" />
                                    <label for='balanced'>Balanced</label>
                                <input id='highFiber' type="checkbox" />
                                    <label for='highFiber'>High-Fiber</label>
                                <input id='highProtien' type="checkbox" />
                                    <label for='highProtien'>High-Protien</label>
                                <input id='keto' type="checkbox" />
                                    <label for='keto'>Keto</label>
                                <br/>
                                <input id='kidneyFriendly' type="checkbox" />
                                    <label for='kidneyFriendly'>Kidney Friendly</label>
                                <input id='kosher' type="checkbox" />
                                    <label for='kosher'>Kosher</label>
                                <input id='lowCarb' type="checkbox" />
                                    <label for='lowCarb'>Low-Carb</label>
                                <input id='lowFat' type="checkbox" />
                                    <label for='lowFat'>Low-Fat</label>
                                <input id='lowPotassium' type="checkbox" />
                                    <label for='lowPotassium'>Low Potassium</label>
                                <br/>
                                <input id='lowSodium' type="checkbox" />
                                    <label for='lowSodium'>Low-Sodium</label>
                                <input id='noOilAdded' type="checkbox" />
                                    <label for='noOilAdded'>No oil added</label>
                                <input id='paleo' type="checkbox" />
                                    <label for='paleo'>Paleo</label>
                                <input id='pescatarian' type="checkbox" />
                                    <label for='pescatarian'>Pescatarian</label>
                                <input id='porkFree' type="checkbox" />
                                    <label for='porkFree'>Pork-free</label>
                                <br/>    
                                <input id='redMeatFree' type="checkbox" />
                                    <label for='redMeatFree'>Red meat-free</label>
                                <input id='sugarConcious' type="checkbox" />
                                    <label for='sugarConcious'>Sugar-conscious</label>
                                <input id='vegan' type="checkbox" />
                                    <label for='vegan'>Vegan</label>
                                <input id='vegetarian' type="checkbox" />
                                    <label for='vegetarian'>Vegetarian</label>
                            </div>
                            <div id="caloriesBox">
                                <p>Please provide minimum desired calories per serving. Defalt is 1</p>
                                <input id='caloriesMIN' type='number'></input> <p>kcal</p>
                                <br />
                                <p>Please provide maximum desired calories per serving. Defalt is 100</p>
                                <input id='caloriesMAX' type='number'></input> <p>kcal</p>
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