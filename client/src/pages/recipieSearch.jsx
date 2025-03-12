import '../css/recipieSearch.css';
import React from 'react';
import Header from '../components/Header';
import {useNavigate} from 'react-router-dom';

export default function recipieSearch(){
    const navigate = useNavigate();
    const handleClick = () => {
        const result = {searchRecipie};
        navigate.push ({
            pathname: './recipieList',
            state: { result }
        });
    };
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
                                    <input id='celeryFree' type="checkbox">Celery-Free</input>
                                    <input id='crustaceanFree' type="checkbox">Crustacean-Free</input>
                                    <input id='dairyFree' type="checkbox">Dairy-Free</input>
                                    <input id='eggFree' type="checkbox">Egg-Free</input>
                                    <input id='fishFree' type="checkbox">Fish-Free</input>
                                <br/>
                                    <input id='glutenFree' type="checkbox">Gluten-Free</input>
                                    <input id='lupineFree' type="checkbox">Lupine-Free</input>
                                    <input id='mustardFree' type="checkbox">Mustard-Free</input>
                                    <input id='peanutFree' type="checkbox">Peanut-Free</input>
                                    <input id='sesameFree' type="checkbox">Sesame-Free</input>
                                <br/>
                                    <input id='shellfishFree' type="checkbox">Shellfish-Free</input>
                                    <input id='soyFree' type="checkbox">Soy-Free</input>
                                    <input id='treeNutFree' type="checkbox">Tree-Nut-Free</input>
                                    <input id='wheatFree' type="checkbox">Wheat-Free</input>
                            </div>
                            <div id="dietsBox">
                                    <input id='alcoholFree' type="checkbox">Alcohol-Free</input>
                                    <input id='balanced' type="checkbox">Balanced</input>
                                    <input id='highFiber' type="checkbox">High-Fiber</input>
                                    <input id='highProtien' type="checkbox">High-Protien</input>
                                    <input id='keto' type="checkbox">Keto</input>
                                <br/>
                                    <input id='kidneyFriendly' type="checkbox">Kidney Friendly</input>
                                    <input id='kosher' type="checkbox">Kosher</input>
                                    <input id='lowCarb' type="checkbox">Low-Carb</input>
                                    <input id='lowFat' type="checkbox">Low-Fat</input>
                                    <input id='lowPotassium' type="checkbox">Low Potassium</input>
                                <br/>
                                    <input id='lowSodium' type="checkbox">Low-Sodium</input>
                                    <input id='noOilAdded' type="checkbox">No oil added</input>
                                    <input id='paleo' type="checkbox">Paleo</input>
                                    <input id='pescatarian' type="checkbox">Pescatarian</input>
                                    <input id='porkFree' type="checkbox">Pork-free</input>
                                <br/>    
                                    <input id='redMeatFree' type="checkbox">Red meat-free</input>
                                    <input id='sugarConcious' type="checkbox">Sugar-conscious</input>
                                    <input id='vegan' type="checkbox">Vegan</input>
                                    <input id='vegetarian' type="checkbox">Vegetarian</input>
                            </div>
                            <div id="caloriesBox">
                                <p>Please provide minimum desired calories per serving. Defalt is 1</p>
                                <input id='caloriesMIN' type='number'></input> <p>kcal</p>
                                <p>Please provide maximum desired calories per serving. Defalt is 100</p>
                                <input id='caloriesMAX' type='number'></input> <p>kcal</p>
                            </div>
                        </section>
                        <div id='div-right' class='side-div'>
                            <button id='searchButton'onClick={handleClick}>Search</button>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    </>
  );
}