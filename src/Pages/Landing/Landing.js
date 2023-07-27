import React, { useState, useEffect } from "react";
import styles from '../Landing/styles.module.scss';
import logo from '../../assets/Logo.png';
import sunLogo from '../../assets/SunLogo.png';
import csv from '../../assets/CSV.png'
import CheckingIn from '../../components/CheckingIn/CheckingIn';
import FeelingDown from '../../components/FeelingDown/FeelingDown';

const Step = ({ number, title, isSelected, underlineColor }) => {
  return (
    <div
      className={`${styles.step} ${isSelected ? "" : styles.grayedOutStep}`}
    >
      Step {number}
      <div
        className={`${styles.stepUnderline} ${isSelected ? "" : styles.grayedOutStep} ${
          isSelected ? underlineColor : ""
        }`}
        style={{ background: underlineColor }}
      ></div>
      <div className={styles.tracking}>{title}</div>
    </div>
  );
};

export const LandingPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [feelings, setFeelings] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnxiousChecked, setIsAnxiousChecked] = useState(false);
  const [isFinishedWriting, setIsFinishedWriting] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState("");
  const [stepTwoColor, setStepTwoColor] = useState("");
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedColor = localStorage.getItem("color");
    const savedIsAnxiousChecked = localStorage.getItem("isAnxiousChecked");
    const savedFeelings = localStorage.getItem("feeling");
    const savedCurrentStep = localStorage.getItem("currentStep");

    if (savedName) setName(savedName);
    if (savedColor) {
      document.documentElement.style.setProperty(
        "--underline-color",
        savedColor
      );
      setColor(savedColor);
    }
    if (savedIsAnxiousChecked)
      setIsAnxiousChecked(savedIsAnxiousChecked === "true");
    if (savedFeelings) {
      setSelectedFeeling(savedFeelings);
      setFeelings(savedFeelings);
    }
    if (savedCurrentStep)
      setCurrentStep(parseInt(savedCurrentStep, 10));
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setDate(formattedDate);
    setShowStepTwo(isAnxiousChecked || feelings === "checkingIn");
    localStorage.setItem("currentStep", currentStep.toString());
  }, [isAnxiousChecked, feelings, currentStep]);

  useEffect(() => {
    setShowStepTwo(feelings === "anxious" || feelings === "checkingIn");
  }, [feelings]);

  const handleFeelingChange = (event) => {
    const selectedFeeling = event.target.value;
    setSelectedFeeling(selectedFeeling);
    setFeelings(selectedFeeling);
    setIsAnxiousChecked(selectedFeeling === "anxious");

    const selectedColor =
      selectedFeeling === "anxious" || selectedFeeling === "checkingIn"
        ? color
        : "";
    setStepTwoColor(selectedColor);
    setCurrentStep(selectedFeeling === "anxious" || selectedFeeling === "checkingIn" ? 2 : 1);
    setIsRadioSelected(true); 
    localStorage.setItem("feeling", selectedFeeling);
    localStorage.setItem("isAnxiousChecked", selectedFeeling === "anxious");
    localStorage.setItem(
      "currentStep",
      selectedFeeling === "anxious" || selectedFeeling === "checkingIn" ? "2" : "1"
    );
    localStorage.setItem("isRadioSelected", "true"); 
    setShowStepTwo(selectedFeeling === "anxious" || selectedFeeling === "checkingIn");
  };

  const handleFinishedWriting = () => {
    setIsFinishedWriting(true);
    setIsRadioSelected(false);
    setSelectedFeeling("");
    setFeelings("");
    if (currentStep === 1) {
      localStorage.setItem("bigFeelings", feelings);
    } else if (currentStep === 2) {
      localStorage.setItem("feeling", "");
    }
  };

  useEffect(() => {
    const savedIsRadioSelected = localStorage.getItem("isRadioSelected");
    setIsRadioSelected(savedIsRadioSelected === "true");
    const savedFeelings = localStorage.getItem("feeling");
    setSelectedFeeling(savedFeelings || "");
    setFeelings(savedFeelings || "");
  }, []);

  useEffect(() => {
    const savedFeelings = localStorage.getItem("feeling");
    if (savedFeelings) {
      setSelectedFeeling(savedFeelings);
      setFeelings(savedFeelings);
    } else {
      setSelectedFeeling("");
      setFeelings("");
    }
  }, []);

  console.log(showStepTwo, "anxious")
  console.log("feelings")

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
                     checked={selectedFeeling === "anxious"}
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
                     checked={selectedFeeling === "checkingIn"}
                />
                <span className={styles.checkingIn}>I'm just checking in with my body.</span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.lineOne}></div>
        <div className={styles.stepTwoContainer}>
        {showStepTwo && (
          <Step
            number={2}
            isSelected={currentStep >= 2}
            underlineColor={stepTwoColor}
          />
        )}
          {currentStep >= 2 && (
            <>
              {feelings === "anxious" && (
                <FeelingDown currentStep={currentStep} feelings={feelings} />
              )}
              {feelings === "checkingIn" && (
                <CheckingIn currentStep={currentStep} feelings={feelings} />
              )}
            </>
          )}
          </div>
        <div className={styles.lineTwo}></div>
        <div className={styles.stepThreeContainer}>
        {currentStep >= 3 && !isRadioSelected && (
          <Step
            number={3}
            title="Step 3"
            isSelected={currentStep >= 3}
            underlineColor={
              feelings === "anxious" || feelings === "checkingIn" ? color : ""
            }
          />
        )}
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
   </div>

  );
};

export default LandingPage;