import React, { useState, useEffect } from "react";
import styles from '../Landing/styles.module.scss';
import logo from '../../assets/Logo.png';
import sunLogo from '../../assets/SunLogo.png';
import CheckingIn from '../../components/CheckingIn/CheckingIn';
import FeelingDown from '../../components/FeelingDown/FeelingDown';

export const LandingPage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [color, setColor] = useState('');
    const [feelings, setFeelings] =useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [showStepTwo, setShowStepTwo] = useState(true);

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
        if (event.target.value === "anxious") {
          setFeelings("anxious");
          setCurrentStep(2); 
          setShowStepTwo(true);
        } else if (event.target.value === "checkingIn") {
            setFeelings(event.target.value);
            setCurrentStep(2);
            setShowStepTwo(false);
          }
        };
        
      return (
        <div className={styles.landingPage}>
          <div className={styles.greetingContainer}>
          <div className={styles.greeting}>Hello, {name}.</div>
          <div className={styles.greetingTwo}>How are you feeling?</div>

          <img src={sunLogo} alt="sunLogo" className={styles.sunLogo} />
          <div className={styles.date}>Today is {date}.</div>

         </div>
          <div className={styles.stepOneContainer}>
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
                <span className={styles.anxious}>I'm feeling anxious/depressed or otherwise off.</span>
                {feelings === 'anxious' && <FeelingDown currentStep={currentStep} feelings={feelings} />
               }
           </label>
           <label>
              <input type="radio" 
                     name="feeling" 
                     className={styles.checkingButton}
                     value="checkingIn" 
                     checked={feelings === "checkingIn"} 
                     onChange={handleFeelingChange}
                />
              <span className={styles.checkingIn}>I'm just checking in with my body.</span>
                {feelings === 'checkingIn' && <CheckingIn currentStep={currentStep} feelings={feelings}  />}
            </label>
        </div>
           <div className={styles.lineOne}></div>
           </div>
           <div className={showStepTwo ? styles.stepTwo_active : styles.stepTwo}>Step 2</div>
           <div className={styles.lineTwo}></div>
           <div className={styles.stepThree}>Step 3</div>
           <div className={styles.notesContainer}>
               <div className={styles.notes}>Let's take a look at how you've been doing recently:</div>
               <div className={styles.notesContainerTwo}>
                    <div className={styles.entries}>Total entries written: </div>
                    <div className={styles.timeOff}>Times you've felt off: </div>
                    <div className={styles.checkedIn}>Times you've just checked in: </div>
                    <div className={styles.lineStep}></div>
                    <div className={styles.followSteps}>Follow the steps to fill in a diary entry and you’ll be able to see a summary of your check-ins here.</div>
               </div>
               <img src={logo} alt="logo" className={styles.logo} />
           </div>
        </div>
      );
}
export default LandingPage