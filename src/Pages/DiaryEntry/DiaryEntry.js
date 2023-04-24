import React, { useState, useEffect } from "react";
import styles from '../DiaryEntry/styles.module.scss';
import { Link } from 'react-router-dom';


export const DiaryEntry = () => {
    const [name, setName] = useState('');
    const [currentStep, setCurrentStep] = useState(1);


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
          setName(savedName);
        }
    }, []);

    const handleFinishWriting = () => {
        setCurrentStep(3);
    }

    return(
        <div className={styles.diaryPage}>
            <div className={styles.diaryContainer}>
               <div className={styles.headingContainer}>
                  <div className={styles.great}>You're doing great, {name}.</div>
                      <div className={styles.oneContainer}>
                         <div className={styles.one}>1.</div>
                            <div className={styles.bigFeelings}>How “big” are your feelings right now?</div>
                            <div className={styles.contentFeelings}>“Small” feelings are not any less painful than “big” feelings. “Small” feelings are like annoying bugs. They make you irritated. Sometimes they can even make you feel numb because you’re so used to feeling like your feelings don’t matter.
                                                                    “Big” feelings are like sharing a bed with a hippo. You’re overwhelmed, and feel like you’re running a marathon even though you’re sitting still. </div>
                            </div>
            <div className={styles.hardFeeling}>It's hard feeling the way you're feeling in this moment. Let's break it down as a way to help soothe those feelings.</div>
            <Link to="/landing-page" className={styles.finishWriting}>Finish Writing.</Link>
            <div className={styles.separateLine}></div>
            </div>
        </div>
    </div>
  )
}

export default DiaryEntry;