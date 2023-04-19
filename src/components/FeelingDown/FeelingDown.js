import React from "react";
import styles from '../FeelingDown/styles.module.scss'


const FeelingDown= ({currentStep }) => {
    return(
        <div className={styles.stepTwoContainer}>
             {currentStep === 2 && (
                 <>
            <div className={styles.stepTwo}>Step 2</div>
              <p className={styles.notes}>I'm sorry to hear that. Let's take note of those feelings.</p>
              <button className={styles.diaryButton}>Write diary entry</button>
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