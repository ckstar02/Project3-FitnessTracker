import styles from '../css/header.module.css';
import '../App.css';

export default function Header(){
  return(
    <header className={styles.header}>
      <h1>FitStart</h1>
      <div className={styles.profileContainer}>
        <p>Ta'Lee</p>
        <img src="../../images/blankpfp.png"/>
      </div>
    </header>
  )
}