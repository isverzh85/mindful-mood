import React from "react";
import styles from '../FeelingDown/styles.module.scss';
import { Link } from 'react-router-dom';

export const FeelingDown= ({currentStep, feelings }) => {
    return(
        <div className={styles.stepTwoContainer}>
             {currentStep === 2 && (
                 <>
                    {feelings === "anxious" && (
                        <div className={styles.anxious}>I'm sorry to hear that.</div>
                   )}              
             <Link to="/diary" className={styles.diaryButton}>Write diary entry</Link>
           </>
        )}
             {currentStep === 3 && (
                <>
                   <div className={styles.thirdStep}>Step 3</div>
                   <p className={styles.feelBetter}>Let's see if we can do things to make you feel better.</p>
                   <button className={styles.diaryEntry}>Continue diary entry</button>
                </>
            )}
        </div> 
    )
}

export default FeelingDown