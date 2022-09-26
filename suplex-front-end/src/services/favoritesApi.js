import axios from "axios";

const favoritesApi = axios.create({
  baseURL: "https://rick-and-morty-favorites.herokuapp.com/",
});

export default favoritesApi;
