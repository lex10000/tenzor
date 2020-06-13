class Dataset {
    constructor(host){
        if(!host) {
            return 'не передан хост для подключения';
        }
        this.host = host;
    }

    /**
     * Создает запрос Fetch, и возвращает результаты в json формате.
     * @param {string} query тип персоны (препод\студент)
     * @param {object} options опции для fetch (метод, заголовки, etc..)
     * @param {object} params параметры для запроса (подставляются в url запроса)
     * @returns {Promise<any>}
     */
    query(query, options, params) {
        const url = new URL(this.host);
        let key;
        url.pathname += query;
        for (key in params) {
            url.searchParams.set(key, params[key]);
        }
        return fetch(url, options)
            .then(response => response.json()
            );
    }

    getPerson(type, id) {
        return this.query(`${type}/${id}`, {
            method: "GET",
        });
    }

    /**
     * Получить лимитированный список преподов\студентов с параметрами page и limit (для пагинации)
     * @param {string} type тип персоны (препод\студент)
     * @param {int} page страница (номер), с которого загружать персону
     * @param {int} limit количество персон, загружаемых за раз
     * @returns {Promise<*>}
     */
    getLimitPersons(type, page, limit) {
        return this.query(type, {
                method: "GET"
            },
            {
                "_page": page,
                "_limit": limit
            }
        )
    }

    /**
     * Получить всех студентов\преподов
     * @param {string} type тип персоны (препод\студент)
     * @returns {Promise<*>}
     */
    getAllPersons(type) {
        return this.query(type, {
            method: "GET",
        });
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        }
    }

    render() {
        return <header>
            <div className="logo">
                <img src="../images/logo.jpg" alt="logo"/>
                <span>{this.state.title}</span>
            </div>
            <p>{this.state.description}</p>
        </header>
    }
}

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.options['id'],
            fullName: this.props.options['fullName'] || ' ',
            birthDate: new Date(this.props.options['birthDate']) || new Date(),
            gender: this.props.options['gender'] || ' ',
            university: this.props.options['university'] || 'Не указан университет',
            photoUrl: this.props.options['photoUrl'] || 'Нет фото',
            person_type: this.props.options['person_type'],
            // age: this.age
        }

    }

    //
    get birthDateStr() {
        return this.state['birthDate'].toLocaleString('ru', {month: 'long'}) + ', ' + this.state['birthDate'].getDate();
    };

    get age() {
        return new Date().getFullYear() - this.state['birthDate'].getFullYear();
    };

    get image_alt() {
        return this.state['photoUrl'].substring(this.state['photoUrl'].lastIndexOf('/') + 1, this.state['photoUrl'].length);
    }
}

class Teacher extends Person {
    constructor(props) {
        super(props);
        this.state['subject'] = this.props.options['subject'] || '';
        this.state['degree'] = this.props.options['degree'] || '';
    }

    render() {
        return <div className="card" data-key={this.state.id}>
            <img className="card__image" src={this.state.photoUrl}/>
            <div className="card__surname">{this.state.fullName}</div>
            <div className="card__subject">{this.state.subject}</div>
            <div className="card__degree">{this.state.degree}</div>
        </div>;

    }
}

class Student extends Person {

    constructor(props) {
        super(props);
        this.state.course = this.props.options.course;
    }


    render() {
        return <div className="card" data-key={this.state.id}>
            <img className="card__image" src={this.state.photoUrl}/>
            <div className="card__surname">{this.state.fullName}</div>
            <div className="card__university">{this.state.course} курс</div>
        </div>;
    }
}

class Popup extends React.Component {

    constructor(props) {
        super(props);
    }

    closePopup(event) {
        event.target.parentNode.remove();
    }

    render() {
        if (this.props.openedPopup == null) return <div/>;
        return (
            <div className="popup_card">
                <div className="popup-card__close" onClick={this.closePopup}/>
                <img className="popup-card__image" src={this.props.openedPopup.photoUrl}/>
                <div className="popup-card__surname">{this.props.openedPopup.fullName}</div>
                <div className="popup-card__university">{this.props.openedPopup.course} курс</div>
                <div className="popup-card__birthday">Дата рождения : лет</div>
            </div>
        );
    }
}

class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: this.props.students,
            popup: null,
        };
    }

    openPopup(event) {
        if (!event.target.closest('.card')) return;
        const currentStudent = event.target.closest('.card');
        const id = currentStudent.getAttribute('data-key');

        this.setState({
            popup: this.state.students[id - 1],
        });
    }

    render() {
        let studentsArr = [];
        let key;
        let count = 0;
        for (key in this.state.students) {
            studentsArr.push(<Student options={this.state.students[key]} key={count}/>);
            count++;
        }
        return (
            <div onClick={this.openPopup.bind(this)}>
                {studentsArr}
                <Popup openedPopup={this.state.popup}/>
            </div>
        );
    }
}

//Отрисовка хедера
ReactDOM.render(
    <Header title={'Online school Tenzor'}
            description={'some text description about school'}/>, document.querySelector('#header', 'afterBegin')
);

//подключаемся к серверу, скачиваем данные студентов и преподов, и создаем два компонента: students и teachers
const dataset = new Dataset('http://localhost:8080/api/');
let studentArray = [];

const students = dataset.getAllPersons('students')
    .then((result) => {
        studentArray = result;
        ReactDOM.render(<Students students={studentArray}/>, document.querySelector('.students'));
    })

//запрашиваем всех преподов, но с параметрами, потом проходимся по каждому, и монитруем на страницу

const page = 1;
const limit = 1;
let teachersArray = [];

const teachers = dataset.getLimitPersons('teachers', page, limit)
    .then((result) => {
        teachersArray = result;
        ReactDOM.render(<Students students={teachersArray}/>, document.querySelector('.teachers'));
    })




