import React from "react";
import styles from '../FeelingDown/styles.module.scss'


const FeelingDown= () => {
    return(
        <div className={styles.stepTwoContainer}>
            <div className={styles.stepTwo}>Step 2</div>
              <p className={styles.notes}>I'm sorry to hear that. Let's take note of those feelings.</p>
              <button className={styles.diaryButton}>Write diary entry</button>
        <div className={styles.thirdStep}>Step 3</div>
              <p className={styles.feelBetter}>Let's see if we can do things to make you feel better.</p>
              <button className={styles.diaryEntry}>Continue diary entry</button>
        </div> 
    )
}

export default FeelingDown