import {useMemo} from "react";
import {Vacancy} from "../components/Main/VacancyComponent/VacancyComponent";
import {FilterType} from "../temp-data/filters";

export const useSearch = (data: Vacancy[], search: string) => {
    return useMemo(() => {
        return data.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.employer.toLowerCase().includes(search.toLowerCase()))
    }, [search, data])
}

export const useFilters = (data: Vacancy[], search: string, allFilters: FilterType[], filterTitle: string, restrictions: any[]) => {
    const filteredData = useSearch(data, search)

    return useMemo(() => {
        if (filterTitle && filterTitle !== 'base') {
            return allFilters.filter(filter => filter.value === filterTitle)[0].filteredVacancies(filteredData, restrictions)
        }
        return filteredData
    }, [filterTitle, restrictions, filteredData]);
}
