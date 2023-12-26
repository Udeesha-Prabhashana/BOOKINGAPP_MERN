import { createContext } from "react"

//when we use COntext hooks. we can implement some change for all functions,data in side the APP. 
const INITIAL_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
    
}