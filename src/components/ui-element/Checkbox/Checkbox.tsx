import styles from "./checkbox.module.css";
import clsx from "clsx";
import * as React from "react";

interface Props {
    color?: string,
    id: string,
    name?: string,
    title: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Checkbox = (props: Props) => {
    const colorClass = props.color === 'red' ? styles.violet : '';

    return (
        <div>
            <input id={props.id} type="checkbox" name={props.name} className={clsx(styles.customCheckbox, colorClass)} onChange={props.onChange}/>
            <label className={styles.label} htmlFor={props.id}>{props.title}</label>
        </div>
    )
}

export default Checkbox;

