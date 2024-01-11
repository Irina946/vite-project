import styles from "./editing_vacansy.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
    name: string;
}


export const EditingVacancy = () => {
    const today = new Date()
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    let mmS = ''
    let ddS = ''

    if (dd < 10) {
        ddS = '0' + String(dd)
        console.log(ddS)
    } else ddS = String(dd);
    if (mm < 10) {
        mmS = '0' + mm
        console.log(mmS)
    } else mmS = String(dd);

    const formattedToday = yyyy + '-' + mmS + '-' + ddS;
    console.log(formattedToday)

    const [vacancyName, setVacancyName] = useState('')
    const [levelEducation, setLevelEducation] = useState('')
    const [educationReceived, setEducationReceived] = useState('')
    const [course, setCourse] = useState('')
    const [workExperience, setWorkExperience] = useState('')
    const [professionalSkills, setProfessionalSkills] = useState('')
    const [countPlace, setCountPlace] = useState('')
    const [payabilityFrom, setPayabilityFrom] = useState('')
    const [payabilityTo, setPayabilityTo] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [aboutVacancy, setAboutVacancy] = useState('')

    const id = localStorage.getItem("id");
    const [data, setData] = useState<UserData | null>(null)
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

    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await axios.postForm(`http://localhost:3001/vacancies`, {
            name: vacancyName, level: levelEducation, received: educationReceived, course: course, work: workExperience,
            skills: professionalSkills, count: countPlace, payabilityFrom: payabilityFrom, payabilityTo: payabilityTo, city: city,
            district: district, address: address, aboutVacancy: aboutVacancy
        })
    }

    return (
        <div className={styles.containerAll}>
            <h1>Редактирование вакансии</h1>
            <form>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Название вакансии
                        <input
                            className={styles.myInput}
                            required
                            value={vacancyName}
                            onChange={
                                (e) =>
                                    setVacancyName(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <h2>Требования для соискателей</h2>
                    <label className={styles.label}>
                        Полученный уровень образования
                        <input
                            className={styles.myInput}
                            value={levelEducation}
                            onChange={
                                (e) =>
                                    setLevelEducation(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        Получаемое образование
                        <input
                            className={styles.myInput}
                            value={educationReceived}
                            onChange={
                                (e) =>
                                    setEducationReceived(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        Курс
                        <input
                            className={styles.myInput}
                            value={course}
                            onChange={
                                (e) =>
                                    setCourse(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        Опыт работы
                        <input
                            className={styles.myInput}
                            required
                            value={workExperience}
                            onChange={
                                (e) =>
                                    setWorkExperience(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>Профессиональные навыки соискателей</p>
                    <textarea
                        className={styles.textArea}
                        required
                        value={professionalSkills}
                        onChange={
                            (e) =>
                                setProfessionalSkills(e.target.value)
                        }
                    ></textarea>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Количество мест по вакансии
                        <input
                            className={styles.myInput}
                            type='number'
                            min='1'
                            required
                            value={countPlace}
                            onChange={
                                (e) =>
                                    setCountPlace(e.target.value)
                            } />
                    </label>
                    <label className={styles.label}>
                        Дата публикации
                        <input className={styles.myInput}
                            type='date'
                            value={formattedToday}
                            disabled
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <h2>Оплачиваемость</h2>
                    <div className={styles.blockInside}>
                        <label
                            className={`${styles.label} ${styles.labelPrice}`}>
                            От
                            <input
                                className={styles.myInput}
                                type="number"
                                required
                                value={payabilityFrom}
                                onChange={
                                    (e) =>
                                        setPayabilityFrom(e.target.value)
                                }
                            />
                        </label>
                        <label
                            className={`${styles.label} ${styles.labelPrice}`}>
                            До
                            <input
                                className={styles.myInput}
                                type="number"
                                required
                                value={payabilityTo}
                                onChange={
                                    (e) =>
                                        setPayabilityTo(e.target.value)
                                }
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Город/населённый пункт
                        <input
                            className={styles.myInput}
                            required
                            value={city}
                            onChange={
                                (e) =>
                                    setCity(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        Район
                        <input
                            className={styles.myInput}
                            required
                            value={district}
                            onChange={
                                (e) =>
                                    setDistrict(e.target.value)
                            }
                        />
                    </label>
                    <label className={styles.label}>
                        Адрес
                        <input
                            className={styles.myInput}
                            required
                            value={address}
                            onChange={
                                (e) =>
                                    setAddress(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>Расскажите о вакансии в свободной форме</p>
                    <textarea
                        className={styles.textArea}
                        required
                        value={aboutVacancy}
                        onChange={
                            (e) =>
                                setAboutVacancy(e.target.value)
                        }
                    >
                    </textarea>
                </div>
                <div className={styles.ContainerBtn}>
                    <button
                        className={styles.ButtonSave}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => submit(e)}
                    >
                        Опубликовать вакансию
                    </button>
                </div>
            </form >
        </div>
    );
};



