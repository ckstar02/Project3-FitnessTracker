import Header from "../components/Header";
import styles from '../css/dailygoals.module.css';
import { useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function DailyGoalPage(){
  const [goalName, setName] = useState('');
  const [goalDescription, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault()

    const token = Cookies.get('token');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    const data = {
      name: goalName,
      description: goalDescription
    };

    console.log(data);

    try {
      const response = await fetch(`/api/goals/user/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify(data)
      });

      if (!response.ok){
        console.error('Error creating your goal.');
      }

      console.log(response);

      setName('');
      setDescription('');
    } catch (err) {
      console.error('Error making your goal: ' +err.message);
    }
  }
  return (
    <>
      <Header />
      <main>
        <div className={styles.headingContainer}>
          <h2>Add Your Goal!</h2>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label>Goal Name:</label>
            <input 
              type="text"
              name="goalName"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Description</label>
            <textarea 
              typeof="text"
              name="goalDescription"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Goal</button>
          </form>
        </div>
      </main>
    </>
  )
}