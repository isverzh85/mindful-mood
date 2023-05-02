import React, { useState, useEffect } from "react";
import styles from '../Landing/styles.module.scss';
import logo from '../../assets/Logo.png';
import sunLogo from '../../assets/SunLogo.png';
import csv from '../../assets/CSV.png'
import CheckingIn from '../../components/CheckingIn/CheckingIn';
import FeelingDown from '../../components/FeelingDown/FeelingDown';

export const LandingPage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [color, setColor] = useState('');
    const [feelings, setFeelings] =useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [showStepTwo, setShowStepTwo] = useState(false);
    const [isAnxiousChecked, setIsAnxiousChecked] = useState(false);
    const [isWritingFinished, setIsWritingFinished] = useState(false);

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
        const savedFeelings = localStorage.getItem("feelings");
        if (savedFeelings) {
            setFeelings(savedFeelings);
        }
        const savedCurrentStep = localStorage.getItem("currentStep");
        if (savedCurrentStep) {
            setCurrentStep(parseInt(savedCurrentStep));
        }
        const savedIsAnxiousChecked = localStorage.getItem("isAnxiousChecked");
        if (savedIsAnxiousChecked) {
            setIsAnxiousChecked(savedIsAnxiousChecked === "true");
        }
  }, []);

    useEffect(() => {
      if (isAnxiousChecked || feelings === "checkingIn") {
          setShowStepTwo(true);
          setCurrentStep(2);
      } else {
          setShowStepTwo(false);
          setCurrentStep(1);
    }
  }, [isAnxiousChecked, feelings]);

    const handleFeelingChange = (event) => {
        if (event.target.value === "anxious") {
          setFeelings("anxious");
          setIsAnxiousChecked(true);
          setCurrentStep(2); 
        } else if (event.target.value === "checkingIn") {
            setFeelings(event.target.value);
            setIsAnxiousChecked(false);
            setCurrentStep(2);
         }
         setCurrentStep(2);
       };

       const handleWritingFinished = () => {
        setIsWritingFinished(true);
       };
        
      return (
        <div className={styles.landingPage}>
          <div className={styles.contentContainer}>
            <div className={styles.greetingAndStepsContainer}>
              <div className={styles.greetingContainer}>
                <div className={styles.greeting}>Hello, {name}.
                  <span className={styles.greetingTwo}>How are you feeling?</span>
                </div> 
                  <div className={styles.dateContainer}>
                    <img src={sunLogo} alt="sunLogo" className={styles.sunLogo} /> 
                      <span className={styles.date}>Today is {date}.</span> 
                    </div>
                   </div>
                      <div className={styles.stepOneContainer}>
                        <div className={styles.step}>Step 1
                           <div className={styles.stepUnderline}></div>
                             <div className={styles.tracking}>What are you tracking?</div>
                           </div>
                              <div className={styles.stepOneWrapper}></div>
                                <div className={styles.anxietyContainer}>
                                   <label>
                                      <input type="radio" 
                                             name="feeling" 
                                             value="anxious" 
                                             className={styles.anxiousButton}
                                             checked={feelings === "anxious"} 
                                             onChange={handleFeelingChange} 
                                             onClick={() => setCurrentStep(2)}
                                       />
                                    </label>
                                    <span className={styles.anxious}>I'm feeling anxious/depressed or otherwise off.</span>
                                    <label>
                                        <input type="radio" 
                                               name="feeling" 
                                               className={styles.checkingButton}
                                               value="checkingIn" 
                                               checked={feelings === "checkingIn"} 
                                               onChange={handleFeelingChange}
                                               onClick={() => setCurrentStep(2)}
                                        />
                                    </label>
                                      <span className={styles.checkingIn}>I'm just checking in with my body.</span>
                                  </div>
                              </div>
                                <div className={styles.lineOne}></div>
                                  <div className={styles.stepTwoContainer}>

                                    <div className={`${styles.stepTwo} ${currentStep >= 2 ? "" : styles.grayedOutStep} ${isWritingFinished ? styles.completedStep : ""}`}>
                                            Step 2
                                      <div className={styles.stepTwoUnderline}></div>
                                    </div>
                                {feelings === 'anxious' && <FeelingDown currentStep={currentStep} feelings={feelings} /> 
                                       } 
                                {feelings === 'checkingIn' && <CheckingIn currentStep={currentStep} feelings={feelings}  />}
                                </div>
                                   <div className={styles.lineTwo}></div>
                                     <div className={styles.stepThree}>Step 3</div>  
                                       <div className={styles.stepThreeUnderline}></div>
                            </div>
                        <div className={styles.notesContainer}>
                           <div className={styles.notes}>Let's take a look at how you've been doing recently:</div>
                             <img src={csv} alt="csvLogo" className={styles.csv} /> 
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
        </div>
      );
}
export default LandingPage