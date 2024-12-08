import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {

    //end point url 
    const url = "http://localhost:4000";
    //token
    const [currState, SetCurrState] = useState("Sign Up");

    const [showLogin, SetShowLogin] = useState(false);

    const [token,setToken] = useState("");
 
    const [data,setData] = useState({ })

    const contextValue = {
            url,token,setToken,SetCurrState,currState,showLogin,SetShowLogin
    }
   return <AppContext.Provider value={contextValue} > 
                {props.children}
            </AppContext.Provider>
}

export default AppContextProvider;