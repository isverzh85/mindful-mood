import React from "react";
import styles from '../CheckingIn/styles.module.scss';


const CheckingIn= () => {
    return(
        <div className={styles.stepTwoContainer}>
            <div className={styles.secondStep}>Step 2</div> 
            <p className={styles.wonderful}>That's wonderful. Take this moment to be in tune with you.</p>
            <button className={styles.buttonDiaryEntry}>Write diary entry</button>
        <div className={styles.thirdStep}>Step 3</div>
            <p className={styles.todayGoals}>Let's see if there was anything about today that made it extra special, or anything you can do now!</p>
            <button className={styles.continuedDiary}>Continue diary entry</button>
        </div> 
    )
}

export default CheckingIn