import pictures from "../../../temp-data/pictures";

export type ImageType = {
    className: string,
    alt: string,
    src: pictures
}

export type DecorType = {
    className: string,
    width: string,
    height: string,
    viewBox: string,
    path: JSX.Element[]
}

export const Image = (props: ImageType) => {
    return (
        <img className={props.className} alt={props.alt} src={props.src} />
    );
}
