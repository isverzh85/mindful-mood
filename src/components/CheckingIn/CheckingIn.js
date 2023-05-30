import React from "react";
import styles from '../CheckingIn/styles.module.scss';
import { Link } from 'react-router-dom';

const CheckingIn = ({ currentStep, feelings }) => {
  return (
    <div className={styles.checkingInContainer}>
      {currentStep === 2 && feelings === "checkingIn" && (
        <div className={`${styles.secondStepContainer} ${styles.active}`}>
          <div className={styles.messageContainer}>
            <div className={styles.wonderful}>
              That's wonderful. Take this moment to be in tune with you.
            </div>
            <div className={styles.buttonDiaryEntryContainer}>
              <Link to="/diary" className={styles.buttonDiaryEntry}>
                Write diary entry
              </Link>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className={styles.thirdStepContainer}>
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
