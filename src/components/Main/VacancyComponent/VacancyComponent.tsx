import "./VacancyComponent.css";

export interface Vacancy {
    id: number;
    title: string;
    employer: string;
    features: string[];
    location: string;
    salaryFrom: string;
    salaryTo: string;
    address: string;
    link: string;
}

interface Props {
    vacancy: Vacancy
}

const VacancyComponent = (props: Props) => {
    return (
        <div className="vacancy">
            <div className="vacancy-main">
                <div className="vacancy-main__title">
                    <p className="vacancy-main__title-name">{props.vacancy.title}</p>
                    <p className="vacancy-main__title-employer">{props.vacancy.employer}</p>
                </div>
                <div className="vacancy-main__features">
                    {props.vacancy.features.map((feature) => (
                        <div key={feature} className="vacancy-main__features-item">{feature}</div>
                    ))}
                </div>
                <div className="vacancy-main__location">
                    <svg className="vacancy-main__location-sign" width="14" height="17" viewBox="0 0 14 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.85697 1.84803C5.5364 1.56325 6.26458 1.41668 7 1.41668C7.73542 1.41668 8.46363 1.56325 9.14305 1.84803C9.82247 2.13281 10.4398 2.55022 10.9598 3.07642C11.4798 3.60262 11.8923 4.22731 12.1737 4.91483C12.4552 5.60235 12.6 6.33922 12.6 7.08338C12.6 9.27789 11.189 11.4072 9.6418 13.0598C8.88258 13.8708 8.12091 14.5348 7.54831 14.9961C7.33523 15.1679 7.1491 15.3109 7 15.4224C6.8509 15.3109 6.66477 15.1679 6.45169 14.9961C5.87909 14.5348 5.11743 13.8708 4.35817 13.0598C2.81102 11.4072 1.4 9.27789 1.4 7.08338C1.4 6.33922 1.54485 5.60235 1.82627 4.91483C2.1077 4.22731 2.5202 3.60262 3.04021 3.07642C3.56021 2.55022 4.17755 2.13281 4.85697 1.84803ZM6.61136 16.8809C6.6115 16.8811 6.61171 16.8812 7 16.2918L7.38829 16.8812C7.15316 17.0398 6.84649 17.0395 6.61136 16.8809ZM6.61136 16.8809L7 16.2918C7.38829 16.8812 7.38899 16.8807 7.3892 16.8806L7.39067 16.8796L7.39536 16.8764L7.41139 16.8654C7.42504 16.856 7.44443 16.8426 7.46928 16.8252C7.51905 16.7903 7.59045 16.7395 7.68054 16.6737C7.86065 16.5421 8.11552 16.35 8.42044 16.1044C9.02909 15.6139 9.84242 14.9054 10.6582 14.0341C12.261 12.3221 14 9.84725 14 7.08338C14 6.15318 13.8189 5.23209 13.4672 4.37269C13.1153 3.5133 12.5998 2.73243 11.9498 2.07467C11.2998 1.41692 10.5281 0.895163 9.67876 0.539191C8.82952 0.183217 7.91924 0 7 0C6.08076 0 5.17049 0.183217 4.32122 0.539191C3.47194 0.895163 2.70026 1.41692 2.05025 2.07467C1.40024 2.73243 0.884625 3.5133 0.53284 4.37269C0.181062 5.23209 0 6.15318 0 7.08338C0 9.84725 1.73898 12.3221 3.34184 14.0341C4.15757 14.9054 4.97093 15.6139 5.57957 16.1044C5.88448 16.35 6.13935 16.5421 6.31946 16.6737C6.40955 16.7395 6.48095 16.7903 6.53072 16.8252C6.55557 16.8426 6.57496 16.856 6.58861 16.8654L6.60464 16.8764L6.60933 16.8796L6.61136 16.8809ZM7 4.25003C6.25737 4.25003 5.5452 4.54855 5.0201 5.0799C4.495 5.61126 4.2 6.33193 4.2 7.08338C4.2 7.83486 4.495 8.55552 5.0201 9.08685C5.5452 9.61825 6.25737 9.91674 7 9.91674C7.74263 9.91674 8.45481 9.61825 8.97988 9.08685C9.50502 8.55552 9.8 7.83486 9.8 7.08338C9.8 6.33193 9.50502 5.61126 8.97988 5.0799C8.45481 4.54855 7.74263 4.25003 7 4.25003ZM7.98994 8.08512C7.72737 8.35081 7.37128 8.50006 7 8.50006C6.62872 8.50006 6.27263 8.35081 6.01006 8.08512C5.74749 7.81942 5.6 7.45909 5.6 7.08338C5.6 6.70766 5.74749 6.34732 6.01006 6.08165C6.27263 5.81596 6.62872 5.66671 7 5.66671C7.37128 5.66671 7.72737 5.81596 7.98994 6.08165C8.25251 6.34732 8.4 6.70766 8.4 7.08338C8.4 7.45909 8.25251 7.81942 7.98994 8.08512Z"
                              fill="#808080"/>
                    </svg>
                    <span className="vacancy-main__location-name">{props.vacancy.address ?
                        props.vacancy.location + ', ' + props.vacancy.address :
                        props.vacancy.location
                    }</span>
                </div>
            </div>
            <div className="vacancy-side">
                <span className="vacancy-side__salary">{props.vacancy.salaryFrom ?
                    props.vacancy.salaryTo ? props.vacancy.salaryFrom + ' - ' + props.vacancy.salaryTo + ' Р' : 'От ' + props.vacancy.salaryFrom + ' Р' :
                    props.vacancy.salaryTo ? 'До ' + props.vacancy.salaryTo + ' Р' : 'Без ограничений'}</span>
                <a className="vacancy-side__respond-btn btn-reset btn__blue"
                   href={props.vacancy.link}>Подробнее</a>
            </div>
        </div>
    );
};

export default VacancyComponent;
