
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import UserContextProvider from "./Context/UserContextProvider"
import "./App.css"

function App() {
 

  return (
   <UserContextProvider>

    <h1>React With chai or code </h1>
    <Login/>
    <Profile/>
   </UserContextProvider>

  )
}

export default App
