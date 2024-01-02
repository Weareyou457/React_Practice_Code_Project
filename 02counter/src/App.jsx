import { useState } from 'react';
import './App.css'

function App() {

  

  let [counter , setCounter] =useState(15) //state ko change karne ke liye responsale hota hai 

// let counter = 13

const addValue = () =>{
  console.log("value add");
  //UI updation ko react control

  //counter = counter + 1  // nhi ho rha to vo hook de rha hai ki me cosole me to change kar du par UI par karna hoto vo react par chod do 

  setCounter(counter + 1) //ek click pr ek hi value bad rhi hai 
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1) //19 hoga kya hoga

  //usestate = batches me bhr kar chize bjta hai 
  // pura batch ban kr jayega to vo sabko same hi manega 

  // agar esa karna hot  (previous value dega)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1) //ab 19 dega 

}
const removeValue = () =>{
  // console.log("value remove",Math.random());
  if(counter > 0){   //assignment
  setCounter( counter - 1)
  }
}
  return (
    <>
     
      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value : {counter} </button>
      <br />
      <br/>
      <button onClick={removeValue}>Remove Value : {counter}</button>  

      <h2>Footer value : {counter}</h2>

    </>
  )
}

export default App
