import {useContext, useState} from "react";
import axios, {AxiosError} from "axios";
import {saveToken} from "../../token.js";
import {Link, useNavigate} from "react-router-dom";
import "./LoginForm.css"
import {authContext} from "../../contexts/AuthContext";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    login: string,
    password:string
}


export default function LoginForm() {
    const navigate = useNavigate();
    const contextAuth = useContext(authContext)
    const [error , setError] = useState('')

    const {
        register,
        handleSubmit
    } = useForm<Inputs>();


    const submit: SubmitHandler<Inputs> = async (data) =>  {
        // e.preventDefault()
        try {
            const apiUrl = 'http://localhost:3001/login'
            const log = await axios.post(apiUrl, {email: data.login, password: data.password})
            saveToken(log.data.accessToken)
            localStorage.setItem("id", log.data.user.id);
            contextAuth?.setAuth({role: log.data.user.role, id:log.data.user.id})
            navigate(log.data.user.role === 'student' ? '/lk': '/lkEmployer')
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
                <input id="loginForm-input-login" {...register("login") } placeholder={'Login'}/>
                <label className="loginForm-label">Пароль</label>
                <input type="password" id="loginForm-input-password" {...register("password") } placeholder={'Password'} />
                <button className="loginForm-button" onClick={handleSubmit(submit)}>Войти</button>
                <p>У меня ещё нет аккаунта, <Link to="/signup">Зарегестрироваться</Link></p>
            </form>
        </div>
    );
}
