import {DecorType, Image, ImageType} from "../../ui-element/Image/Image";

interface Props {
    sectionClass: string,
    images: ImageType[],
    decoration?: DecorType[]
}

const ImageSection = (props: Props) => {
    return (
        <div className={props.sectionClass}>
            {props.decoration ? (
                props.decoration.map(decor => (
                    <svg className={decor.className} width={decor.width} height={decor.height} viewBox={decor.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                        {decor.path.map(path => path)}
                    </svg>
                ))
            ) : null}
            {props.images.map(image => (
                <div className={props.sectionClass === "project-start__decor" ? "project-start__decor-background" : "project-start__decor-no-background"}>
                        <Image className={image.className} alt={image.alt} src={image.src} />
                </div>
            ))}
        </div>
    );
};

export default ImageSection;
