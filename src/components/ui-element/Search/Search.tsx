import styles from './Search.module.css'
import React from "react";

interface Props {
    placeholder: string,
    onEnter: (e: React.KeyboardEvent<HTMLElement>) => void
}

const Search = (props: Props) => {
    return (
        <form className={styles.searchForm}>
                <input className={styles.searchForm__input} type="text"
                       placeholder={props.placeholder} onKeyDown={props.onEnter}></input>
        </form>
    );
};

export default Search;
