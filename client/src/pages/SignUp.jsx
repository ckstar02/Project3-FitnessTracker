import styles from '../css/signup.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
  const navigate = useNavigate();
  const [nameForm, setNameForm] = useState(true);
  const [generalForm, setGeneralForm] = useState(false);
  const [activityForm, setActivityForm] = useState(false);
  const [accountForm, setAccountForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [heightFt, setHeightFt] = useState();
  const [heightIn, setHeightIn] = useState();
  const [activityLvl, setActivityLvl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function nameFormSubmit(e){
    e.preventDefault();
    
    setNameForm(false);
    setGeneralForm(true);
  }

  function generalFormSubmit(e){
    e.preventDefault();

    setGeneralForm(false);
    setActivityForm(true);
  }

  function activityFormSubmit(e){
    e.preventDefault();

    setActivityForm(false);
    setAccountForm(true);
  }

  async function accountFormSubmit(e){
    e.preventDefault();

    const heightCm = (heightFt * 30.48) + (heightIn * 2.54);
    const weightKg = weight / 2.205;
    
    let BMR = 0;
    if (gender === 'Male'){
      BMR = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    } else if(gender === 'Female'){
      BMR = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    }

    let TDEE = BMR;
    if (activityLvl === "Not Very Active"){
      TDEE = TDEE * 1.2;
    } else if (activityLvl === "Partially Active"){
      TDEE = TDEE * 1.375;
    } else if (activityLvl === "Active"){
      TDEE = TDEE * 1.55;
    } else{
      TDEE = TDEE * 1.725;
    }

    const data = {
      firstname: firstName,
      lastname: lastName,
      age: age,
      gender: gender,
      weightKg: weightKg,
      heightCm: heightCm,
      caloricIntake: TDEE,
      email: email,
      password: password
    }

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Context-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if (!response.ok){
        const err = await response.json();
        console.error(err.error || "There was an issue creating your account.");
        return;
      };

      navigate('/login');
    } catch (err) {
      console.error('Error creating your account: ' +err.message);
    }
  }

  function backBtn(){
    if (generalForm){
      setGeneralForm(false);
      setNameForm(true);
    }
    else if(activityForm){
      setActivityForm(false);
      setGeneralForm(true);
    }
  }

  if (nameForm){
    return(
      <>
      <secion className={styles.headingContainer}>
        <h2>Welcome to FitStart!</h2>
      </secion>
      <div className={styles.formContainer}>
        <form className={styles.nameForm} onSubmit={nameFormSubmit}>
          <h3 style={{ textAlign: "center" }}>First, what is your name?</h3>
          <label>
            Enter your first name
          </label>
          <input 
            placeholder="First Name"
            type="text"
            name="fName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>
            Enter your last name
          </label>
          <input 
            placeholder="Last Name"
            type="text"
            name="lName"
            onChange={(e) => setLastName(e.target.value)}
          />

          <div className={styles.signupFormBtn}>
          <button type="submit">
            Next
          </button>
          </div>
        </form>
      </div>
      </>
    )
  }
  
  if(generalForm){
    return(
      <>
      <secion className={styles.headingContainer}>
        <h2>Welcome to FitStart!</h2>
      </secion>
      <div className={styles.formContainer}>
        <form className={styles.generalForm} onSubmit={generalFormSubmit}>
          <h3 style={{ textAlign: "center" }}>Please fill in the following information.</h3>
          <label>
            Enter your age
          </label>
          <input 
            placeholder="Age"
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />

          <div>
            <div>
              <input 
                type="radio"
                name="gender"
                onChange={() => setGender('Male')}
              />
              <p>Male</p>
            </div>
            <div>
              <input 
                type="radio"
                name="gender"
                onChange={() => setGender('Female')}
              />
              <p>Female</p>
            </div>
          </div>
  
          <label>
            Enter your weight in pounds
          </label>
          <input 
            placeholder="Weight (lbs)"
            type="number"
            name="weight"
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>
            Enter your height
          </label>
          <div>
          <input 
            placeholder="Height (ft)"
            type="number"
            name="heightFt"
            onChange={(e) => setHeightFt(e.target.value)}
          />
          <input 
            placeholder="Height (in)"
            type="number"
            name="heightIn"
            onChange={(e) => setHeightIn(e.target.value)}
          />
          </div>

          <div className={styles.signupFormBtns}>
          <button onClick={backBtn}>
            Back
          </button>
          <button type="submit">
            Next
          </button>
          </div>

        </form>
      </div>
      </>
    )
  }

  if(activityForm){
    return (
      <>
      <secion className={styles.headingContainer}>
        <h2>Welcome to FitStart!</h2>
      </secion>
      <div className={styles.formContainer}>
        <form className={styles.activityForm} onSubmit={activityFormSubmit}>
          <h3 style={{ textAlign: "center" }}>Please select what best represents your activity level.</h3>
          <button type="submit" className={styles.activityBtn} onClick={() => {
            setActivityLvl('Not Very Active');
          }}>
            <h4>Not Very Active</h4>
            <p>Spend most of the day sitting</p>
          </button>
          <button type="submit" className={styles.activityBtn} onClick={() => {
            setActivityLvl('Partially Acive')
          }}>
            <h4>Partially Active</h4>
            <p>Spend a good part of the day on your feet</p>
          </button>
          <button type="submit" className={styles.activityBtn} onClick={() => {
            setActivityLvl('Active');
          }}>
            <h4>Active</h4>
            <p>Spend of good part of the day doing some physical acitivty</p>
          </button>
          <button type="submit" className={styles.activityBtn} onClick={() => {
            setActivityLvl('Frequently Active');
          }}>
            <h4>Frequently Active</h4>
            <p>Spend a good part of the day doing heavy physical activity</p>
          </button>

      <div className={styles.signupFormBtn}>
          <button onClick={backBtn}>
            Back
          </button>
          </div>
        </form>
      </div>
      </>
    )
  }

  if(accountForm){
    return(
      <>
      <secion className={styles.headingContainer}>
        <h2>Welcome to FitStart!</h2>
      </secion>
      <div className={styles.formContainer}>
        <form className={styles.accountForm} onSubmit={accountFormSubmit}>
          <h3 style={{ textAlign: "center" }}>Please provide an email and password.</h3>
          <label>
            Email
          </label>
          <input 
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.passwordLabel}>
            Password
            <p>Must be at least 8 characters long</p>
            <p>Must include at least 1 number</p>
          </label>
          <input 
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.signupFormBtns}>
          <button onClick={() => {
            setAccountForm(false);
            setActivityForm(true);
          }}>
            Back
          </button>
          <button type="submit">
            Sign Up
          </button>
          </div>
        </form>
      </div>
      </>
    )
  }

}