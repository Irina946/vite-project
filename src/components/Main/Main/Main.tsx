import filterTypes from "../../../temp-data/filters";
import {useState, useEffect} from 'react';
import { useFilters } from "../../../hooks/useFilters";
import {Vacancy} from "../VacancyComponent/VacancyComponent";
import './Main.css'
import ReactPaginate from "react-paginate";
import Search from '../../ui-element/Search/Search.tsx'
import ArrowButton from "../../ui-element/Arrow-button/Arrow-button.tsx";
import Modal from "../../ui-element/Modal/Modal.tsx";
import FilterModal from "../Filter-Modal/Filter-Modal.tsx";
import SearchFilters from "../Search-Filter/Search-Filters.tsx";
import VacanciesList from "../Vacancies-List/Vacancies-List.tsx";

type TVacancy = {
    id: number;
    name: string;
    companyName: string,
    level: string,
    received: string,
    course: string,
    work: string,
    skills: string,
    count: string,
    date: string,
    payabilityFrom: string,
    payabilityTo: string,
    city: string,
    district: string,
    address: string,
    aboutVacancy: string,
    aboutCompany: string,
}


export const Main = () => {
    const [data, setData] = useState<Vacancy[]>([]);
    const apiUrl = `http://localhost:3001/vacancies/`;
    useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                setData(jsonData.map((vacancy: TVacancy) => ({
                        id: vacancy.id,
                        title: vacancy.name,
                        employer: vacancy.companyName ? vacancy.companyName : '',
                        features: [
                            vacancy.level === 'Не важно' || !vacancy.level ? 'Без опыта' : vacancy.level,
                            vacancy.work === 'Нет' || !vacancy.level ? 'Стажировка' : 'Официальное трудоустройство'
                        ],
                        location: vacancy.city ? vacancy.city : '',
                        address: vacancy.address ? vacancy.address : '',
                        salaryFrom: vacancy.payabilityFrom ? vacancy.payabilityFrom : '',
                        salaryTo: vacancy.payabilityTo ? vacancy.payabilityTo : '',
                        link: ''
                    })))
            };
            fetchData();
        },
        [apiUrl]);

    const post_vacancies = data
    const filters = filterTypes

    const [searchInput, setSearchInput] = useState('')
    const [sortFilter, setSortFilter] = useState('base')
    const [filterType, setFilterType] = useState('base')
    const [modalVisibility, setModalVisibility] = useState(false)
    const [restrictions, setRestrictions] = useState([])

    const filteredPosts: Vacancy[] = useFilters(post_vacancies, searchInput, filters, filterType, restrictions)

    const filterVacancies = (values: any[]) => {
        setRestrictions(values)
        setFilterType(sortFilter)
        setModalVisibility(false)
    }

    //пагинация
    const itemsPerPage = 3

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset: number = itemOffset + itemsPerPage
        setCurrentItems(filteredPosts.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(filteredPosts.length / itemsPerPage))
    }, [filteredPosts, itemOffset, itemsPerPage])

    const onPageClick = (e) => {
        const newOffset: number = (e.selected * itemsPerPage) % filteredPosts.length
        setItemOffset(newOffset)
    }

    return (
        <div className="main">
            {sortFilter !== 'base' ? (
                <Modal visible={modalVisibility} setVisible={setModalVisibility}>
                    <FilterModal filter={filters.filter(filt => filt.value === sortFilter)[0]}
                                 vacancies={post_vacancies}
                                 filterVacancies={filterVacancies}/>
                </Modal>
            ) : null}

            <Search
                placeholder={'Поиск по позиции или компании'}
                value={searchInput}
                onEnter={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        setSearchInput(e.target.value)
                    }
                }}
            />
            <SearchFilters
                filters={filters}
                onClick={(filter) => {
                    if (filter === 'base') {
                        setSearchInput('')
                        setFilterType('base')
                    }
                    setSortFilter(filter)
                    setModalVisibility(true)
                }}
            />
            <div className='main__content'>
                <VacanciesList post_vacancies={currentItems} />
            </div>
            <ReactPaginate
                pageCount={pageCount}
                previousLabel={<ArrowButton isLeft={true}/>}
                nextLabel={<ArrowButton isLeft={false} />}
                previousClassName="page-turners"
                nextClassName="page-turners"
                onPageChange={onPageClick}
                pageLinkClassName="page-link"
                activeClassName="active"
                containerClassName="links"
            />
        </div>
    );
};

