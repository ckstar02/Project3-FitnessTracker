import '../css/home.css';
import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export default function Home(){
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [goals, setGoals] = useState([]);
  const [subtractNum, setNum] = useState(0);
  const [addNum, setAddNum] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  const userId = user?._id;

  function calculateExercise(){
    setAddNum(minutes * 10);
  }

  useEffect(() => {
    if (!userId) return;

    const fetchGoals = async () => {
      const response = await fetch(`/api/user/${userId}/goals`);

    if (!response.ok){
      const err = await response.json();
      console.error(err.error);
      return;
    }

    setGoals(await response.json());
    };
    fetchGoals();
  }, [userId])

  return(
    <>
      <Header/>
      {!user ?
    <main className="mainContainer">
      
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
      {goals.map((goal, index) => (
        <div key={index}>
          <h2>{goal.name}</h2>
          <p>{goal.description}</p>
        </div>
      ))}
        <button onClick={() => {
          navigate('/dailygoal');
        }}>Add new Goal</button>
      </div>

      <h1>Saved Recipes</h1>
      <div className="recipeContainer">

        <button onClick={() => {
          navigate('/recipesearch');
        }}>Search for new Recipe</button>
      </div>
    </main>
      }
    </>
  )
}