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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      const savedName = localStorage.getItem("name");
      if (savedName && isMounted) {
          setName(savedName);
      } else {
          setName('');
      }
  }, []);

  useEffect(() => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
      setColor(savedColor);
      setInputColor(savedColor);
      setSelectedColor(savedColor);
      document.documentElement.style.setProperty('--text-color', savedColor);
      document.documentElement.style.setProperty('--underline-color', savedColor);
    } else {
      const initialColor = ''; 
      setColor(initialColor);
      setInputColor(initialColor);
      setSelectedColor(initialColor);
      document.documentElement.style.setProperty('--text-color', initialColor);
      document.documentElement.style.setProperty('--underline-color', initialColor);
    }
    localStorage.removeItem("color");
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
  };
    
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
        <div className={styles.nameAndColorWrapper}>
          <div className={styles.nameContainer}>
            <label className={styles.nameInputLabel}>Hello. What's your name?</label>
          </div>
            <div className={styles.nameInputWrapper}>
              <input
                id="nameInput"
                type="text"
                className={styles.nameInput}
                value={name}
                onChange={handleNameChange}
                placeholder="my name is..."
              />
            </div>
            <div className={styles.nameUnderline}></div> 
        </div>
          <div className={styles.favoriteColorContainer}>
            <div className={styles.colorInputContainer}>
              <div className={styles.colorLabelContainer}>
                <div className={styles.favoriteColor}>
                  <span>What's your favorite</span>
                  <span style={{ color: inputColor }}>
                    <span style={{ color: selectedColor }}>color</span>
                  </span>
                  <span>?</span>
                </div>
                <div className={styles.colorPreviewContainer}>
                <div className={styles.colorContainer}>
                    {inputColor && (
                       <div className={styles.colorBox}
                            style={{ backgroundColor: inputColor }}
                            onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
                       />
                    )}
                 <div className={styles.colorTextWrapper}>
                    <input id="colorInput"
                           className={`${styles.colorText} ${inputColor ? "" : styles.emptyLine}`}
                           type="text"
                           value={inputColor}
                           onFocus={() => setIsColorPickerVisible(true)}
                           onChange={(event) => {
                                   setInputColor(event.target.value);
                                   setColor(event.target.value);
                               }}
                            />
                        </div>
                   </div>         
                      {/* <div className={styles.secondLine}></div> */}
                  {isColorPickerVisible && (
                    <div className={styles.sketchContainer}>
                      <SketchPicker
                        color={color}
                        onChange={handleColorChange}
                      />
                    </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.finishLine}>
            <Link to="/landing-page" className={styles.finish}>
              Finish
            </Link>
          </div>
        </div>
      );
    };                 

export default HomePage;