import style from './Modal.module.css'

interface Props {
    children:  JSX.Element,
    visible: boolean,
    setVisible: (arg: boolean) => void
}

const Modal = (props: Props) => {
    const rootClasses = [style.modal]

    if (props.visible) {
        rootClasses.push(style.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => props.setVisible(false)}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
