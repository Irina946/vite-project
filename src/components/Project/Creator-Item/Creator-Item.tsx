import {DecorType, Image, ImageType} from "../../ui-element/Image/Image";

interface Props {
    elementClass: string,
    image: ImageType,
    text: DecorType
}

const CreatorItem = (props: Props) => {
    console.log(props.text.path)
    return (
        <div className={props.elementClass}>
            <Image className={props.image.className} src={props.image.src} alt={props.image.alt}/>
            <svg className={props.text.className} width={props.text.width} height={props.text.height} viewBox={props.text.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                {props.text.path.map(path => path)}
            </svg>
        </div>
    );
};

export default CreatorItem;
