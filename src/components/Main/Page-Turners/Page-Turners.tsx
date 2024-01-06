import './Page-Turners.css'
import ArrowButton from "../../ui-element/Arrow-button/Arrow-button";

const PageTurners = () => {
    return (
        <div className="page-turners">
            <ArrowButton isLeft={true} />
            <ArrowButton isLeft={false} />
        </div>
    );
};

export default PageTurners;
