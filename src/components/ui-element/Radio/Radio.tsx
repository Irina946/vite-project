import styles from './radiobutton.module.css';
import clsx from "clsx";

interface Props {
    color?: 'violet' | '',
    size?: 'small' | '',
    id: string,
    name: string,
    value:string,
    title: string,
}

const RadioButton = (props: Props) => {
    const colorClass = props.color === 'violet' ? styles.violet : '';
    const sizeClass = props.size === 'small' ? styles.small : '';
    return (
        <div>
            <input id={props.id} type="radio" name={props.name} value={props.value} className={clsx(styles.customRadio, colorClass, sizeClass)} />
            <label htmlFor={props.id}>{props.title}</label>
        </div>
    )
}

export default RadioButton;
