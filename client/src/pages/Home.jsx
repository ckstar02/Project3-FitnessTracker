import '../css/home.css';
import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export default function Home(){
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [subtractNum, setNum] = useState(0);
  const [addNum, setAddNum] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // console.log(user);

  function calculateExercise(){
    setAddNum(minutes * 10);
  }

  return(
    <>
      <Header/>
      {!user ?
                <main className="mainContainer">
                <h1>General</h1>
                <div className="generalContainer">
                  <div>
                  <h2>Calories:</h2>
                  <p>Remaining: Goal - Food + Exercise</p>
                  <h3 style={{ textAlign: 'center' }}>2100</h3>
                  <p style={{ textAlign: 'center' }}>Remaining</p>
                  </div>
      
                  <div>
                    <h1>Name: </h1>
                    <h2>Goal</h2>
                    <p style={{ textAlign: 'center' }}>2100</p>
                  </div>
                </div>
      
                <h1>Daily Goals</h1>
                <div className="goalsContainer">
                  <button onClick={() => {
                    navigate('/personalgoals');
                  }}>Add neww Goal</button>
                </div>
      
                <h1>Saved Recipes</h1>
                <div className="recipeContainer">
                  <div>
                    <h2>Pasta</h2>
                    <img />
                    <p>Link to Recipe: <a></a></p>
                  </div>
                  <div>
                    <h2>Chicken</h2>
                    <img />
                    <p>Link to Recipe: <a></a></p>
                  </div>
                  <button onClick={() => {
                    navigate('/recipesearch');
                  }}>Search for new Recipe</button>
                </div>
              </main>
      :
      <main className="mainContainer">
      <h1>{user.firstname +' '+ user.lastname +':'}</h1>
      <div className="generalContainer">
        <div>
        <h2>Calories:</h2>
        <p>Remaining: Goal - Food + Exercise</p>
        <h3 style={{ textAlign: 'center' }}>{user.caloricIntake + addNum - subtractNum}</h3>
        <p style={{ textAlign: 'center' }}>Remaining</p>
        </div>

        <div>
          <h2>What's your goal:</h2>
          <p style={{ textAlign: 'center' }}>0.5lbs every week</p>
          <button className="subtractBtn" onClick={() => {setNum(500)}}>- 500 to calories</button>
          <p style={{ textAlign: 'center' }}>1lb every week</p>
          <button className="subtractBtn" onClick={() => {setNum(1000)}}>- 1000 to calories</button>
        </div>

        <div className='exerciseContainer'>
          <h2>How many minutes have you ran today</h2>
          <input 
            type="number"
            name="minsRan"
            onChange={(e) => setMinutes(e.target.value)}
          />
          <button onClick={calculateExercise}>Submit</button>
        </div>
      </div>

      <h1>Daily Goals</h1>
      <div className="goalsContainer">
      {user.dailyGoals.map((goal, index) => (
        <div key={index}>
          <h2>{goal.name}</h2>
          <img src={goal.img}/>
          <p>Link to recipe: {goal.link}</p>
        </div>
      ))}
        {/* <div>
          <h2>hoursOfSleep</h2>

        </div> */}
        <button onClick={() => {
          navigate('/personalgoals');
        }}>Add new Goal</button>
      </div>

      <h1>Saved Recipes</h1>
      <div className="recipeContainer">
      {user.savedRecipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
            <img src={recipe.img}/>
            <p>Link to recipe: {goal.link}</p>
        </div>
      ))}
        {/* <div>
          <h2>Pasta</h2>
          <img />
          <p>Link to Recipe: <a></a></p>
        </div>
        <div>
          <h2>Chicken</h2>
          <img />
          <p>Link to Recipe: <a></a></p>
        </div> */}
        <button onClick={() => {
          navigate('/recipesearch');
        }}>Search for new Recipe</button>
      </div>
    </main>
      }
    </>
  )
}
