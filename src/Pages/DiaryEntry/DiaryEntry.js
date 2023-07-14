import React, { useState, useEffect } from "react";
import styles from '../DiaryEntry/styles.module.scss';
import { Link } from 'react-router-dom';
import data from '../../data.json';


export const DiaryEntry = () => {
    const [name, setName] = useState('');
    const [bigFeelings, setBigFeelings] = useState('');
    const [painAreas, setPainAreas] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedValue, setSelectedValue] = useState('');
    const [isWritingFinished, setIsWritingFinished] = useState(false);
    // const data = require('../../data.json');
    
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);




    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
          setName(savedName);
        }
        const savedBigFeelings = localStorage.getItem("bigFeelings");
        if (savedBigFeelings) {
            setBigFeelings(savedBigFeelings);
        }
        const savedPainAreas = localStorage.getItem("painAreas");
        if (savedPainAreas) {
            setPainAreas(JSON.parse(savedPainAreas));
        }
    }, []);
    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setCheckedCheckboxes((prevCheckboxes) => [...prevCheckboxes, value]);
      } else {
        setCheckedCheckboxes((prevCheckboxes) =>
          prevCheckboxes.filter((checkbox) => checkbox !== value)
        );
      }
    };

    useEffect(() => {
        if (currentStep === 3) {
          localStorage.setItem("bigFeelings", bigFeelings);
        }
      }, [currentStep, bigFeelings]);

      useEffect(() => {
        const savedFeelings = localStorage.getItem("feelings");
        if (savedFeelings) {
          setBigFeelings(savedFeelings);
        } else {
          setBigFeelings("");
        }
      }, []);

      useEffect(() => {
        if (currentStep === 2) {
          localStorage.setItem("bigFeelings", bigFeelings);
        }
      }, [currentStep, bigFeelings]);

      const handleWritingFinished = () => {
         setIsWritingFinished(true);
         localStorage.setItem("currentStep", currentStep.toString());
        };

console.log(data.bigFeelings);
console.log(styles)
console.log(data)

return(
      <div className={styles.diaryPage}>
        <div className={styles.contentContainer}>
          <div className={styles.diaryContainer}>
            <div className={styles.headingContainer}>
            <div className={styles.wrapper}>
              <div className={styles.great}>You're doing great, {name}.
              </div>
                <div className={styles.hardFeeling}>It's hard feeling the way you're feeling in this moment. Let's break it down as a way to help soothe those feelings.
                {currentStep < 3 ? (
                  <Link to="/landing-page" className={styles.finishWriting}>Finish Writing.</Link>
                  ) : null}
                     <div className={styles.separateLine}></div>
                  </div>
                </div>
            </div>

          <div className={styles.radioButtonQuestions}>
              <div className={styles.questionsContainer}>
                 <div className={styles.oneContainer}>
                         <div className={styles.one}>1.
                            <div className={styles.content}>
                            <div className={styles.contentFeelings}>
                            <p className={styles.smallFeelings}>

                              {data[0].bigFeelings.title}
                              {data[0].bigFeelings.contentFeelings}
                              

                            </p>  
                            <p className={styles.bigFeelingsParagraph}> 
                            
                            </p>
                            <div className={styles.radioButtonsContainer}>
                      <label>
                         <input type="radio"
                                name="bigFeelings"
                                value="1"
                                onChange={(e) => setSelectedValue(e.target.value)}
                         />
                         <br />
                         <span className={styles.radioButtonNumber}>1</span>
                     </label>
                     <label>
                         <input type="radio" 
                                name="bigFeelings"
                         />            
                     </label>
                     <label>
                         <input type="radio" 
                                name="bigFeelings"
                         />           
                     </label>
                     <label>
                         <input type="radio" 
                                name="bigFeelings"
                         />           
                     </label>
                     <label>
                         <input type="radio" 
                                name="bigFeelings"
                                value="5"
                         />
                         <br />
                         <span className={styles.radioButtonNumber}>5</span>       
                     </label>
                     </div>
                  </div>
                </div>
               </div>
             </div>
          </div>
                   <div className={styles.secondContainer}>
                    <div className={styles.checklistContainer}>
                       <div className={styles.two}>2.
                       <div className={styles.pain}></div>
                       </div>
                       <div className={styles.checkboxes}>
                          <div className={styles.row}>
                             <label>
                              <input type="checkbox" 
                                     className={styles.checkbox}
                            />
                           </label>
                           <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                           </div>
                             <div className={styles.rowTwo}>
                              <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                           <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                         </div>
                     </div>
                </div>
          </div>
                   <div className={styles.thirdContainer}>
                      <div className={styles.checkListContainer}>
                      <div className={styles.third}>3.
                         <div className={styles.torso}></div>
                          </div>
                          <div className={styles.checkboxes}>
                           <div className={styles.row}>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                        </div>
                          <div className={styles.rowTwo}>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                         </div>
                       </div>
                     </div>
                  </div>
                      <div className={styles.fourthContainer}>
                         <div className={styles.checkListContainer}>
                        <div className={styles.fourth}>
                          <div className={styles.stepNumber}>4.</div>
                          <div className={styles.body}></div> 
                          <div className={styles.time}></div>
                           </div>
                             <div className={styles.checkboxes}>
                             <div className={styles.row}>
                             <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                /> 
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            </div>
                            <div className={styles.row}>
                            <label>
                               <input type="checkbox"
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox"   
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox"
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            <label>
                               <input type="checkbox" 
                                      className={styles.checkbox}
                                />
                            </label>
                            </div>
                           </div>
                        </div>
                     </div>
                        <div className={styles.fifthContainer}>
                           <div className={styles.checkListContainer}>
                          <div className={styles.fifth}>5.
                             <div className={styles.moment}></div>
                              </div>
                               <div className={styles.checkboxes}>
                               <div className={styles.row}>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                  <label>
                                     <input type="checkbox"
                                            className={styles.checkbox}
                                       /> 
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                 </div>
                                 <div className={styles.row}>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />  
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       />
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            className={styles.checkbox}
                                       /> 
                                  </label>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
      )
    }

export default DiaryEntry;