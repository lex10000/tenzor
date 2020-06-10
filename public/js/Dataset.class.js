class Dataset {

    constructor(host) {
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