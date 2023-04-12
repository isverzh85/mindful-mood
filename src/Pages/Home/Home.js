import React, { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
import styles from '../Home/styles.module.scss';
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';



export const HomePage = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [inputColor, setInputColor] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    // const history = useHistory();


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        console.log('saveName')
        if (savedName) {
            console.log('savedName')
            setName(savedName);
        }
        const savedColor = localStorage.getItem("color");
        if (savedColor) {
            setColor(savedColor);
            setInputColor(savedColor);
            document.documentElement.style.setProperty('--text-color', savedColor);
        }
    }, []);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        localStorage.setItem("name", newName);
    }
    
    const handleColorInputChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        setInputColor(newColor);
    };

    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
      };
    
    const togglePicker = () => {
        setShowPicker(!showPicker);
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
                      onChange={handleNameChange}
                      placeholder="my name is..."
                   />  
                     <div className={styles.separateLine}></div> 
          </div>
          <div className={styles.colorInputContainer}>
          <div className={styles.colorLabelContainer}>
          <div className={styles.favoriteColor}>What's your favorite <span style={{ color: inputColor }}>color </span>?</div>
          </div>
          <div className={styles.colorPickerContainer}>
          <div className={styles.colorBox} style={{ backgroundColor: color }} onClick={togglePicker} />
          {showPicker && (
                  <SketchPicker 
                         color={color} 
                         onChange={handleColorChange} 
                  />
            )}
        <div style={{ backgroundColor: color, height: '52px', width: '52px', position:"absolute", left:'220px', top:'490px', borderRadius: '8px' }}></div>
           <input 
                className={styles.colorText}
                type="text" 
                value={color} 
                onChange={handleColorInputChange} 
            />
            <div className={styles.separateLineTwo}></div> 
            <Link to="/landing-page" className={styles.finish}>Finish</Link>
            <div className={styles.finishLine}></div>
          </div>
        </div>
    </div>
</div>
  )
}

export default HomePage;