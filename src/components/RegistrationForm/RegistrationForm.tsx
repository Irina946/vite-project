import {useContext, useEffect, useRef, useState} from "react";
import axios, {AxiosError} from "axios";
import {saveToken} from "../../token.ts";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {authContext} from "../../contexts/AuthContext.tsx"
import "./RegistrationForm.css"

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const PASSWORD_REGEX =/^.*(?=.{6,})[a-zA-Z0-9-].*$/

export default function SignupForm() {
    const navigate = useNavigate();
    const { state } = useLocation()
    const [userLogin, setUserLogin] = useState('')
    const [validLogin, setValidLogin] = useState(true);
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(true);
    const [secondPassword, setSecondPassword] = useState('')
    const [checkMatchPass, setCheckMatchPass] = useState(true)
    const [role, setRole] = useState('')
    const [error, setError] = useState('')
    const contextAuth = useContext(authContext)
    const firstUpdate = useRef(true);
    const apiUrl = 'http://localhost:3001/signup'

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            setValidLogin(EMAIL_REGEX.test(userLogin))
        }
    }, [userLogin, EMAIL_REGEX])

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            setValidPassword(PASSWORD_REGEX.test(password))
            const match = (password === secondPassword)
            setCheckMatchPass(match);
        }
    }, [password, PASSWORD_REGEX, secondPassword])


    async function submit(e) {
        e.preventDefault()
        if (validPassword && validLogin && checkMatchPass){
            try {
                const register = await axios.post(apiUrl, {email: userLogin, password: password, role:role})
                saveToken(register.data.accessToken)
                localStorage.setItem("id", register.data.user.id);
                contextAuth?.setAuth({role: register.data.user.role, id:register.data.user.id})
                navigate(state?.path || "/lk")
            } catch (err) {
                const thisErr = err as AxiosError
                if(thisErr?.request?.status === 400) {
                    setError('Пользователь с таким email уже существует');
                }
                else {
                    setError('Ошибка при создании пользователя, попробуйте ещё раз')
                }
            }

        }

    }


    return (
        <div className="signupForm">
            <form>
                <p className="submit-error"> {error} </p>
                <div className={validLogin ? 'signupForm-login' : 'signupForm-login error'}>
                    <label className="signupForm-label-login"
                           htmlFor="signupForm-input-login">Почта</label>
                    <input
                        id="signupForm-input-login"
                        type="text"
                        value={userLogin}
                        onChange={(e) => setUserLogin(e.target.value)}
                        placeholder={'Login'}/>
                    <p className="error-text">
                        Некорректный email
                    </p>
                </div>
                <div className={validPassword ? 'signupForm-password' : 'signupForm-password error'}>
                    <label className="signupForm-label-password" htmlFor="signupForm-input-password">Пароль</label>
                    <input
                        id="signupForm-input-password"
                        type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder={'Password'} />
                    <p className="error-text">
                        Пароль должен быть не короче 6 символов <br/>
                        Пароль должен содержать цифры и латинские буквы в разных регистрах
                    </p>
                </div>
                <div className={checkMatchPass ? 'signupForm-secondPassword' : 'signupForm-secondPassword error'}>
                    <label className="signupForm-label-secondPassword">Повторите пароль</label>
                    <input
                        id="signupForm-input-secondPassword"
                        type="password" value={secondPassword}
                        onChange={(e) => setSecondPassword(e.target.value)}
                        placeholder={'Repeat password'} />
                    <p className="error-text">
                        Пароли не совпадают
                    </p>
                </div>
                <div className="role-radio">
                    <label className="role-radio-label"><input type="radio" id="role-student" name="role" className="customRadio" onChange={() => setRole('student')}/>Я студент</label>
                    <label className="role-radio-label"><input type="radio" id="role-employer" name="role" className="customRadio" onChange={() => setRole('employer')}/>Я работодатель</label>
                </div>
                <button className="signupForm-button" onClick={submit}>Зарегестрироваться</button>
                <p>У меня уже есть аккаунт, <Link to="/login">Войти</Link></p>
            </form>
        </div>
    );
}
