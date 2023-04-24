import React from "react";
import styles from '../CheckingIn/styles.module.scss';


const CheckingIn= ({ currentStep, feelings }) => {
    return(
        <div className={styles.stepTwoContainer}>
            {currentStep === 2 && (
                 <>
                    {feelings === "checkingIn" && (
                     <div className={styles.wonderful}>That's wonderful. Take this moment to be in tune with you.</div>
                 )} 
                <button className={styles.buttonDiaryEntry}>Write diary entry</button>
              </>
           )}
       </div>
  );
};
              
                //    <div className={styles.thirdStep}>Step 3</div>
                //    <p className={styles.todayGoals}>Let's see if there was anything about today that made it extra special, or anything you can do now!</p>
                //    <button className={styles.continuedDiary}>Continue diary entry</button>
          

   


export default CheckingIn