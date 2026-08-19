import "./style.css";
import { createLayout } from "./layout.js";
import { searchMovie } from "./search.js";

const app = document.querySelector("#app");
app.innerHTML = createLayout();

const searchForm = document.querySelector("#movie-search-form");
const searchInput = document.querySelector("#movie-search");

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
    const searchInput = document.getElementById('movie-search').value.trim();
	searchMovie(searchInput);
});
