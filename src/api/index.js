import axios from 'axios';
const API = axios.create({
    baseURL : process.env.API_URL,
    headers: { 'Accept': 'application/json' },
    timeout: 5000,
});

API.interceptors.response.use(response => {
    if (response.status != 200) throw `${response.status} ${response.statusText}`
    else return response.data
}, error => {
    console.error(`[Status ${response.status}]:`, { error });
    throw error;
});

export default {
    getData: (page) => API.get(`${endPoints.getPlanets}/?page=${page ? page : 1}`),
    getPlanetByID: (id) => API.get(`${endPoints.getPlanets}/${id}`),
    getPlanetByName: (name) => API.get(`${endPoints.getPlanets}/?search=${name}`),
};
