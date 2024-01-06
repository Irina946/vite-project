import { ReactNode, ReactPortal } from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';

interface ButtonProps {
    size: 'small' | 'extraSmall' | 'medium' | 'large' | undefined | null;
    color: 'violet' | 'blue' | 'borderBlue' | 'borderGray' | 'emptyBlue' | 'emptyRed' | undefined | null;
    title: string | number | boolean | Iterable<ReactNode> | ReactPortal | null | undefined;
}

const Button = (props: ButtonProps) => {
    const sizeClass = props.size === 'small' ? styles.small :
        props.size === 'extraSmall' ? styles.extraSmall :
            props.size === 'medium' ? styles.medium :
                props.size === 'large' ? styles.large : '';
    const colorClass = props.color === 'violet' ? styles.violet :
        props.color === 'blue' ? styles.blue :
            props.color === 'borderBlue' ? styles.borderBlue :
                props.color === 'borderGray' ? styles.borderGray :
                    props.color === 'emptyBlue' ? styles.emptyBlue :
                        props.color === 'emptyRed' ? styles.emptyRed : '';

    return (
        <button className={clsx(styles.myButton, sizeClass, colorClass)}>
            {props.title}
        </button>
    );
}

export default Button;