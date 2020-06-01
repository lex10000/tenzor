class Dataset {

    constructor(host) {
        this.host = host;
    }

    query(query, options, params) {
        const url = new URL(this.host);
        url.pathname += query;
        for (const key in params) {
            url.searchParams.set(key, params[key]);
        }
        return fetch(url, options)
            .then(response => response.json()
        );
    }

    getPerson(type, id) {
        return this.query(`${type}/${id}`, {
            method : "GET",
        });
    }

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

    getAllPersons(type) {
        return this.query(type, {
            method: "GET",
        });
    }
}

export default Dataset;