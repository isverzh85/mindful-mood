import React, { useState, useEffect } from "react";
import styles from '../Home/styles.module.scss';
import logo from '../../assets/Logo.png'
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [inputColor, setInputColor] = useState('');
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setName(savedName);
        }
        const savedColor = localStorage.getItem("color");
        if (savedColor && color === '') {
            setColor(savedColor);
            setInputColor(savedColor);
            document.documentElement.style.setProperty('--text-color', savedColor);
        } else {
            localStorage.removeItem("color");
        }
    }, [color]);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        localStorage.setItem("name", newName);
    }
    
    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
        setSelectedColor(newColor.hex);

        document.documentElement.style.setProperty('--text-color', newColor.hex);
        document.documentElement.style.setProperty('--underline-color', newColor.hex);
        localStorage.setItem("color", newColor.hex);
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
          <div className={styles.favoriteColor}> 
             <span>What's your favorite</span>
             <span style={{ color: inputColor }}><span style={{color: color}}>color</span></span>?
             </div>
             <div className={styles.colorPreviewContainer}>
            <div className={styles.colorContainer}>
              <input 
                className={styles.colorText}
                type="text" 
                value={color} 
                onFocus={() => setIsColorPickerVisible(true)}
                onChange={(event) => setColor(event.target.value)} 
            />
             <div className={styles.colorPickerContainer}>
               <div className={styles.colorBox} onClick={() => setIsColorPickerVisible(!isColorPickerVisible)} />
               <div className={styles.selectedColorBox} style={{ backgroundColor: selectedColor }}>
               {isColorPickerVisible && (
                   <SketchPicker 
                     className={styles.sketch}
                     color={color} 
                     onChange={handleColorChange} 
              />        
            )}
            </div>

            <div className={styles.separateLineTwo}></div> 
            </div>
          </div>
        </div>
      </div>
            <Link to="/landing-page" className={styles.finish}>Finish</Link>
        </div>
    </div>
   </div>
 )
} 

export default HomePage;