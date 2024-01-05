import {Vacancy} from "./vacancies";

interface FilterType {
    title: string,
    value: string,
    filteredVacancies: (vacancies: Vacancy[], restriction: string[]) => Vacancy[],
    modalTitle?: string,
    filterVariants?: (vacancies: Vacancy[]) => string[] | number[]
}

const filterTypes: FilterType[] = [{
    title: 'Без фильтра',
    value: 'base',
    filteredVacancies: (vacancies) => vacancies
}, {
    title: 'Оплачиваемость практики/стажировки',
    value: 'salary',
    modalTitle: 'Выбор диапазона зарплат',
    filteredVacancies: (vacancies,  restriction) => vacancies.filter(vacancy => restriction.length !== 0 ?
        parseInt(vacancy.salary.split(' ')[0]) <= parseInt(restriction[1]) &&
        parseInt(vacancy.salary.split(' ')[0]) >= parseInt(restriction[0]) : true
    ),
    filterVariants: (vacancies) => vacancies.map(vacancy => parseInt(vacancy.salary.split(' ')[0]))
}, {
    title: 'Город',
    value: 'city',
    modalTitle: 'Выбор города',
    filteredVacancies: (vacancies, restriction) => vacancies.filter(vacancy => restriction.length !== 0  ?
        restriction.includes(vacancy.location) : true),
    filterVariants: (vacancies) => vacancies.map(vacancy => vacancy.location)
}, {
    title: 'Теги',
    value: 'tags',
    modalTitle: 'Выбор тегов',
    filteredVacancies: (vacancies, restriction) => vacancies.filter(vacancy => restriction.length !== 0 ?
        restriction.map(restr => vacancy.features.includes(restr)).includes(true) : true),
    filterVariants: (vacancies) => ['Стажировка', 'Официальное трудоустройство', 'Полная занятость', 'Частичная занятость']
}]

export default filterTypes
export {FilterType}
