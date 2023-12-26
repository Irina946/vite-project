import Button from "../ui-element/Button/Button";
import styles from "./LK_employer.module.css";
import { Link } from "react-router-dom";

export const LK_employer = () => {
    return (
        <div className={styles.container}>
            <h1>Проофиль компании</h1>
            <form>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Название компании
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        ФИО представителя
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Номер телефона
                        <input className={styles.myInput} type="tel" />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>Расскажите о компании</p>
                    <textarea className={styles.textArea} />
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Ссылка на сай компании
                        <input className={styles.myInput} type="url" required />
                    </label>
                </div>
                <div className={styles.block}>
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
                        <Button
                            title='Сохранить изменения'
                            color='violet'
                            size='large'
                        />
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