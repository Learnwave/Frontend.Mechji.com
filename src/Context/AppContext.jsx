import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {

    //end point url 
    const url = "http://localhost:4000";
    //token
    const [token,setToken] = useState("");
 
    const contextValue = {
            url,token,setToken
    }
   return <AppContext.Provider value={contextValue} > 
                {props.children}
            </AppContext.Provider>
}

export default AppContextProvider;