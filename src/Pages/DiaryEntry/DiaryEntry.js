import React, { useState, useEffect } from "react";
import styles from '../DiaryEntry/styles.module.scss';
import { Link } from 'react-router-dom';


export const DiaryEntry = () => {
    const [name, setName] = useState('');
    const [currentStep, setCurrentStep] = useState(1);


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
          setName(savedName);
        }
    }, []);

    const handleFinishWriting = () => {
        setCurrentStep(3);
    }

return(
        <div className={styles.diaryPage}>
            <div className={styles.diaryContainer}>
               <div className={styles.headingContainer}>
                  <div className={styles.great}>You're doing great, {name}.
                  <div className={styles.hardFeeling}>It's hard feeling the way you're feeling in this moment. Let's break it down as a way to help soothe those feelings.</div>
                  <Link to="/landing-page" className={styles.finishWriting}>Finish Writing.</Link>
                  <div className={styles.separateLine}></div>
                  </div>
                      <div className={styles.oneContainer}>
                         <div className={styles.one}>1.</div>
                            <div className={styles.bigFeelings}>How “big” are your feelings right now?</div>
                            <div className={styles.contentFeelings}>“Small” feelings are not any less painful than “big” feelings. “Small” feelings are like annoying bugs. They make you irritated. Sometimes they can even make you feel numb because you’re so used to feeling like your feelings don’t matter.
                                                                    “Big” feelings are like sharing a bed with a hippo. You’re overwhelmed, and feel like you’re running a marathon even though you’re sitting still. </div>
                      <label>
                         <input type="radio"
                                name="bigFeelings"
                                value="1"
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
                   <div className={styles.secondContainer}>
                       <div className={styles.two}>2.</div>
                       <div className={styles.pain}>Starting from your head to your shoulders, check all the areas where you feel pain, discomfort, or a general feeling of upset.</div>
                       <div className={styles.checkboxes}>
                          <label>
                              <input type="checkbox" 
                                     name="forehead" 
                                     value="forehead" 
                            />
                                Forehead
                           </label>
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
                                      value="ldecolletage" 
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
                   </div>
                   <div className={styles.thirdContainer}>
                      <div className={styles.third}>3.</div>
                         <div className={styles.torso}>Next, move down to your torso. Note, which areas are feeling uncomfortable, tight, painful, or even foreign.</div>
                          <div className={styles.checkboxes}>
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



                </div>
            </div>
        </div>
      )
    }

export default DiaryEntry;