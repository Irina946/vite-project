import React, {useContext, useState} from "react";
import axios, {AxiosError} from "axios";
import {saveToken} from "../../token.js";
import {Link, useNavigate} from "react-router-dom";
import "./LoginForm.css"
import {authContext} from "../../contexts/AuthContext";


export default function LoginForm() {
    const navigate = useNavigate();
    const [userlogin, setUserlogin] = useState('')
    const [password, setPassword] = useState('')
    const contextAuth = useContext(authContext)
    const [error , setError] = useState('')


    const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const apiUrl = 'http://localhost:3001/login'
            const log = await axios.post(apiUrl, {email: userlogin, password: password})
            saveToken(log.data.accessToken)
            localStorage.setItem("id", log.data.user.id);
            await contextAuth?.setAuth({role: log.data.user.role, id:log.data.user.id})
            console.log(contextAuth?.auth.role)
            console.log(contextAuth?.auth.role === 'student' ? '/lk': '/lkEmployer')
            navigate(contextAuth?.auth.role === 'student' ? '/lk': '/lkEmployer')
        }
        catch (err) {
            const thisErr = err as AxiosError
            if(thisErr?.request?.status === 400) {
                setError('Имя пользователя или пароль введены неверно');
            }
        }
    }


    return (
        <div className="loginForm">
            <form>
                <p className="login-error">{error}</p>
                <label className="loginForm-label">Почта</label>
                <input id="loginForm-input-login" type="text" value={userlogin} onChange={(e) => setUserlogin(e.target.value)} placeholder={'Login'} />
                <label className="loginForm-label">Пароль</label>
                <input id="loginForm-input-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'} />
                <button className="loginForm-button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => submit(e)}>Войти</button>
                <p>У меня ещё нет аккаунта, <Link to="/signup">Зарегестрироваться</Link></p>
            </form>
        </div>
    );
}
