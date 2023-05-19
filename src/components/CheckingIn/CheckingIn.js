import React from "react";
import styles from '../CheckingIn/styles.module.scss';
import { Link } from 'react-router-dom';

const CheckingIn= ({ currentStep, feelings }) => {
    return (
        <div className={styles.checkingInContainer}>
          <div className={`${styles.secondStepContainer} ${currentStep === 2 && feelings === "checkingIn" ? styles.active : ''}`}>
            <div className={styles.messageContainer}>
                 <div className={styles.wonderful}>That's wonderful. Take this moment to be in tune with you.
                 </div>
                 <div className={styles.buttonDiaryEntryContainer}>
                  <Link to="/diary" className={styles.buttonDiaryEntry}>Write diary entry</Link>
              </div>
             </div>
             <div className={styles.checkingInContainer}>
          </div>
        </div>
        {currentStep === 3 && (
                <div className={styles.thirdStepContainer}>
                    {/* <div className={styles.thirdStep}>Step 3</div> */}
                    <div className={styles.todayGoals}>
                          Let's see if there was anything about today that made it extra special, or anything you can do now!
                        <button className={styles.continuedDiary}>Continue diary entry</button>
                    </div>
                </div>
            )}
        </div>
   );
};

export default CheckingIn;
        