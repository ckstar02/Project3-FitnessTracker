import styles from '../css/header.module.css';
import '../App.css';
import { homePageTab } from './SwitchTab';
import { personalGoalTab } from './SwitchTab';

export default function Header(){
  return(
    <header className={styles.header}>
 start_template
      <nav>
       <h1>FitStart</h1>
        <img onClick={homePageTab} id='logo' alt='FitStartLogo' style={{cursor:'pointer'}}/>
        <img id='user' alt='userProfile' />
        <h2 onClick={personalGoalTab} id='goals' style={{cursor:'pointer'}}>Goals</h2>
        <h2 id='username'>Username</h2>
      </nav>

      <h1>FitStart</h1>
      <div className={styles.profileContainer}>
        <p>Ta'Lee</p>
        <img src="../../images/blankpfp.png"/>
      </div>
 main
    </header>
  )
}