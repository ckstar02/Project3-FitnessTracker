import styles from '../css/landing.module.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
  const navigate = useNavigate();

  function navToSignUp(){
    navigate('/signup');
  }

  return(
    <div className={styles.container}>
      <h1>Nutrition tracking made easy</h1>
      <div className='align-items-center' style={{width: "100%"}}>
        <p>Conquer your fitness goals with this all in one fitness tracker.</p>
        <button className={styles.signupBtn} onClick={navToSignUp}>Start Today</button>
      </div>
      {/* <p>dwaudawo  diaowd iwa knak dwaid; adad awda; da da dwd asn dowj an</p> */}

      <div className={styles.recipeInfoContainer}>
        <h1>Have access to millions of healthly recipes on the web</h1>
      </div>

      <div className={styles.goalInfoContainer}>
        <h1>Set personal goals you can work towards</h1>
      </div>
    </div>
  )
}