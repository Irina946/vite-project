import styles from "./editing_vacansy.module.css";
import Button from "../ui-element/Button/Button";


export const EditingVacancy = () => {
    const today = new Date()
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = 0 + dd;
    if (mm < 10) mm = 0 + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;
    return (
        <div className={styles.containerAll}>
            <h1>Редактирование вакансии</h1>
            <form>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Название вакансии
                        <input
                            className={styles.myInput}
                            required />
                    </label>
                </div>
                <div className={styles.block}>
                    <h2>Требования для соискателей</h2>
                    <label className={styles.label}>
                        Полученный уровень образования
                        <input className={styles.myInput} />
                    </label>
                    <label className={styles.label}>
                        Получаемое образование
                        <input className={styles.myInput} required />
                    </label>
                    <label className={styles.label}>
                        Курс
                        <input className={styles.myInput} />
                    </label>
                    <label className={styles.label}>
                        Опыт работы
                        <input className={styles.myInput} />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>Профессиональные навыки соискателей</p>
                    <textarea className={styles.textArea} ></textarea>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Количество мест по вакансии
                        <input
                            className={styles.myInput}
                            type='number'
                            min='1'
                            required />
                    </label>
                    <label className={styles.label}>
                        Дата публикации
                        <input className={styles.myInput}
                            type='date'
                            value={formattedToday}
                            disabled />
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
                                required />
                        </label>
                        <label
                            className={`${styles.label} ${styles.labelPrice}`}>
                            До
                            <input
                                className={styles.myInput}
                                type="number"
                                required />
                        </label>
                    </div>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>
                        Город/населённый пункт
                        <input className={styles.myInput} />
                    </label>
                    <label className={styles.label}>
                        Район
                        <input className={styles.myInput} />
                    </label>
                    <label className={styles.label}>
                        Адрес
                        <input className={styles.myInput} />
                    </label>
                </div>
                <div className={styles.block}>
                    <p>Расскажите о вакансии в свободной форме</p>
                    <textarea className={styles.textArea}>
                    </textarea>
                </div>
                <div className={styles.ContainerBtn}>
                    <Button
                        title='Сохранить изменения'
                        color="violet"
                        size='large' />
                </div>
            </form >
        </div>
    );
};



