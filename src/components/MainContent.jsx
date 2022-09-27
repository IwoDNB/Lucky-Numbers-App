import React from 'react'
import { useState } from 'react'
import wowOne from '../img/comic 1.png'
import wowTwo from '../img/comic 2.png'
import luckyOne from '../img/clover(3) 1.png'
import luckyTwo from '../img/clover(3) 2.png'
import gold from '../img/money-bag 1.png'
import goldTwo from '../img/money-bag 3.png'


function MainContent({NUMONE, NUMTWO, NUMTHREE, NUMFOUR}) {
  const [numbers, setRandom] = useState([]);
  const [numbersTwo, setRandomTwo] = useState([]);
  // generate number function
  const generateRandomNum = (max) => Math.floor(Math.random() * max + 1);

  //Genarate 6/49 Number 
  const generateRandomArrayOfNums = () =>
    Array.from({ length: NUMONE }, () => generateRandomNum(NUMTWO));

  //Generate 1/10 Num  
    const generateRandomArrayOfNumsTwo = () =>
    Array.from({ length: NUMTHREE }, () => generateRandomNum(NUMFOUR));
  // update state with numbers from second function

 function compareNumbers(a, b) {
  return a - b;
}

  const handleNumGenerate = () => {

    setRandom(generateRandomArrayOfNums().sort(compareNumbers));
    
  };


  const handleNumGenerateTwo = () => {

    setRandomTwo(generateRandomArrayOfNumsTwo());
    
  };

  return (
    <div className='main-container'>
      <div className='img-top'>
        <img src={wowOne} alt="" />
        <img src={wowTwo} alt="" />
      </div>
      <div className='text-container'>
        <h3>YOUR LUCKY</h3>
        <h3>NUMBERS!</h3>
          <h4>6/49 + 1 SUPER</h4>

      </div>
      <div className='numbers-container'>
    
        <img src={luckyOne} alt="" />
        {numbers.map((e, idx) => (
          <span key={idx}>{e}</span>
        ))}
          {numbersTwo.map((e, idx) => (
          <span key={idx}>{e}</span>
        ))}
        <img src={luckyTwo} alt="" />
      </div>

      <div className='button-container'>
      <button onClick={()=>{handleNumGenerate(); handleNumGenerateTwo()}}>Get numbers!</button>
        <button className='reset'
          onClick={() => {
            setRandom([]); setRandomTwo([]);
          }}
        >
          Reset
        </button>
       
      </div>

      <div className='footer-img'>
        <img src={gold} alt="" />
        <img src={goldTwo} alt="" />
      </div>
    </div>
  );
}

export default MainContent;
  
  
 