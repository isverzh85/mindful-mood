import React, { useState, useEffect } from "react";
import styles from '../Home/styles.module.scss';
import { SketchPicker } from 'react-color';


export const HomePage = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setName(savedName);
        }
        const savedColor = localStorage.getItem("color");
        if (savedColor) {
            setColor(savedColor);
            document.documentElement.style.setProperty('--text-color', savedColor);
        }
    }, []);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        localStorage.setItem("name", newName);
    }
    
    const handleColorChange = (event) => {
        const inputHex = event.target.value;
        setColor(inputHex);
        localStorage.setItem("color", inputHex);
        document.documentElement.style.setProperty('--text-color', inputHex);
        };
    
     
return (
    <div className={styles.homePage}>
        <div className={styles.mindFullName}>Mindful Mood</div>
          <div className={styles.container}>
            <div className={styles.nameInputContainer}>
              <label className={styles.nameInputLabel}>Hello. What's your name?</label>
                 <input
                      type="text"
                      className={styles.nameInput}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="my name is..."
                   />  
                   <div className={styles.separateLine}></div> 
               </div>
          <div className={styles.colorInputContainer}>
          <div className={styles.favoriteColor}>What's your favorite <span> color </span> ?</div>
          <input
                        type="text"
                        className={styles.textColor}
                        onChange={handleColorChange}
                        value={color}
                        placeholder="#000000"
                    />
                    </div>
        </div>
        </div>
    )
}

export default HomePage;