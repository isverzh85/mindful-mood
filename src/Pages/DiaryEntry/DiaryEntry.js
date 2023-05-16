import React, { useState, useEffect } from "react";
import styles from '../DiaryEntry/styles.module.scss';
import { Link } from 'react-router-dom';


export const DiaryEntry = () => {
    const [name, setName] = useState('');
    const [bigFeelings, setBigFeelings] = useState('');
    const [painAreas, setPainAreas] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedValue, setSelectedValue] = useState('');

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

    const handleFinishWriting = () => {
      localStorage.setItem("bigFeelings", selectedValue);
      setCurrentStep(3);
    }

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
                            <div className={styles.bigFeelings}>How <span className={styles.big}>“big”</span> are your feelings right now?
                            <div className={styles.contentFeelings}>
                            <p className={styles.smallFeelings}>
                                 “Small” feelings are not any less painful than “big” feelings. “Small” feelings are like annoying bugs. They make you irritated. Sometimes they can even make you feel numb because you’re so used to feeling like your feelings don’t matter.
                            </p>  
                            <p className={styles.bigFeelingsParagraph}>
                                   “Big” feelings are like sharing a bed with a hippo. You’re overwhelmed, and feel like you’re running a marathon even though you’re sitting still. 
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
                       <div className={styles.pain}>Starting from your head to your shoulders, check all the areas where you feel pain, discomfort, or a general feeling of upset.</div>
                       </div>
                       <div className={styles.checkboxes}>
                          <div className={styles.row}>
                             <label>
                              <input type="checkbox" 
                                     name="forehead" 
                                     value="forehead" 
                                     className={styles.checkbox}
                            />
                                Forehead
                           </label>
                           <label>
                               <input type="checkbox" 
                                      name="crownHead" 
                                      value="crownHead" 
                                      className={styles.checkbox}
                                />
                                   Crown of the head
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="neck" 
                                      value="neck" 
                                      className={styles.checkbox}
                                />
                                   Base of the neck
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="backHead" 
                                      value="backHead" 
                                      className={styles.checkbox}
                                />
                                   Back of the head
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="decolletage" 
                                      value="decolletage" 
                                      className={styles.checkbox}
                                />
                                   Decolletage
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="throat" 
                                      value="throat" 
                                      className={styles.checkbox}
                                />
                                  Throat
                            </label>
                           </div>
                             <div className={styles.rowTwo}>
                              <label>
                               <input type="checkbox" 
                                      name="temples" 
                                      value="temples" 
                                      className={styles.checkbox}
                                />
                                   Temples
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="eyes" 
                                      value="eyes" 
                                      className={styles.checkbox}
                                />
                                   Eyes
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="ears" 
                                      value="ears" 
                                      className={styles.checkbox}
                                />
                                   Ears
                            </label>
                           <label>
                               <input type="checkbox" 
                                      name="jaw" 
                                      value="jaw"
                                      className={styles.checkbox}
                                />
                                   Jaw
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="lips" 
                                      value="lips" 
                                      className={styles.checkbox}
                                />
                                   Lips
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="shoulders" 
                                      value="shoulders" 
                                      className={styles.checkbox}
                                />
                                   Shoulders
                            </label>
                         </div>
                     </div>
                </div>
          </div>
                   <div className={styles.thirdContainer}>
                      <div className={styles.checkListContainer}>
                      <div className={styles.third}>3.
                         <div className={styles.torso}>Next, move down to your torso. Note, which areas are feeling uncomfortable, tight, painful, or even foreign.</div>
                          </div>
                          <div className={styles.checkboxes}>
                           <div className={styles.row}>
                            <label>
                               <input type="checkbox" 
                                      name="palms" 
                                      value="palms" 
                                      className={styles.checkbox}
                                />
                                  Palms
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="chest" 
                                      value="chest" 
                                      className={styles.checkbox}
                                />
                                  Chest
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="stomach" 
                                      value="stomach" 
                                      className={styles.checkbox}
                                />
                                  Stomach
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="ribs" 
                                      value="ribs" 
                                      className={styles.checkbox}
                                />
                                  Ribs
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="forearm" 
                                      value="forearm" 
                                      className={styles.checkbox}
                                />
                                  Forearm
                            </label>
                        </div>
                          <div className={styles.rowTwo}>
                            <label>
                               <input type="checkbox" 
                                      name="fingers" 
                                      value="fingers" 
                                      className={styles.checkbox}
                                />
                                  Fingers
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="elbows" 
                                      value="elbows" 
                                      className={styles.checkbox}
                                />
                                  Elbows
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="armpits" 
                                      value="armpits" 
                                      className={styles.checkbox}
                                />
                                  Armpits
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="upperBack" 
                                      value="upperBack" 
                                      className={styles.checkbox}
                                />
                                  Upper back
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="lowerBack" 
                                      value="lowerBack" 
                                      className={styles.checkbox}
                                />
                                  Lower back
                            </label>
                         </div>
                       </div>
                     </div>
                  </div>
                      <div className={styles.fourthContainer}>
                         <div className={styles.checkListContainer}>
                        <div className={styles.fourth}>
                          <div className={styles.stepNumber}>4.</div>

                           
                          <div className={styles.body}>Now that you're aware of your upper body, see if you can note points of discomfort.</div> 
                          <div className={styles.time}>Take your time. You're doing great, and you only need to check for any discomfort that you already have. Sometimes reading about symptoms can cause them to manifest, so feel free to skip this question if you need to. </div>
                           </div>
                             <div className={styles.checkboxes}>
                             <div className={styles.row}>
                             <label>
                               <input type="checkbox" 
                                      name="sweatyPalms" 
                                      value="sweatyPalms" 
                                      className={styles.checkbox}
                                />
                                  Sweaty Palms
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="palpitations" 
                                      value="palpitations" 
                                      className={styles.checkbox}
                                />
                                  Palpitations
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="headache" 
                                      value="headache" 
                                      className={styles.checkbox}
                                />
                                  Headache/Migraine
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="shallowBreathing" 
                                      value="shallowBreathing" 
                                      className={styles.checkbox}
                                />
                                  Shallow Breathing
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="racingThoughts" 
                                      value="racingThoughts" 
                                      className={styles.checkbox}
                                />
                                  Racing Thoughts
                            </label>
                            </div>
                            <div className={styles.row}>
                            <label>
                               <input type="checkbox" 
                                      name="stomach" 
                                      value="stomach" 
                                      className={styles.checkbox}
                                />
                                  Stomach Issues
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="neckTightness" 
                                      value="neckTightness" 
                                      className={styles.checkbox}
                                />
                                  Neck Tightness
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="jaw" 
                                      value="jaw" 
                                      className={styles.checkbox}
                                />
                                  Jaw Pain
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="eye" 
                                      value="eye" 
                                      className={styles.checkbox}
                                />
                                  Eye Strain/ Dryness
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="dryMouth" 
                                      value="dryMouth" 
                                      className={styles.checkbox}
                                />
                                  Dry Mouth
                            </label>
                            </div>
                           </div>
                        </div>
                     </div>
                        <div className={styles.fifthContainer}>
                           <div className={styles.checkListContainer}>
                          <div className={styles.fifth}>5.
                             <div className={styles.moment}>Take a moment before moving down to your hips, thighs, legs and feet. Note which areas are feeling uncomfortable, tight, painful or even foreign.</div>
                              </div>
                               <div className={styles.checkboxes}>
                               <div className={styles.row}>
                                  <label>
                                     <input type="checkbox" 
                                            name="hips" 
                                            value="hips" 
                                            className={styles.checkbox}
                                       />
                                          Hips
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="intimateAreas" 
                                            value="intimateAreas" 
                                            className={styles.checkbox}
                                       />
                                          Intimate Areas
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="thighs" 
                                            value="thighs" 
                                            className={styles.checkbox}
                                       />
                                          Thighs
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="knees" 
                                            value="knees" 
                                            className={styles.checkbox}
                                       />
                                          Knees
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="feet" 
                                            value="feet" 
                                            className={styles.checkbox}
                                       />
                                          Feet
                                  </label>
                                 </div>
                                 <div className={styles.row}>
                                  <label>
                                     <input type="checkbox" 
                                            name="buttocks" 
                                            value="buttocks" 
                                            className={styles.checkbox}
                                       />
                                          Buttocks
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="calves" 
                                            value="calves" 
                                            className={styles.checkbox}
                                       />
                                          Calves
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="ankles" 
                                            value="ankles" 
                                            className={styles.checkbox}
                                       />
                                          Ankles
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="shin" 
                                            value="shin" 
                                            className={styles.checkbox}
                                       />
                                          Shin
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="toes" 
                                            value="toes" 
                                            className={styles.checkbox}
                                       />
                                          Toes
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