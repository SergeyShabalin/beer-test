import axios from "axios";

export const Api =axios.create({
    baseURL: 'https://api.punkapi.com/v2/',
})