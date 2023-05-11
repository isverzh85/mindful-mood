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
                            <div className={styles.bigFeelings}>How “big” are your feelings right now?
                            <div className={styles.contentFeelings}>
                            <p className={styles.smallFeelings}>
                                 “Small” feelings are not any less painful than “big” feelings. “Small” feelings are like annoying bugs. They make you irritated. Sometimes they can even make you feel numb because you’re so used to feeling like your feelings don’t matter.
                            </p>  
                            <p className={styles.bigFeelingsParagraph}>
                                   “Big” feelings are like sharing a bed with a hippo. You’re overwhelmed, and feel like you’re running a marathon even though you’re sitting still. 
                            </p>
                      <label>
                         <input type="radio"
                                name="bigFeelings"
                                value="1"
                                onChange={(e) => setSelectedValue(e.target.value)}
                         />
                                   1
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
                                   5
                     </label>
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
                            />
                                Forehead
                           </label>
                           <label>
                               <input type="checkbox" 
                                      name="crownHead" 
                                      value="crownHead" 
                                />
                                   Crown of the head
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="neck" 
                                      value="neck" 
                                />
                                   Base of the neck
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="backHead" 
                                      value="backHead" 
                                />
                                   Back of the head
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="decolletage" 
                                      value="decolletage" 
                                />
                                   Decolletage
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="throat" 
                                      value="throat" 
                                />
                                  Throat
                            </label>
                           </div>
                             <div className={styles.rowTwo}>
                              <label>
                               <input type="checkbox" 
                                      name="temples" 
                                      value="temples" 
                                />
                                   Temples
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="eyes" 
                                      value="eyes" 
                                />
                                   Eyes
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="ears" 
                                      value="ears" 
                                />
                                   Ears
                            </label>
                           <label>
                               <input type="checkbox" 
                                      name="jaw" 
                                      value="jaw" 
                                />
                                   Jaw
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="lips" 
                                      value="lips" 
                                />
                                   Lips
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="shoulders" 
                                      value="shoulders" 
                                />
                                   Shoulders
                            </label>
                         </div>
                     </div>
                </div>
          </div>
                   <div className={styles.thirdContainer}>
                      <div className={styles.checkListContainer}>
                      <div className={styles.third}>3.</div>
                         <div className={styles.torso}>Next, move down to your torso. Note, which areas are feeling uncomfortable, tight, painful, or even foreign.</div>
                          <div className={styles.checkboxes}>
                          <div className={styles.row}>
                          <label>
                               <input type="checkbox" 
                                      name="palms" 
                                      value="palms" 
                                />
                                  Palms
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="chest" 
                                      value="chest" 
                                />
                                  Chest
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="stomach" 
                                      value="stomach" 
                                />
                                  Stomach
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="ribs" 
                                      value="ribs" 
                                />
                                  Ribs
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="forearm" 
                                      value="forearm" 
                                />
                                  Forearm
                            </label>
                        </div>
                          <div className={styles.rowTwo}>
                            <label>
                               <input type="checkbox" 
                                      name="fingers" 
                                      value="fingers" 
                                />
                                  Fingers
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="elbows" 
                                      value="elbows" 
                                />
                                  Elbows
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="armpits" 
                                      value="armpits" 
                                />
                                  Armpits
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="upperBack" 
                                      value="upperBack" 
                                />
                                  Upper back
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="lowerBack" 
                                      value="lowerBack" 
                                />
                                  Lower back
                            </label>
                         </div>
                       </div>
                     </div>
                  </div>


                      <div className={styles.fourthContainer}>
                        <div className={styles.fourth}>4.</div>
                          <div className={styles.body}>Now that you're aware of your upper body, see if you can note points of discomfort. Take your time. You're doing great, and you only need to check for any discomfort that you already have. Sometimes reading about symptoms can cause them to manifest, so feel free to skip this question if you need to.</div>
                             <div className={styles.checkboxes}>
                             <label>
                               <input type="checkbox" 
                                      name="sweatyPalms" 
                                      value="sweatyPalms" 
                                />
                                  Sweaty Palms
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="palpitations" 
                                      value="palpitations" 
                                />
                                  Palpitations
                            </label>

                            <label>
                               <input type="checkbox" 
                                      name="headache" 
                                      value="headache" 
                                />
                                  Headache/Migraine
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="shallowBreathing" 
                                      value="shallowBreathing" 
                                />
                                  Shallow Breathing
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="racingThoughts" 
                                      value="racingThoughts" 
                                />
                                  Racing Thoughts
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="stomach" 
                                      value="stomach" 
                                />
                                  Stomach Issues
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="neckTightness" 
                                      value="neckTightness" 
                                />
                                  Neck Tightness
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="jaw" 
                                      value="jaw" 
                                />
                                  Jaw Pain
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="eye" 
                                      value="eye" 
                                />
                                  Eye Strain/ Dryness
                            </label>
                            <label>
                               <input type="checkbox" 
                                      name="dryMouth" 
                                      value="dryMouth" 
                                />
                                  Dry Mouth
                            </label>
                           </div>
                        </div>
                        <div className={styles.fifthContainer}>
                          <div className={styles.fifth}>5.</div>
                             <div className={styles.moment}>Take a moment before moving down to your hips, thighs, legs and feet. Note which areas are feeling uncomfortable, tight, painful or even foreign.</div>
                               <div className={styles.checkboxes}>
                                  <label>
                                     <input type="checkbox" 
                                            name="hips" 
                                            value="hips" 
                                       />
                                          Hips
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="intimateAreas" 
                                            value="intimateAreas" 
                                       />
                                          Intimate Areas
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="thighs" 
                                            value="thighs" 
                                       />
                                          Thighs
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="knees" 
                                            value="knees" 
                                       />
                                          Knees
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="feet" 
                                            value="feet" 
                                       />
                                          Feet
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="buttocks" 
                                            value="buttocks" 
                                       />
                                          Buttocks
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="calves" 
                                            value="calves" 
                                       />
                                          Calves
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="ankles" 
                                            value="ankles" 
                                       />
                                          Ankles
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="shin" 
                                            value="shin" 
                                       />
                                          Shin
                                  </label>
                                  <label>
                                     <input type="checkbox" 
                                            name="toes" 
                                            value="toes" 
                                       />
                                          Toes
                                  </label>
                            </div>
                        </div>
                      </div>
                </div>
             </div>
        </div>
      )
    }

export default DiaryEntry;