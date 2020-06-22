export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResorce(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResorce('/people/');
        return res.results;
    }

    getPerson(id) {
        return this.getResorce(`/people/${id}`);
    }

    async getAllPlanets() {
        const res = await this.getResorce('/planets/');
        return res.results;
    }

    getPlanet(id) {
        return this.getResorce(`/planets/${id}`);
    }

    async getAllStarships() {
        const res = await this.getResorce('/starships/');
        return res.results;
    }

    getStarship(id) {
        return this.getResorce(`/starShip/${id}`);
    }
}