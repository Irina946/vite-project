interface Vacancy {
    id: number;
    title: string;
    employer: string;
    features: string[];
    location: string;
    salary: string;
    link: string;
}

const vacancies: Vacancy[] = [{
        id: 1,
        title: 'Специалист по сопровождению программных продуктов 1С',
        employer: 'Компания',
        features: ['Стажировка', 'Без оплаты'],
        location: 'Екатеринбург',
        salary: '1000 Р',
        link: ''
    }, {
        id: 2,
        title: 'Аналитик',
        employer: 'Компания',
        features: ['Официальное трудоустройство', 'Частичная занятость', 'Оплачиваемая'],
        location: 'Екатеринбург',
        salary: '20000 Р',
        link: ''
    }, {
        id: 3,
        title: 'Аналитик',
        employer: 'Воу... воу...',
        features: ['Стажировка', 'Полная занятость', 'Оплачиваемая'],
        location: 'Пермь',
        salary: '77000 Р',
        link: ''
    }, {
        id: 4,
        title: 'Разработчик C#',
        employer: 'Компания',
        features: ['Стажировка','Без оплаты'],
        location: 'Екатеринбург',
        salary: '15600 Р',
        link: ''
    }, {
        id: 5,
        title: 'Системный аналитик',
        employer: 'Мошенники',
        features: ['Официальное трудоустройство', 'Частичная занятость', 'Оплачиваемая'],
        location: 'Екатеринбург',
        salary: '20000 Р',
        link: ''
    }, {
        id: 6,
        title: 'Просто хороший человек',
        employer: 'Компания',
        features: ['Стажировка', 'Полная занятость', 'Оплачиваемая'],
        location: 'Санкт-Петербург',
        salary: '99999 Р',
        link: ''
    }
];

export default vacancies
export { Vacancy }
