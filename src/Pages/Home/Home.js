import React, { useState, useEffect } from "react";
import styles from '../Home/styles.module.scss';
import logo from '../../assets/Logo.png'
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const [inputColor, setInputColor] = useState('');
    const [showPicker, setShowPicker] = useState(true);

    useEffect(() => {
        const savedName = localStorage.getItem("name");
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
        document.documentElement.style.setProperty('--text-color', newColor.hex);
        document.documentElement.style.setProperty('--underline-color', newColor.hex);
        localStorage.setItem("color", newColor.hex);

        setShowPicker(false); 
      };
    
    const togglePicker = () => {
        setShowPicker(!showPicker);
    };
     
return (
  <div className={styles.homePage}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
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
          <div className={styles.favoriteColor}>What's your favorite <span style={{ color: inputColor }}>color</span>?
            <div style={{  backgroundColor: color, height: '52px', marginLeft:'100px', marginTop:'30px', width: '52px', borderRadius: '8px' }}>
            <div className={styles.colorContainer}>
           <input 
                className={styles.colorText}
                type="text" 
                value={color} 
                onChange={handleColorChange} 
            />
            <div className={styles.separateLineTwo}></div> 
            </div>
          </div>
        </div>
      </div>
          <div className={styles.colorPickerContainer}>
          <div className={styles.colorBox} style={{ backgroundColor: color }} onClick={togglePicker} />
          {showPicker && (
                  <SketchPicker 
                         className={styles.sketch}
                         color={color} 
                         onChange={handleColorChange} 
                  />
            )}
            </div>
          
            <Link to="/landing-page" className={styles.finish}>Finish</Link>
        </div>
    </div>
</div>
  )
}

export default HomePage;