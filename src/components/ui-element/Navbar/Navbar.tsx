import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <ul className={styles.containerNavbar}>
            <div className={styles.flex}>
                <li className={styles.li1}>Студентам</li>
                <li className={styles.li1}>Компаниям</li>
            </div>
            <div className={styles.flex}>
                <li className={styles.li2}>
                    <Link to='/project' className={styles.link}>
                        О проекте
                    </Link>
                </li>
                <li className={styles.li2}>
                    <Link to='/' className={styles.link}>
                        Главная страница
                    </Link></li>
                <li className={styles.li2}>
                    <Link to='/vacancy' className={styles.link}>
                        Мои вакансии
                    </Link></li>
                <li className={styles.li2}>
                    <Link to='/lk' className={styles.linkSvg}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" fill="#242582" />
                            <path d="M25 24.2227V26H11V24.2227C10.9951 23.2911 11.3614 22.3925 12.0248 21.708C12.6814 21.0413 13.5718 20.6667 14.5 20.6667H21.5C21.9655 20.6693 22.4254 20.7631 22.8513 20.9422C23.2771 21.1214 23.6596 21.382 23.9752 21.708C24.6386 22.3925 25.0049 23.2911 25 24.2227Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.4749 15.6904C19.8185 16.3155 18.9283 16.6667 18 16.6667C17.0717 16.6667 16.1815 16.3155 15.5251 15.6904C14.8688 15.0652 14.5 14.2174 14.5 13.3333C14.5 12.4493 14.8688 11.6014 15.5251 10.9763C16.1815 10.3512 17.0717 10 18 10C18.9283 10 19.8185 10.3512 20.4749 10.9763C21.1312 11.6014 21.5 12.4493 21.5 13.3333C21.5 14.2174 21.1312 15.0652 20.4749 15.6904Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
            </div>
        </ul>
    )
}