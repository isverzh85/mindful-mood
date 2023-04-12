import React, { useState, useEffect } from "react";
import styles from '../Landing/styles.module.scss';

export const LandingPage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [feelings, setFeelings] =useState('');

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
          setName(savedName);
        }
        const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        setDate(currentDate);
      }, []);

      const handleFeelingChange = (event) => {
        setFeelings(event.target.value);
    };


      return (
        <div className={styles.landingPage}>
          <div className={styles.greeting}>Hello, {name}.</div>
          <div className={styles.greetingTwo}>How are you feeling?</div>
          <div className={styles.date}>Today is {date}.</div>
          <div className={styles.step}>Step 1</div>
          <div className={styles.tracking}>What are you tracking?</div>
          <div className={styles.anxietyContainer}>
          <label>
             <input type="radio" 
                    name="feeling" 
                    value="anxious" 
                    className={styles.anxiousButton}

                    checked={feelings === "anxious"} 
                    onChange={handleFeelingChange} 
                />
              <span className={styles.anxious}>I'm feeling anxious/depressed or otherwise off.</span>
           </label>
            <label>
              <input type="radio" 
                     name="feeling" 
                     className={styles.checkingButton}
                     value="checkingIn" 
                     checked={feelings === "checkingIn"} 
                     onChange={handleFeelingChange}
                />
              <span className={styles.checkingIn}>I'm just checking in with my body.</span>
            </label>
           </div>
           <div className={styles.lineOne}></div>
           <div className={styles.stepTwo}>Step 2</div>
           <div className={styles.lineTwo}></div>
           <div className={styles.stepThree}>Step 3</div>

           <div className={styles.notesContainer}>
               <div className={styles.notesContainerTwo}></div>
               <div className={styles.notes}>Let's take a look at how you've been doing recently</div>
           
           </div>
        </div>
      );
}
export default LandingPage