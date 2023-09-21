import { useState } from 'react';
import './App.css';
import Status from './status';

function App() {

  const [loggedin,setLoggedin]=useState(false);
  const toggle=() =>{
    setLoggedin((prevLoggedin) => !prevLoggedin);
  }
  console.log(loggedin)
  return (
    <div className='App'>
        <button onClick={toggle}>Toggle Login Status</button>
        <Status status={loggedin} />
    </div>
    )
}

export default App;
