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
        if (savedColor) {
           setColor(savedColor);
           setInputColor(savedColor);
           setSelectedColor(savedColor);
           document.documentElement.style.setProperty('--text-color', savedColor);
           document.documentElement.style.setProperty('--underline-color', savedColor);
        } 
           setInputColor('');
           setSelectedColor(''); 
      }, []);

     useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          isColorPickerVisible &&
          !event.target.classList.contains(styles.colorText)
        ) {
          setIsColorPickerVisible(false);
        }
      };
         window.addEventListener('click', handleOutsideClick);
           return () => {
             window.removeEventListener('click', handleOutsideClick);
      };
    }, [isColorPickerVisible]);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        localStorage.setItem("name", newName);
    }
    
    const handleColorChange = (newColor) => {
      const newColorValue = newColor.hex;
      setColor(newColorValue);
      setInputColor(newColorValue);
      setSelectedColor(newColorValue);
      document.documentElement.style.setProperty('--text-color', newColorValue);
      document.documentElement.style.setProperty('--underline-color', newColorValue);
      localStorage.setItem("color", newColorValue);
      setIsColorPickerVisible(false);
    };
   
return (
  <div className={styles.homePage}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
    <div className={styles.nameAndColorContainer}>

      <div className={styles.container}>
        <div className={styles.helloContainer}>
        <div className={styles.nameInputContainer}>
          <label className={styles.nameInputLabel}>Hello. What's your name?</label>
            <div className={styles.nameInputWrapper}>
                <input
                    id="nameInput"
                    type="text"
                    className={styles.nameInput}
                    onChange={handleNameChange}
                    placeholder="my name is..."
                 />
             </div>
            <div className={styles.separateLine}></div>
            </div>
          </div>
          <div className={styles.favoriteColorContainer}>
            <div className={styles.colorInputContainer}>
            <div className={styles.colorLabelContainer}>
          <div className={styles.favoriteColor}> 
             <span>What's your favorite</span>
             <span style={{ color: inputColor }}><span style={{color: selectedColor}}>color</span></span>?
             </div>
             <div className={styles.colorPreviewContainer}>
            <div className={styles.colorContainer}>
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
            <input
                 className={`${styles.colorText} ${inputColor ? '' : styles.emptyLine}`} type="text" 
                 value={inputColor}
                 onFocus={() => setIsColorPickerVisible(true)}
                 onChange={(event) => {
                     setInputColor(event.target.value);
                     setColor(event.target.value); 
                }}
            />
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
        <div className={styles.finishLine}>
        <Link to="/landing-page" className={styles.finish}>Finish</Link>
       </div>
    {/* </div> */}
   </div>
 )
} 

export default HomePage;