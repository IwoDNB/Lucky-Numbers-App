import { useState } from 'react'
import MainContent from './components/MainContent'
import './App.css'
import Numbers from './components/MainContent'


function App() {

  const [numone, setnumOne] = useState(6);
  const [numtwo, setnumTwo] = useState(49);

  const[numthree, setnumThree] = useState(1);
  const[numfour, setnumFour] = useState(9);
 
  return (

    <MainContent NUMONE={numone} NUMTWO={numtwo} NUMTHREE={numthree} NUMFOUR={numfour}/>

  )
  }

export default App
