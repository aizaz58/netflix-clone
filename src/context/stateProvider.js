import { createContext, useContext, useState } from "react";


const DataContext=createContext()


export const DataProvider=({children})=>{
const [InView, setInView] = useState(true)
return(
<DataContext.Provider value={{InView ,setInView}}>
    {children}

</DataContext.Provider>
)

}

export const useStateContext=()=>useContext(DataContext)