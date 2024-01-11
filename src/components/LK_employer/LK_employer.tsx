import Button from "../ui-element/Button/Button";
import styles from "./LK_employer.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import VacanciesList from "../Main/Vacancies-List/Vacancies-List";

const getVacancies = async (api: string) => {
    const response = await axios.get(api);
    return response.data;
}

export const LK_employer = () => {
    const id = localStorage.getItem("id");
    const [companyName, setCompanyName] = useState(``)
    const [companyUserName, setCompanyUserName] = useState('')
    const [companyPhone, setCompanyPhone] = useState('')
    const [companyAbout, setCompanyAbout] = useState('')
    const [companyUrl, setCompanyUrl] = useState('')
    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/users/${id}`, {
            name: companyName, userName: companyUserName, phone: companyPhone, about: companyAbout, url: companyUrl
        })
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataList = await getVacancies('http://localhost:3001/vacancies');
            setData(dataList)
        };
        fetchData();
    }, [])
    console.log(data)


    return (
        <div className={styles.container}>
            <h1>Проофиль компании</h1>
            <form>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Название компании
                        <input
                            className={styles.myInput}
                            required
                            value={companyName}
                            onChange={
                                (e) =>
                                    setCompanyName(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        ФИО представителя
                        <input
                            className={styles.myInput}
                            required
                            value={companyUserName}
                            onChange={
                                (e) =>
                                    setCompanyUserName(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        Номер телефона
                        <input
                            className={styles.myInput}
                            type="tel"
                            value={companyPhone}
                            onChange={
                                (e) =>
                                    setCompanyPhone(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>Расскажите о компании</p>
                    <textarea
                        className={styles.textArea}
                        value={companyAbout}
                        onChange={
                            (e) =>
                                setCompanyAbout(e.target.value)
                        }
                    />
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Ссылка на сайт компании
                        <input
                            className={styles.myInput}
                            type="url"
                            required
                            value={companyUrl}
                            onChange={
                                (e) =>
                                    setCompanyUrl(e.target.value)
                            } />
                    </label>
                </div>
                <div className={styles.block}>
                    <h2>Размещённые вакансии</h2>
                    <VacanciesList vacancies={data} />
                    <Link to="/createVacancy">
                        <Button
                            color='blue'
                            size='large'
                            title='Добавить вакансию' />
                    </Link>
                </div>

                <div className={styles.ContainerBtn1}>
                    <Button
                        title='Посмотреть публичный профиль компании'
                        color="blue"
                        size='large'
                    />
                    <div className={styles.containerBtnInside}>
                        <button
                            className={styles.ButtonSave}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => submit(e)}
                        >
                            Сохранить изменения
                        </button>
                        <Link to="/vacancy">
                            <Button
                                title='Перейти к поиску сотрудника'
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