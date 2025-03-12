import '../css/personalGoals.css';
import React from 'react';
import Header from '../components/Header';
import { GoalManager } from '../components/goalManager';

export default function personalGoal(){
  return(
    <>
      <Header />
        <main>
            <section>
                <h1>Personal Goals</h1>
                <button onClick='addGoal()'>Add Goal</button>
                {isPopupVisible && (
                    <div className='addGoalPopup' id='popupTab'>
                        <div id='popupContainer'>
                            <h2>Add Personal Goal</h2>
                            <h3>Subject</h3>
                            <textarea/>
                            <h3>Description</h3>
                            <textarea/>
                            <br/>
                            <br/>
                            <button onClick={GoalManager}>Submit</button>
                        </div>
                    </div>
                )}
                <section id='goalContainer'>
                    {goals.map((goal, index) => (
                        <div key={index}>
                            <h3>{goal.subject}</h3>
                            <p>{goal.description}</p>
                        </div>
                    ))}
                </section>
            </section>
        </main>
    </>
  );
}