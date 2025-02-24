import styles from '../css/login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navToSignUp(e){
    e.preventDefault();

    navigate('/signup');
  }

  function loginSubmit(e){
    e.preventDefault();

    navigate('/home');
  }

  return(
    <>
      <secion className={styles.headingContainer}>
        <h1>Login to your FitStart account.</h1>
      </secion>
      <div className={styles.formContainer}>
        <form className={styles.loginForm} onSubmit={loginSubmit}>
          <label>
            Enter your email
          </label>
          <input 
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Enter your password
          </label>
          <input 
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.loginFormBtn}>
            <button type="submit">
              Login
            </button>
          </div>

          <h3 style={{ textAlign: "center", marginTop: "60px"}}>
            Don't have an account?
          </h3>
          <h3 style={{ textAlign: "center", marginBottom: "40px"}}>
            Create one!
          </h3>
          <button className={styles.signupFormBtn} onClick={navToSignUp}>
            Create an Account
          </button>
        </form>
      </div>

    </>
  )
}