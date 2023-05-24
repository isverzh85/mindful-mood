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
    const [isFinishedWriting, setIsFinishedWriting] = useState(false);
    const [isWritingFinished, setIsWritingFinished] = useState(false);
    const [isRadioSelected, setIsRadioSelected] = useState(false);
    const [selectedFeeling, setSelectedFeeling] = useState('');


    useEffect(() => {
      const savedName = localStorage.getItem("name");
      if (savedName) {
        setName(savedName);
      }
      const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      setDate(currentDate);
      const savedColor = localStorage.getItem("color");
      console.log(savedColor)
      if (savedColor) {
        document.documentElement.style.setProperty('--underline-color', savedColor);
        setColor(savedColor);
      }
      const savedIsAnxiousChecked = localStorage.getItem("isAnxiousChecked");
      if (savedIsAnxiousChecked) {
        setIsAnxiousChecked(savedIsAnxiousChecked === "true");
      }
    }, []);

    useEffect(() => {
      const savedFeelings = localStorage.getItem("feeling");
      if (savedFeelings) {
        setSelectedFeeling(savedFeelings); 
        setFeelings(savedFeelings);
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

  useEffect(() => {
    const savedCurrentStep = localStorage.getItem("currentStep");
    if (savedCurrentStep) {
      setCurrentStep(parseInt(savedCurrentStep));
    }
    if (isFinishedWriting) {
      setCurrentStep(3);
    }
  }, [isFinishedWriting]);

  const handleFeelingChange = (event) => {
    const selectedFeeling = event.target.value;
    setSelectedFeeling(selectedFeeling);
    setFeelings(selectedFeeling);
    setIsAnxiousChecked(selectedFeeling === "anxious");
    setCurrentStep(2);
    localStorage.setItem("feeling", selectedFeeling);
    localStorage.setItem("isAnxiousChecked", selectedFeeling === "anxious");
    localStorage.setItem("currentStep", "2");
  };

  const handleWritingFinished = () => {
    setIsWritingFinished(true);
    setIsFinishedWriting(true);
    localStorage.setItem("currentStep", currentStep.toString());
    if (currentStep === 1) {
      localStorage.setItem("feeling", feelings);
    }
  };

  useEffect(() => {
    if (currentStep === 1) {
      localStorage.setItem("currentStep", "1");
      localStorage.setItem("feeling", "");
    } else if (currentStep === 2) {
      localStorage.setItem("currentStep", "2");
    } else if (currentStep === 3) {
      localStorage.setItem("currentStep", "3");
    }
  }, [currentStep]);

  useEffect(() => {
    const savedCurrentStep = localStorage.getItem("currentStep");
    if (savedCurrentStep) {
      setCurrentStep(parseInt(savedCurrentStep));
    }
    if (isFinishedWriting) {
      setCurrentStep(3);
    }
  }, [isFinishedWriting]);


  useEffect(() => {
    const savedWritingFinished = localStorage.getItem("isWritingFinished");
    if (savedWritingFinished) {
      setIsWritingFinished(savedWritingFinished === "true");
    }
  }, []);

  useEffect(() => {
    const savedRadioSelected = localStorage.getItem("isRadioSelected");
    if (savedRadioSelected) {
      setIsRadioSelected(savedRadioSelected === "true");
    }
  }, []);

  useEffect(() => {
    const savedShowStepTwo = localStorage.getItem("showStepTwo");
    if (savedShowStepTwo) {
      setShowStepTwo(savedShowStepTwo === "true");
    }
  }, []);

  useEffect(() => {
    if (currentStep === 2) {
      localStorage.setItem("showStepTwo", showStepTwo.toString());
    }
  }, [showStepTwo]);

  useEffect(() => {
    if (currentStep === 1) {
      localStorage.setItem("isRadioSelected", isRadioSelected.toString());
    }
  }, [isRadioSelected]);

  useEffect(() => {
    if (currentStep === 1) {
      localStorage.setItem("isWritingFinished", isWritingFinished.toString());
    }
  }, [isWritingFinished]);

  useEffect(() => {
    if (isAnxiousChecked || feelings === "checkingIn") {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [isAnxiousChecked, feelings]);

  useEffect(() => {
    if (isAnxiousChecked || feelings === "checkingIn") {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [isAnxiousChecked, feelings]);

  


  return (
     <div className={styles.landingPage}>
       <div className={styles.stepsContainer}>
         <div className={styles.greetingContainer}>
           <div className={styles.greeting}>
              Hello, {name}.
            <span className={styles.greetingTwo}>How are you feeling?</span>
          </div>
          <div className={styles.dateContainer}>
            <img src={sunLogo} alt="sunLogo" className={styles.sunLogo} />
            <span className={styles.date}>Today is {date}.</span>
          </div>
        </div>
        <div className={styles.stepOneContainer}>
            <div className={styles.step}>
                <div className={styles.stepHeader}>
                    Step 1
                 <div className={styles.stepUnderline}></div> 
                     <div className={styles.tracking}>What are you tracking?</div>
                 </div>
                   <div className={styles.radioContainer}>
                    <label>
                       <input
                            type="radio"
                            name="feeling"
                            value="anxious"
                            className={styles.anxiousButton}
                            onChange={handleFeelingChange}
                       />
                    <span className={styles.anxious}>I'm feeling anxious/depressed or otherwise off.</span>
                  </label>
                  <label>
                      <input
                           type="radio"
                           name="feeling"
                           className={styles.checkingButton}
                           value="checkingIn"
                           onChange={handleFeelingChange}
                      />
                    <span className={styles.checkingIn}>I'm just checking in with my body.</span>
                 </label>
               </div>
                    <div className={styles.lineOne}></div>
              </div>
           </div>    

        <div className={styles.stepTwoContainer}>
          {!isRadioSelected && (
            <div
            className={`${styles.stepTwo} ${currentStep >= 2 ? "" : styles.grayedOutStep} ${
              isWritingFinished ? styles.completedStep : ""
            }`}
          >
           Step 2
  <div
    className={`${styles.stepTwoUnderline} ${currentStep >= 2 ? "" : styles.grayedOutStep} ${
      isAnxiousChecked || feelings === "checkingIn" ? "selectedColor" : ""
    }`}
    style={{ background: currentStep >= 2 ? color : "" }}
  ></div>
</div>
          )}
          {currentStep >= 2 && (
            <>
              {feelings === "anxious" && <FeelingDown currentStep={currentStep} feelings={feelings} />}
              {feelings === "checkingIn" && <CheckingIn currentStep={currentStep} feelings={feelings} />}
            </>
          )}
        </div>
        <div className={styles.lineTwo}></div>
        <div className={styles.stepThreeContainer}>
          {(currentStep >= 3 || showStepTwo) && !isRadioSelected && (
           <div className={`${styles.stepThree} ${currentStep >= 3 ? styles.selectedColor : ""}`}>
           Step 3
           <div className={`${styles.stepThreeUnderline} ${currentStep >= 3 ? styles.selectedColor : ""}`}></div>
         </div>
         
          )}
        </div>
      </div>
      <div className={styles.notesContainer}>
        <div className={styles.notes}>Let's take a look at how you've been doing recently:</div>
        <img src={csv} alt="csvLogo" className={styles.csv} />
        <div className={styles.notesContainerTwo}>
          <div className={styles.entries}>Total entries written:</div>
          <div className={styles.timeOff}>Times you've felt off:</div>
          <div className={styles.checkedIn}>Times you've just checked in:</div>
          <div className={styles.lineStep}></div>
          <div className={styles.followSteps}>
            Follow the steps to fill in a diary entry and you’ll be able to see a summary of your check-ins here.
          </div>
          </div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
}

export default LandingPage;
