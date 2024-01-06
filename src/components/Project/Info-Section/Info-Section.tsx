import clsx from "clsx";
import {DecorType} from "../../ui-element/Image/Image";

export type InfoType = {
    className: string,
    textInfo: string[]
}

export type ButtonInfoType = {
    id: string,
    title: string
}

interface Props {
    sectionClass: string,
    title: InfoType,
    decoration: DecorType[],
    subInfo?: InfoType,
    info: InfoType,
    button: ButtonInfoType
}

const InfoSection = (props: Props) => {

    return (
        <div className={props.sectionClass}>
            <h1 className={clsx(props.title.className, "section-title")}>
                {props.title.textInfo.map(part => (
                    <span>{part}<br /></span>
                    ))}
            </h1>
            {props.decoration.map(decor => (
                <svg className={decor.className} width={decor.width} height={decor.height} viewBox={decor.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                    {decor.path.map(path => path)}
                </svg>
            ))}
            {props.subInfo ? (
                <h3 className={clsx(props.subInfo.className, "main-description")}>
                    {props.subInfo.textInfo.map(part => (
                        <span>{part}<br /></span>
                    ))}
                </h3>
            ) : null}
            <p className={clsx(props.info.className, "section-description")}>
                {props.info.textInfo.map(part => (
                    <span>{part}<br /></span>
                ))}
            </p>
            <a id={props.button.id} color="blue" href="">{props.button.title}</a>
        </div>
    );
};

export default InfoSection;
