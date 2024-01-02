import { useState,useCallback, useEffect, useRef} from "react"




function App() {
 const [length,setLength]=useState(8)
 const [number,setNumber]=useState(false)
 const [char,setChar]=useState(false)
 const [password,setPassword] = useState("")

 //use Raf hook
//kisi bhi chiz ka refernce lena hoto use ref

 const passwordRef = useRef(null) //defult value

 const passwordGenrator = useCallback(()=>{    //function ko memoryized karega 
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str +="0123456789"
    }
    if(char){
      str += "!@#$%^&~:[]"
    }

    for (let i = 0; i <= length; i++) {
      
      let char = Math.floor(Math.random() * str.length + 1) //number dega to niche char me converted karega 

      pass += str.charAt(char)
    }

    setPassword(pass)

 },[length,number,char,setPassword])

//  passwordGenrator() ///use callback laga diya to ham esa nhi kar skte 


//use effect hook 

// useEffect(callback,depencies array)


useEffect(()=>{    //inme kuch bhi ched chad ho to vpas run kardo (page load hota hai to first time call hota hai)
  passwordGenrator()
},[length,number,char,passwordGenrator])

//copy pssword

const copyPasswordtoClip = useCallback(() =>{
  passwordRef.current?.select()  //select par effect dega 
  window.navigator.clipboard.writeText(password)     //window es object ko copr kr lega 
},[password])




  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4">
      <h1 className="text-white text-center my-3 ">password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
         />

         <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordtoClip}>copy</button>

      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength (e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{setNumber((prev)=> !prev)}}       //change for new value false true true false 
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={char}
          id="numberInput"
          onChange={()=>{setChar((prev)=> !prev)}}
          />
          <label>Characters</label>
        </div>
       
      </div>
     </div>
    </>
  )
}

export default App
