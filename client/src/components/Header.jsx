import styles from '../css/header.module.css';
import '../App.css';
import { homePageTab } from './SwitchTab';
import { personalGoalTab } from './SwitchTab';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function Header(){
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const decoded = jwtDecode(token);
  const userId = decoded.id;

  const [isLoggedIn, setLoggedIn] = useState(true);
  const [isActive, setIsActive] = useState(false);

  if (!token){
    setLoggedIn(false);
  }

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

  async function deleteAccount(){
    const response = await fetch(`api/user/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok){
      console.error('Error occured while deleting your account.');
    }

    const answer = prompt('Are you sure you want to delete your account? Please enter Yes or No.');

    if (answer === 'Yes' || answer === "yes"){
      logout();
      navigate('/login');
    } else{
      return;
    }
  }

  return(
    <header className={styles.header}>
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
          <button onClick={deleteAccount}>Delete Account</button>
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
    </header>
  )
}