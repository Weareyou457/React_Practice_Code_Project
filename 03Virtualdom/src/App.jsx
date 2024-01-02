
import './App.css'
import Card from './Component/Card'

function App() {

  // let myobj = {
  //   name:"hotesh",
  //   age:"123"
  // }

  // let newArray =[12,12,12]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl'> tailwind test</h1>
      {/* //har card alg info le  */}

    {/* <Card username = "chai or code" someObj = {myobj} newarr={newArray}/> */}


    <Card username = "chai or code" btn="show me"/>


    <Card username="alfaiz"  />
      
    </>
  )
}

export default App

//INSTALL TAILWIND -->> npm install -D tailwindcss postess autoprefixer

