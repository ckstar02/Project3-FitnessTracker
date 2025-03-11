import styles from '../css/header.module.css';
import '../App.css';
import { homePageTab } from './SwitchTab';
import { personalGoalTab } from './SwitchTab';
import { useState } from 'react';

export default function Header(){
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function activate(){
    setIsActive((prev) => !prev);
  }

  return(
    <header className={styles.header}>
 {/* start_template */}
      <nav>
       <h1>FitStart</h1>
        <img src="../../images/fitStart(1).png" onClick={homePageTab} id='logo' alt='FitStartLogo' style={{cursor:'pointer'}}/>
        <img id='user' alt='userProfile' />
        <h2 onClick={personalGoalTab} id='goals' style={{cursor:'pointer'}}>Goals</h2>
        <h2 id='username'>Username</h2>
      </nav>

      <div className={styles.profileContainer}>
        <p></p>
        <button onClick={activate}>
        <img src="../../images/blankpfp.png"/>
        </button>
        <div className={styles.dropdownActive}>
          <button>Create Account</button>
          <button>Login</button>
        </div>
      </div>
{/* 
      { isLoggedIn ? 
          <button>Log Out</button>
        :
          <button>Log In</button>
        } */}
 {/* main */}
    </header>
  )
}