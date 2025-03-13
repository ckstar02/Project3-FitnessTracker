import styles from '../css/landing.module.css';
import { useNavigate } from 'react-router-dom';


export default function LandingPage(){
  const navigate = useNavigate();

  function navToSignUp(){
    navigate('/signup');
  }

  function navToLogin(){
    navigate('/login');
  }

  return(
    <>
    <header className={styles.heading}>
      <h1>FitStart</h1>
    </header>
    <div className={styles.container}>
      <h1>Nutrition tracking made easy</h1>
      <div className='align-items-center' style={{width: "100%"}}>
        <p>Conquer your fitness goals with this all in one fitness tracker.</p>
        <button className={styles.signupBtn} onClick={navToSignUp}>Start Today</button>
        <p>Have an account already? Login!</p>
        <button className={styles.signupBtn} onClick={navToLogin}>Login</button>
      </div>

      <div className={styles.recipeInfoContainer}>
        <h1>Have access to millions of healthly recipes on the web</h1>
      </div>

      <div className={styles.goalInfoContainer}>
        <h1>Set personal goals you can work towards</h1>
      </div>
    </div>
    </>
  )
}