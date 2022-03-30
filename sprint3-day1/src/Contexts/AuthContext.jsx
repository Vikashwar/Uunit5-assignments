
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [isAuth, setIsAuth] = useState(false);
    const [status, setStatus] = useState("logout");
    const [token, setToken] = useState("")

    const toggleAuth = (t)=>{

        setIsAuth(!isAuth);
        setToken(t);
        setStatus(`${ isAuth ? "logout" : "login"}`)

    }

    return <AuthContext.Provider value={{toggleAuth,isAuth,status,token}}>
        {children}
    </AuthContext.Provider>
}