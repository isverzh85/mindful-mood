import React, { useState, useEffect } from "react";
import styles from '../Landing/styles.module.scss';
import logo from '../../assets/Logo.png';
import sunLogo from '../../assets/SunLogo.png';
import FeelingDown from '../../components/FeelingDown/FeelingDown';
import CheckingIn from '../../components/CheckingIn/CheckingIn';

export const LandingPage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [color, setColor] = useState('');
    const [feelings, setFeelings] =useState('');
    const [currentStep, setCurrentStep] = useState(1);


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
          setName(savedName);
        }
        const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        setDate(currentDate);
        const savedColor = localStorage.getItem("color");
        if (savedColor) {
            setColor(savedColor);
    }
      }, []);

      const handleFeelingChange = (event) => {
        setFeelings(event.target.value);
        setCurrentStep(2);
    };

      return (
        <div className={styles.landingPage}>
          <div className={styles.greeting}>Hello, {name}.</div>
          <div className={styles.greetingTwo}>How are you feeling?</div>
          <img src={sunLogo} alt="sunLogo" className={styles.sunLogo} />

          <div className={styles.date}>Today is {date}.</div>
          <div className={styles.step}>Step 1</div>
          <div className={styles.stepUnderline}></div>
          <div className={styles.tracking}>What are you tracking?</div>
          <div className={styles.anxietyContainer}>
          <label>
             <input type="radio" 
                    name="feeling" 
                    value="anxious" 
                    className={styles.anxiousButton}
                    checked={feelings === "anxious"} 
                    onChange={handleFeelingChange} 
                />
                   {feelings === "anxious" && <FeelingDown />}
              <span className={styles.anxious}>I'm feeling anxious/depressed or otherwise off.</span>
              <FeelingDown currentStep={currentStep} />
           </label>
            <label>
              <input type="radio" 
                     name="feeling" 
                     className={styles.checkingButton}
                     value="checkingIn" 
                     checked={feelings === "checkingIn"} 
                     onChange={handleFeelingChange}
                />
                   {feelings === "checkingIn" && <CheckingIn />}
              <span className={styles.checkingIn}>I'm just checking in with my body.</span>
              <CheckingIn currentStep={currentStep} />
           </label>
           </div>
           <div className={styles.lineOne}></div>
           <div className={styles.stepTwo}>Step 2</div>
           <div className={styles.lineTwo}></div>
           <div className={styles.stepThree}>Step 3</div>
           <div className={styles.notesContainer}>
               <div className={styles.notesContainerTwo}></div>
               <div className={styles.notes}>Let's take a look at how you've been doing recently</div>
               <img src={logo} alt="logo" className={styles.logo} />
           </div>
        </div>
      );
}
export default LandingPage