import { createContext,useContext} from "react";


export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : ()=>{},           //create kar liya 
    LightTheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider    //bunch bna liya 

export default function useTheme(){
    return useContext(ThemeContext)        //use karne ke liye hook bna liya 
}