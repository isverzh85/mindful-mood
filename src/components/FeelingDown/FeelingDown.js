import React, { useState } from "react";
import styles from '../FeelingDown/styles.module.scss';
import { Link } from 'react-router-dom';

export const FeelingDown= ({ currentStep, feelings }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = (e) => {
        setIsChecked(e.target.checked);
      };

    return(
        <div className={styles.feelingDownContainer}>
            <div className={`${styles.secondStepContainer} ${currentStep === 2 && feelings === "anxious" ? styles.active : ''}`}>
                    <div className={styles.anxious}>
                            I'm sorry to hear that. Let's take note of those feelings.
                            <Link to="/diary" className={styles.diaryButton}>Write diary entry</Link>
                        </div>
                    <div className={styles.anxiousContainer}>
                    </div>
                </div>
            {currentStep === 3 && (
                <div className={styles.thirdStepContainer}>
                    <div className={styles.thirdStep}>Step 3</div>
                    <div className={styles.feelBetter}>
                        Let's see if we can do things to make you feel better.
                        <button className={styles.diaryEntry}>Continue diary entry</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeelingDown;