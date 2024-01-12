import {useContext, useState} from "react";
import axios, {AxiosError} from "axios";
import {saveToken} from "../../token.ts";
import {Link, useNavigate} from "react-router-dom";
import {authContext} from "../../contexts/AuthContext.tsx"
import "./RegistrationForm.css"
import {SubmitHandler, useForm} from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const PASSWORD_REGEX =/^.*(?=.{6,})[a-zA-Z0-9-].*$/
type Inputs = {
    login: string,
    password:string,
    secondPassword:string
}

export default function SignupForm() {
    const navigate = useNavigate();
    const [role, setRole] = useState('')
    const contextAuth = useContext(authContext)
    const apiUrl = 'http://localhost:3001/signup'
    const [error, setError] = useState('')

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        getValues
    } = useForm<Inputs>({mode: "onBlur"});

    const submit: SubmitHandler<Inputs> = async (data) => {
        if (isValid){
            try {
                const register = await axios.post(apiUrl, {email: data.login, password: data.password, role:role})
                saveToken(register.data.accessToken)
                localStorage.setItem("id", register.data.user.id);
                contextAuth?.setAuth({role: register.data.user.role, id:register.data.user.id})
                navigate(register.data.user.role === 'student' ? '/lk': '/lkEmployer')
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
                <label className="signupForm-label-login"
                       htmlFor="signupForm-input-login">Почта</label>
                <input
                    id="signupForm-input-login"
                    {...register("login", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                        },
                        pattern: {value: EMAIL_REGEX, message: "Некорректный email"}
                        }
                    )}
                    placeholder={'Login'}/>
                <div className="perror">
                    {errors?.login && <p className="error-text">{errors?.login?.message || "Error"}</p>}
                </div>
                <label className="signupForm-label-password" htmlFor="signupForm-input-password">Пароль</label>
                <input
                    type="password"
                    id="signupForm-input-password"
                    {...register("password", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 6,
                                message: "Пароль должен быть не короче 6 символов"
                            },
                            pattern: {value: PASSWORD_REGEX, message: "Пароль должен содержать цифры и латинские буквы в разных регистрах"}
                        }
                    )}
                    placeholder={'Password'} />
                <div className="perror">
                    {errors?.password && <p className="error-text"> {errors?.password?.message || "Error"}</p>}
                </div>
                <label className="signupForm-label-secondPassword">Повторите пароль</label>
                <input
                    type="password"
                    id="signupForm-input-secondPassword"
                    {...register("secondPassword", {
                            required: "Поле обязательно к заполнению",
                        validate: (value) => {
                            const { password } = getValues();
                            return password === value || "Пароли не совпадают";
                        }}
                    )}
                    placeholder={'Repeat password'} />
                <div className="perror">
                    {errors?.secondPassword && <p className="error-text"> {errors?.secondPassword?.message || "Error"}</p>}
                </div>
                <div className="role-radio">
                    <label className="role-radio-label"><input type="radio" id="role-student" name="role" className="customRadio" onChange={() => setRole('student')}/>Я студент</label>
                    <label className="role-radio-label"><input type="radio" id="role-employer" name="role" className="customRadio" onChange={() => setRole('employer')}/>Я работодатель</label>
                </div>
                <button className="signupForm-button" onClick={handleSubmit(submit)}>Зарегестрироваться</button>
                <p>У меня уже есть аккаунт, <Link to="/login">Войти</Link></p>
            </form>
        </div>
    );
}
