
import {AuthContext} from "../Contexts/AuthContext";
import {useContext} from "react";
import axios from "axios";
import "./navbar.css"
export const Navbar = () =>{

    const {isAuth,toggleAuth} = useContext(AuthContext);

    const obj = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const login = (obj)=>{

        axios.post("https://reqres.in/api/login", obj).then((res)=>{
            toggleAuth(res.data.token)
        })
    }
    return <div className="nav"><button className="btn" onClick={()=>login(obj)}>
    {isAuth ? "logout" : "login"}
</button></div>
 
}