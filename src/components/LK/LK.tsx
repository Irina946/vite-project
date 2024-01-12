import Button from "../ui-element/Button/Button";
import styles from "./lk.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const LK = () => {
    const id = localStorage.getItem("id");
    const apiUrl = `http://localhost:3001/users/${id}`;
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userFatherName, setUserFatherName] = useState('')
    const [userSex, setUserSex] = useState('')
    const [userDate, setUserDate] = useState('')
    const [userCity, setUserCity] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userLevelEducation, setUserLevelEducation] = useState('')
    const [userEducation, setUserEducation] = useState('')
    const [userStatus, setUserStatus] = useState('')
    const [userCourse, setUserCourse] = useState('')
    const [userPost, setUserPost] = useState('')
    const [userWorkExperience, setUserWorkExperience] = useState('')
    const [userUrl, setUserUrl] = useState('')
    const [userAboutMe, setUserAboutMe] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setUserName(jsonData?.name ?? '');
            setUserLastName(jsonData?.lastName ?? '');
            setUserFatherName(jsonData?.fatherName ?? '');
            setUserSex(jsonData?.sex ?? '');
            setUserDate(jsonData?.date ?? '');
            setUserCity(jsonData?.city ?? '');
            setUserPhone(jsonData?.phone ?? '');
            setUserLevelEducation(jsonData?.levelEducation ?? '');
            setUserEducation(jsonData?.education ?? '');
            setUserStatus(jsonData?.status ?? '');
            setUserCourse(jsonData?.courese ?? '');
            setUserPost(jsonData?.post ?? '');
            setUserWorkExperience(jsonData?.workExperience ?? '');
            setUserUrl(jsonData?.aboutMe ?? '');
            setUserAboutMe(jsonData?.url ?? '');
        };
        
        fetchData();
        
    }, [apiUrl]);

    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await axios.patch(apiUrl, {
            name: userName, lastName: userLastName, fatherName: userFatherName, sex: userSex, date: userDate, city: userCity,
            phone: userPhone, levelEducation: userLevelEducation, education: userEducation, status: userStatus,
            courese: userCourse, post: userPost, workExperience: userWorkExperience, url: userUrl,
            aboutMe: userAboutMe
        })
    }

    return (
        <div className={styles.container}>
            <h1>Мой профиль</h1>
            <form>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Имя
                        <input
                            className={styles.myInput}
                            required
                            value={userName}
                            onChange={
                                (e) =>
                                    setUserName(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Фамилия
                        <input
                            className={styles.myInput}
                            required
                            value={userLastName}
                            onChange={
                                (e) =>
                                    setUserLastName(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Отчество(опционально)
                        <input
                            className={styles.myInput}
                            value={userFatherName}
                            onChange={
                                (e) =>
                                    setUserFatherName(e.target.value)}
                        />
                    </label>
                    <div className={`${styles.flex}`}>
                        <div className={styles.labelRadio}>
                            Пол
                        </div>
                        <div className={`${styles.flex} ${styles.radio}`}>
                            <input
                                id='5432'
                                type="radio"
                                name='пол'
                                value="Женский"
                                className={styles.customRadio}
                                onChange={
                                    (e) =>
                                        setUserSex(e.target.value)}
                            />
                            <label htmlFor='5432'>
                                Женский
                            </label>
                            <input
                                id='5433'
                                type="radio"
                                name='пол'
                                value="Мужской"
                                className={styles.customRadio}
                                onChange={
                                    (e) =>
                                        setUserSex(e.target.value)}
                            />
                            <label htmlFor='5433'>
                                Мужской
                            </label>
                        </div>
                    </div>
                    <label className={styles.label}>
                        Дата рождения
                        <input
                            className={styles.myInput}
                            type="date"
                            required
                            max='2005-12-31'
                            value={userDate}
                            onChange={
                                (e) =>
                                    setUserDate(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Город проживания
                        <input
                            className={styles.myInput}
                            required
                            value={userCity}
                            onChange={
                                (e) =>
                                    setUserCity(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Мобильный телефон
                        <input
                            className={styles.myInput}
                            type="tel"
                            value={userPhone}
                            onChange={
                                (e) =>
                                    setUserPhone(e.target.value)}
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Полученный уровень образования
                        <input
                            className={styles.myInput}
                            required
                            value={userLevelEducation}
                            onChange={
                                (e) =>
                                    setUserLevelEducation(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Получаемое образование
                        <input
                            className={styles.myInput}
                            required
                            value={userEducation}
                            onChange={
                                (e) =>
                                    setUserEducation(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Статус
                        <input
                            className={styles.myInput}
                            required
                            value={userStatus}
                            onChange={
                                (e) =>
                                    setUserStatus(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Курс
                        <input
                            className={styles.myInput}
                            required
                            value={userCourse}
                            onChange={
                                (e) =>
                                    setUserCourse(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Желаемая должность
                        <input
                            className={styles.myInput}
                            required
                            value={userPost}
                            onChange={
                                (e) =>
                                    setUserPost(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Опыт работы
                        <input
                            className={styles.myInput}
                            required
                            value={userWorkExperience}
                            onChange={
                                (e) =>
                                    setUserWorkExperience(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Ссылка на партфолио
                        <input
                            className={styles.myInput}
                            type="url"
                            required
                            value={userUrl}
                            onChange={
                                (e) =>
                                    setUserUrl(e.target.value)}
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>О себе</p>
                    <textarea
                        className={styles.textArea}
                        value={userAboutMe}
                        onChange={
                            (e) =>
                                setUserAboutMe(e.target.value)}
                    />
                </div>
                <div className={styles.ContainerBtn1}>
                    <Link to="/profile">
                        <Button
                            title='Посмотреть мой публичный профиль'
                            color="blue"
                            size='large'
                        />
                    </Link>
                    <div className={styles.containerBtnInside}>
                        <button
                            className={styles.ButtonSave}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => submit(e)}
                        >
                            Сохранить изменения
                        </button>
                        <Link to="/vacancy">
                            <Button
                                title='Перейти к поиску стажировки'
                                color="blue"
                                size='large'
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.ContainerBtn2}>
                    <Button
                        title='Выйти'
                        color="emptyRed"
                        size='large'
                    />
                    <Button
                        title='Удалить аккаунт'
                        color="emptyRed"
                        size='large'
                    />
                </div>
            </form>
        </div>
    )
}