import "./style.css";
import { createLayout } from "./layout.js";
import { searchMovie } from "./search.js";
import { movieCard } from "./movieCard.js";

const app = document.querySelector("#app");
app.innerHTML = createLayout();

const searchInput = document.querySelector("#movie-search");
const searchResults = document.querySelector("#search-results");
let movies = [];
let searchTimeout;

searchInput.addEventListener("keyup", (e) => {
	clearTimeout(searchTimeout);
	searchTimeout = setTimeout(() => {
		searchMovie(e.target.value.trim()).then((results) => {
			movies = results;
		});
	}, 300);
});

searchResults.addEventListener("click", (event) => {
	const result = event.target.closest(".movie-result");

	if (!result) {
		return;
	}

	const movieId = result.dataset.movieId;

	const selectedMovie = movies.find((movie) => movie.id === Number(movieId));

	if (!selectedMovie) {
		return;
	}

	movieCard(selectedMovie);
	searchInput.value = "";
	searchResults.classList.add("hidden");
});
