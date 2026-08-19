import { movieCard } from "./movieCard.js";

export const searchMovie = (movieTitle) => {
	if (!movieTitle) {
		alert("Please enter a movie title to search.");
		return;
	}

	console.log(`Searching for: ${movieTitle}`);
	movieCard();
};
