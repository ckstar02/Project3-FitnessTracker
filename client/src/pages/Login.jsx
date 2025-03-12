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

  async function loginSubmit(e){
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if (!response.ok){
        const err = await response.json();
        console.error(err || "There was an issue creating your account.");
        return;
      }

      navigate('/home');
    } catch (err) {
      console.error('There was an issue logging into your account: ' +err.message);
    }
  }

  return(
    <>
      <header className={styles.heading}>
        <h1>FitStart</h1>
      </header>
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