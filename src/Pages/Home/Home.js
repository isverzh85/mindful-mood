import React, { useState, useEffect, useRef } from "react";
import styles from '../Home/styles.module.scss';
import logo from '../../assets/Logo.png'
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState(null);
  const [inputColor, setInputColor] = useState('');
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const colorInputRef = useRef(null);

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
    const initialColor = '';
    setColor(savedColor || initialColor);
    setInputColor(savedColor || initialColor);
    setSelectedColor(savedColor || initialColor);
    document.documentElement.style.setProperty('--text-color', savedColor || initialColor);
    document.documentElement.style.setProperty('--underline-color', savedColor || initialColor);
    localStorage.removeItem("color");
}, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isColorPickerVisible &&
        colorInputRef.current &&
        !colorInputRef.current.contains(event.target)
      ) {
        setIsColorPickerVisible(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
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

  const handleColorBoxClick = () => {
    setIsColorPickerVisible((prevState) => !prevState);
  };

  const handleColorTextFocus = () => {
    setIsColorPickerVisible(true);
  };

return (
        <div className={styles.homePage}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
         <div className={styles.container}>
            <div className={styles.nameContainer}>
              <div className={styles.nameAndColorWrapper}>
                <div className={styles.nameQuestionContainer}>
                   <div className={styles.nameInputLabel}>Hello. What's your name?</div>
            </div>
            <div className={styles.nameInputWrapper}>
              <input
                id="nameInput"
                type="text"
                className={`${styles.nameInput} ${styles.nameInputColor}`}
                value={name}
                onChange={handleNameChange}
                placeholder="my name is..."
              />
            </div>
            <div className={styles.nameUnderline}></div>
          </div>
        </div>
        <div className={styles.colorContainer}>
            <div className={styles.favoriteColorContainer}>
                <div className={styles.favoriteColor}>
                    <div className={styles.favorite}>
                       <span>What's your favorite</span>
                        <span style={{ color: inputColor }}>
                         <span style={{ color: selectedColor }}>color</span>
                         </span>
                        <span>?</span>
                    </div>
                 <div className={styles.colorBoxContainer}>
                      <div className={styles.colorBoxWrapper}>
                           <div className={styles.colorBox}
                                style={{ backgroundColor: inputColor }}
                                onClick={handleColorBoxClick}
                            />
                      </div>
                   <div className={styles.colorTextWrapper}>
                       <div className={styles.colorText}>
                          <input id="colorInput"
                                 className={`${styles.colorInput} ${inputColor ? '' : styles.emptyLine}`}
                                 type="text"
                                 value={inputColor}
                                  onFocus={handleColorTextFocus}
                                 onChange={(event) => {setInputColor(event.target.value);
                                                        setColor(event.target.value);
                                     }}
                                  ref={colorInputRef}
                                />
                           </div>
                       </div>
                    </div>
                            {isColorPickerVisible && (
                                <div className={styles.sketchContainer}>
                                <SketchPicker color={color} onChange={handleColorChange} />
                                 </div>
                                )}
                         </div>
                       <div className={styles.colorUnderline}></div>
                     </div>   
                   </div>
               </div>
                      <div className={styles.finishLineContainer}>
                          <Link to="/landing-page" className={styles.finish}>
                                Finish
                           </Link>
                      </div>
                  </div>  
                );
            };

export default HomePage;