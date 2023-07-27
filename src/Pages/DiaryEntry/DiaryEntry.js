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
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
    const [sectionData, setSectionData] = useState(null);
    const secondQuestionData = data && data.data && data.data[1] ? data.data[1].section : null;
    const thirdQuestionData = data && data.data && data.data[2] ? data.data[2].section : null;
    const fourthQuestionData = data && data.data && data.data[3] ? data.data[3].section : null;
    const fifthQuestionData = data && data.data && data.data[4] ? data.data[4].section : null;

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
          setName(savedName);
        }
        if (data && data.data && data.data.length > 0 && data.data[0].section) {
          setSectionData(data.data[0].section);
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
      
        if (currentStep === 1) {
          localStorage.setItem("bigFeelings", selectedValue);
        }
      
        if (currentStep === 2) {
          localStorage.setItem("feelings", bigFeelings);
        }
      };

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
                    <Link
                        to={{
                        pathname: "/landing-page",
                        state: {
                        selectedFeeling: bigFeelings,
                        currentStep: currentStep === 1 ? 2 : currentStep, 
                      },
                  }}
                      className={styles.finishWriting}
                      onClick={handleWritingFinished} 
                    >
                      Finish Writing.
                 </Link>
               ) : null}
                     <div className={styles.separateLine}></div>
                  </div>
                </div>
            </div>
                 <div className={styles.radioButtonQuestions}>
                  <div className={styles.questionsContainer}>
                  <div className={styles.oneContainer}>
                       <div className={styles.checkBoxContainer}>
                           <div className={styles.one}>1. 
                           {sectionData ? (
                               <>
                             <div className={styles.bigFeelingsTitle}>
                                 {sectionData.title}
                             </div>
                           <p className={styles.contentFeelings}>
                               {sectionData.content[0]}
                           </p>
                               </>
                           ) : (
                                <div>Loading...</div>
                         )}  
                               <div className={styles.checkboxes}>
                                  {secondQuestionData.checkboxes.map((checkboxLabel, index) => (
                              <label key={index}>
                                 <input type="checkbox" className={styles.checkbox} />
                                    {checkboxLabel}
                               </label>
                            ))}
                        </div>
                     </div>
                  </div>
                     <div className={styles.oneContainer}>
                        <div className={styles.one}>1.
                            {sectionData ? (
                               <>
                             <div className={styles.bigFeelingsTitle}>
                                 {sectionData.title}
                             </div>
                           <p className={styles.contentFeelings}>
                               {sectionData.content[0]}
                           </p>
                               </>
                           ) : (
                                <div>Loading...</div>
                         )}
                      </div>
                  </div>
              </div>
                   <div className={styles.secondContainer}>
                       <div className={styles.checklistContainer}>
                           <div className={styles.two}>2. {secondQuestionData.title}</div>
                               <div className={styles.checkboxes}>
                                  {secondQuestionData.checkboxes.map((checkboxLabel, index) => (
                              <label key={index}>
                                 <input type="checkbox" className={styles.checkbox} />
                                    {checkboxLabel}
                               </label>
                            ))}
                        </div>
                     </div>
                  </div>
                    <div className={styles.thirdContainer}>
                      <div className={styles.checkListContainer}>
                         <div className={styles.third}>3. {thirdQuestionData.title}</div>
                           <div className={styles.checkboxes}>
                              {thirdQuestionData.checkboxes.map((checkboxLabel, index) => (
                              <label key={index}>
                                   <input type="checkbox" className={styles.checkbox} />
                                   {checkboxLabel}
                               </label>
                        ))}
                    </div>
                  </div>
              </div>
              <div className={styles.fourthContainer}>
            <div className={styles.checkListContainer}>
              <div className={styles.fourth}>4. {fourthQuestionData.title}</div>
              <div className={styles.checkboxes}>
                {fourthQuestionData.checkboxes.map((checkboxLabel, index) => (
                  <label key={index}>
                    <input type="checkbox" className={styles.checkbox} />
                    {checkboxLabel}
                  </label>
                ))}
              </div>
            </div>
          </div>
          </div>
          <div className={styles.fifthContainer}>
             <div className={styles.checkListContainer}>
                <div className={styles.fifth}>5. {fifthQuestionData.title}</div>
                   <div className={styles.checkboxes}>
                      {fifthQuestionData.checkboxes.map((checkboxLabel, index) => (
                       <label key={index}>
                             <input type="checkbox" className={styles.checkbox} />
                                   {checkboxLabel}
                         </label>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
       </div> 
     );
   }
                              
export default DiaryEntry;