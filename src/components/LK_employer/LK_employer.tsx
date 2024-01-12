import Button from "../ui-element/Button/Button";
import styles from "./LK_employer.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import VacanciesList from "../Main/Vacancies-List/Vacancies-List";
import { Vacancy } from "../Main/VacancyComponent/VacancyComponent";

type TVacancy = {
    id: number;
    name: string;
    companyName: string,
    level: string,
    received: string,
    course: string,
    work: string,
    skills: string,
    count: string,
    date: string,
    payabilityFrom: string,
    payabilityTo: string,
    city: string,
    district: string,
    address: string,
    aboutVacancy: string,
    aboutCompany: string,
}

export const LK_employer = () => {
    const [companyName, setCompanyName] = useState(``)
    const [companyUserName, setCompanyUserName] = useState('')
    const [companyPhone, setCompanyPhone] = useState('')
    const [companyAbout, setCompanyAbout] = useState('')
    const [companyUrl, setCompanyUrl] = useState('')
    const id = localStorage.getItem("id");
    const apiUrl = `http://localhost:3001/users/${id}`;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setCompanyName(jsonData?.name ?? '');
            setCompanyUserName(jsonData?.userName ?? '');
            setCompanyPhone(jsonData?.phone ?? '');
            setCompanyAbout(jsonData?.about ?? '');
            setCompanyUrl(jsonData?.url ?? '');
        };

        fetchData();

    }, [apiUrl]);



    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/users/${id}`, {
            name: companyName, userName: companyUserName, phone: companyPhone, about: companyAbout, url: companyUrl
        })
    }

    const [data, setData] = useState<Vacancy[]>([]);
    const api = 'http://localhost:3001/vacancies/'
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(api);
            const jsonData = await response.json();
            setData(jsonData.map((vacancy: TVacancy) => (
                {
                    id: vacancy.id,
                    title: vacancy.name,
                    employer: vacancy.companyName ? vacancy.companyName : '',
                    features: [
                        vacancy.level === 'Не важно' || !vacancy.level ? 'Без опыта' : vacancy.level,
                        vacancy.work === 'Нет' || !vacancy.level ? 'Стажировка' : 'Официальное трудоустройство'
                    ],
                    location: vacancy.city ? vacancy.city : '',
                    address: vacancy.address ? vacancy.address : '',
                    salaryFrom: vacancy.payabilityFrom ? vacancy.payabilityFrom : '',
                    salaryTo: vacancy.payabilityTo ? vacancy.payabilityTo : '',
                    link: ''
                })))
        };
        fetchData();
    }, [api])


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
                    <VacanciesList post_vacancies={data?.filter((vacancy: Vacancy) => vacancy.employer === companyName)} />
                    <div className={styles.paddings}>
                        <Link to="/createVacancy" >
                            <Button
                                color='blue'
                                size='large'
                                title='Добавить вакансию' />
                        </Link>
                    </div>
                </div>

                <div className={styles.ContainerBtn1}>

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