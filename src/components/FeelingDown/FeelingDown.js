import React, { useState } from "react";
import styles from '../FeelingDown/styles.module.scss';
import { Link } from 'react-router-dom';

const FeelingDown = ({ currentStep, feelings }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDiaryEntryFinished, setIsDiaryEntryFinished] = useState(false);

  const handleRadioChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleFinishWriting = () => {
    setIsDiaryEntryFinished(true);
  };

return(
      <div className={styles.feelingDownContainer}>
         {currentStep === 2 && feelings === "anxious" && (
            <div className={`${styles.secondStepContainer} ${styles.active}`}>
              <div className={styles.anxiousContainer}>
                 <div className={styles.anxious}>
                      I'm sorry to hear that. Let's take note of those feelings.
                 </div>
            <div className={styles.diaryButtonContainer}>
              <Link to="/diary" className={styles.diaryButton}>
                Write diary entry
              </Link>
            </div>
          </div>
        </div>
      )}
        {currentStep === 3 && (
            <div className={styles.thirdStepContainer}>
              <div className={styles.feelBetter}>
                Let's see if there was anything about today that made it extra special, or anything you can do now!
            <button className={styles.continuedDiary}>Continue diary entry</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeelingDown;