import styles from '../css/header.module.css';
import '../App.css';
import { homePageTab } from './SwitchTab';
import { personalGoalTab } from './SwitchTab';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function activate(){
    setIsActive((prev) => !prev);
  }

  async function logout(){
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
    });

    if (!response.ok){
      const err = await response.json();
        console.error(err || "Error occured while logging you out.");
        return;
    }

    setLoggedIn(false);
    navigate('/login');
  }

  return(
    <header className={styles.header}>
 {/* start_template */}
      <nav>
       <h1>FitStart</h1>
        <img src="../../images/fitStart(1).png" onClick={homePageTab} id='logo' alt='FitStartLogo' style={{cursor:'pointer'}}/>
        <img id='user' alt='userProfile' />
        <h2 onClick={personalGoalTab} id='goals' style={{cursor:'pointer'}}>Goals</h2>
   
      </nav>

      <div className={styles.profileContainer}>
        <p></p>
        <button onClick={activate}>
        <img src="../../images/blankpfp.png"/>
        </button>
        {isLoggedIn && isActive ?
        <div className={styles.dropdownActive}>
          <button onClick={() => {
            navigate('/home');
          }}>
            Home
          </button>
          <button onClick={() => {
            navigate('/signup');
          }}>Create Account</button>
          <button onClick={logout}>Logout</button>
        </div>
        : isActive ?
        <div className={styles.dropdownActive}>
          <button onClick={() => {
            navigate('/signup');
          }}>Create Account</button>
          <button onClick={() => {
            navigate('/login');
          }}>Login</button>
        </div>
        : 
        <div className={styles.dropdown}>
          <button>Create Account</button>
          <button>Login</button>
        </div>
        }

      </div>
 {/* main */}
    </header>
  )
}