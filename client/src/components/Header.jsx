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

      <h1>FitStart</h1>
      <div className={styles.profileContainer}>
        <p>Ta'Lee</p>
        <button onClick={activate}>
        <img src="../../images/blankpfp.png"/>
        </button>
        {isLoggedIn && isActive?
          <div className={styles.dropdownActive}>
            <button>Logout</button>
          </div>
        : isActive?
          <div>
            <button>Log In</button>
          </div>
        : 
          <div>
            <button className={styles.dropdown}></button>
          </div>
        }
      </div>
 {/* main */}
    </header>
  )
}