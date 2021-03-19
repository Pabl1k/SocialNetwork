import React, {useEffect} from "react";
import style from "./Login.module.css"

export const Login = () => {
    useEffect(() => {document.title = 'Login'}, [])
    return(
        <h1 className={style.login}>Login</h1>
    )
}