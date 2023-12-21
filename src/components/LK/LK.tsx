import Button from "../ui-element/Button/Button";
import styles from "./lk.module.css";
import { Link } from "react-router-dom";

export const LK = () => {
    return (
        <div className={styles.container}>
            <h1>Мой профиль</h1>
            <form>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Имя
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Фамилия
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Отчество(опционально)
                        <input className={styles.myInput} />
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
                            />
                            <label htmlFor='5433'>
                                Мужской
                            </label>
                        </div>
                    </div>
                    <label className={styles.label}>
                        Дата рождения
                        <input className={styles.myInput} type="date" required max='2005-12-31' />
                    </label>
                    <label className={styles.label}>
                        Город проживания
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Мобильный телефон
                        <input className={styles.myInput} type="tel" />
                    </label>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Полученный уровень образования
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Получаемое образование
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Статус
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Курс
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Желаемая должность
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Опыт работы
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Ссылка на партфолио
                        <input className={styles.myInput} type="url" required />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>О себе</p>
                    <textarea className={styles.textArea} />
                </div>
                <div className={styles.ContainerBtn1}>
                    <Button
                        title='Посмотреть мой публичный профиль'
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