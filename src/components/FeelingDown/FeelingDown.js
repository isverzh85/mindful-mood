import React, { useState } from "react";
import styles from '../FeelingDown/styles.module.scss';
import { Link } from 'react-router-dom';


export const FeelingDown= ({ currentStep, feelings }) => {
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
          <div className={`${styles.secondStepContainer} ${currentStep === 2 && feelings === "anxious" ? styles.active : ''}`}>
            <div className={styles.anxiousContainer}>
              <div className={styles.anxious}>I'm sorry to hear that. Let's take note of those feelings.
                </div>
                   <div className={styles.diaryButtonContainer}>
                     <Link to="/diary" className={styles.diaryButton}>Write diary entry</Link>
                   </div>
                 </div>
                    <div className={styles.diaryEntryContainer}>
                     </div> 
                 </div>
                 <div className={`${styles.thirdStepContainer} ${currentStep === 3 && feelings === "anxious" ? styles.active : ''}`}>
                      <div className={styles.feelBetterContainer}>
                        <div className={styles.feelBetter}>
                         Let's see if we can do things to make you feel better.
                         </div>
                         <Link to="/diary" className={styles.diaryButton}>Continue diary entry</Link>
                    </div>
                </div>
             </div>
    );
};

export default FeelingDown;