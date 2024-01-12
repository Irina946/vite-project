import { useState, useEffect } from "react";
import styles from "./profile.module.css";

interface UserData {
    id: string;
    lastName: string;
    name: string;
    fatherName: string;
    sex: string;
    date: string;
    city: string;
    levelEducation: string;
    education: string;
    status: string;
    courese: string;
    workExperience: string;
    url: string;
    aboutMe: string;
    post: string;
}


const getCurrentAge = (date: string): string => {
    console.log(
        date
    )
    return String(Math.floor(
        (new Date().getTime() - new Date(date).getTime()) /
        (24 * 3600 * 365.25 * 1000)
    ));
};


const getCurrentAgeWord = (age: string): string => {
    const value = Math.abs(Number(age)) % 100;
    const num = value % 10;
    if (value > 10 && value < 20) return `${age} лет`;
    if (num > 1 && num < 5) return `${age} года`;
    if (num === 1) return `${age} год`;
    return `${age} лет`;
};


const getCurrentDate = (date: string): string => {
    const a = String(date).split("-");
    a.reverse();
    return a.join(".");
};

function BasicInformation() {
    const id = localStorage.getItem("id");
    const [data, setData] = useState<UserData | null>(null);
    const apiUrl = `http://localhost:3001/users/${id}`;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, [apiUrl]);
    if (!data) {
        return <div>Loading...</div>;
    }
    

    return (
        <div className={styles.profile}>
            <div className={styles.basicInformationContainer}>
                <div className={styles.imgContainer}>
                    <img className={styles.imgUser} src="src/img/user.png" alt="User" />
                </div>
                <div className={styles.basicInformation}>
                    <h1 className={styles.name}>
                        {data.lastName} {data.name} {data.fatherName}
                    </h1>
                    <div className={styles.info1}>
                        <p>Пол: {data.sex}</p>
                        <p>{getCurrentAgeWord(getCurrentAge(data.date))}</p>
                        <p>{getCurrentDate(data.date)}</p>
                    </div>
                    <div className={styles.info2}>
                        <p>Проживает: {data.city}</p>
                        <p>Гражданство: Россия</p>
                    </div>
                </div>
            </div>
            <div className={styles.describe}>
                <p className={styles.header}>Желаемая должность</p>
                <h2 className={styles.post}>{data.post}</h2>
            </div>
            <div>
                <p className={styles.header}>Образование</p>
                <p>Полученное образование: {data.levelEducation}</p>
                <p>Получаемое образование: УрФУ, {data.education}</p>
                <p>Статус: {data.status}</p>
                <p>Курс: {data.courese}</p>
                <p>Опыт работы: {data.workExperience}</p>
                <p>Портфолио: <a className={styles.linkPartfolio} href={data.url}>{data.url}</a></p>
            </div>
            <div className={styles.describe}>
                <p className={styles.header}>Обо мне</p>
                {data.aboutMe}
            </div>
        </div>
    );
}

function Profile() {
    return (<><BasicInformation />
    </>)
}

export default Profile;

