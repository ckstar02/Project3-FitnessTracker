import React, { useState } from "react";
import '../css/calender.css';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [popup, setpopup] = useState(false);
  const [goal, setgoal] = useState("");
  const [date, setdate] = useState("");
  const [goals, setgoals] = useState([]);

  const savegoal = () => {
    setgoals([...goals, { goal, date }]);
    setgoal("");
    setdate("");
    setpopup(false);
  };

  const cancelgoal = () => {
    setgoal("");
    setdate("");
    setpopup(false);
  };

  const getCurrentdate = () => {
    const today = new Date();
    const options = { month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  };

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
    <div className="container">
      <div className="calendar">
        <div className="calendar-header">
          <span>{getCurrentdate()}</span>
          <button className="add-button" onClick={() => {navigate('/home')}}>Home</button>
          <button className="add-button" onClick={() => setpopup(true)}>Add goal</button>
        </div>
        <div className="calendar-days">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day">
              {day}
            </div>
          ))}
        </div>
      </div>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Enter goal</h3>
            <input
              type="text"
              placeholder="Enter daily goal"
              value={goal}
              onChange={(evt) => setgoal(evt.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(evt) => setdate(evt.target.value)}
            />
            <div className="popup-buttons">
              <button onClick={savegoal}>Submit</button>
              <button onClick={cancelgoal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="goals-list">
        <h3>Goals</h3>
        <ul>
          {goals.map((item, index) => (
            <li key={index}>{item.date}: {item.goal}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default App;
