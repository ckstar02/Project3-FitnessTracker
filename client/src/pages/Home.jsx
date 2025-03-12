import '../css/home.css';
import React, { useContext } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export default function Home(){
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);

  return(
    <>
      <Header/>
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
              <h1>Name: {user.firstname}</h1>
              <h2>Goal</h2>
              <p style={{ textAlign: 'center' }}>2100</p>
            </div>
          </div>

          <h1>Daily Goals</h1>
          <div className="goalsContainer">
            <div>
              <h2>hoursOfSleep</h2>

            </div>
            <button onClick={() => {
              navigate('/personalgoals');
            }}>Add new Goal</button>
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
    </>
  )
}