import {useState} from 'react';
import './Filter-Modal.css'
import Checkbox from "../../ui-element/Checkbox/Checkbox";
import {Vacancy} from "../VacancyComponent/VacancyComponent";
import {FilterType} from "../../../temp-data/filters";

interface Props {
    filter: FilterType;
    vacancies: Vacancy[];
    filterVacancies: (values: string[]) => void
}

const FilterModal = (props: Props) => {
    const [salaryRange, setSalaryRange] = useState({from: '', to: ''})
    const [chosenValue, setChosenValue] = useState([])

    const title = props.filter.modalTitle
    const variants = [...new Set(props.filter.filterVariants!(props.vacancies))]
    variants.sort()

    const onSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (props.filter.value === 'salary') {
            props.filterVacancies([salaryRange.from.length !== 0 ? salaryRange.from : '0',
                salaryRange.to.length !== 0 ? salaryRange.to : variants.pop()])
        } else {
            props.filterVacancies(chosenValue)
        }
    }

    const onResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (props.filter.value === 'salary') {
            setSalaryRange({from: '', to: ''})
        } else {
            setChosenValue([])
        }
        props.filterVacancies([]);
        (document.getElementById("modal-form") as HTMLFormElement).reset()
    }


    return (
        <form className="modal-form" id="modal-form">
            <p className="modal-form__title">{title}</p>
            {props.filter.value === 'salary' ? (
                <div className="modal-form__salary-range">
                    <label className="modal-form__salary-range__label" htmlFor="from-input">От</label>
                    <input className="modal-form__salary-range__input" id="from-input"
                           onChange={e => setSalaryRange({...salaryRange, from: e.target.value})} value={salaryRange.from} />
                    <label className="modal-form__salary-range__label" htmlFor="to-input">До</label>
                    <input className="modal-form__salary-range__input" id="to-input"
                           onChange={e => setSalaryRange({...salaryRange, to: e.target.value})} value={salaryRange.to} />
                </div>
            ) : (
                <div className="modal-form__checkbox">
                    {variants.map(category => (
                        <Checkbox id={category.toString()} value={category} title={category.toString()} onChange={e => {
                            const checkboxTarget: HTMLInputElement = e.target as HTMLInputElement;
                            if (checkboxTarget.checked) {
                                setChosenValue([...chosenValue, checkboxTarget.id])
                            } else {
                                setChosenValue(chosenValue.filter(value => value !== checkboxTarget.id))
                            }
                        }}/>
                    ))}
                </div>
            )}
            <div className="modal-form__btn">
                <button className="modal-form__btn-item modal-btn__reset" onClick={onResetClick}>Сбросить</button>
                <button className="modal-form__btn-item modal-btn__submit" onClick={onSubmitClick}>Применить</button>
            </div>
        </form>
    );
};

export default FilterModal;
