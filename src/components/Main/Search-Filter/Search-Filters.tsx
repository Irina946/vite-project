import "./Search-Filters.css"
import {FilterType} from "../../../temp-data/filters";

interface Props {
    filters: FilterType[],
    onClick: (filterTitle: string) => void
}

const SearchFilters = (props: Props) => {

    return (
        <div className="filter-list">
            {props.filters.map((filter) => (
                <button key={filter.value} className="filter-list__item" onClick={e => props.onClick(e.currentTarget.value)} value={filter.value}>
                    {filter.title}
                </button>
            ))}
            <hr></hr>
        </div>
    );
};

export default SearchFilters;
