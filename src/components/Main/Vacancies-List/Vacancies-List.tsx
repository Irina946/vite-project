import VacancyComponent from "../VacancyComponent/VacancyComponent"
import "./Vacancies-List.css"
import EmptyResult from "../Empty-Result/Empty-Result.tsx";
import {Vacancy} from "../../../temp-data/vacancies";

interface Props {
    post_vacancies: Vacancy[]
}

const VacanciesList = (props: Props) => {
    if (!props.post_vacancies || props.post_vacancies.length === 0) {
        return <EmptyResult />
    }

    return (
        <div className="vacancies">
            {props.post_vacancies?.map(post_vacancy =>
                <VacancyComponent vacancy={post_vacancy} key={post_vacancy.id}/>
            )}
        </div>
    );
};

export default VacanciesList;
