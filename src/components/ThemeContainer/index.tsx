import { createContext, useState } from "react"

export const ThemeContext = createContext("light");

export const ThemeContainer=(props: {children:React.ReactNode})=>{
    const [containerState, setContainerState] = useState("light")
return (
    <ThemeContext.Provider value={containerState}>
        <button onClick={()=>setContainerState(containerState==="light" ? "dark":"light")}> Change color</button>
        {props.children}
    </ThemeContext.Provider>
)
}