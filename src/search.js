const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovie = async (movie) => {
	const searchResults = document.querySelector("#search-results");

	if (!searchResults || !movie) {
		searchResults?.classList.add("hidden");
		return;
	}

	const params = new URLSearchParams({
		api_key: API_KEY,
		query: movie,
		language: "en-US",
	});
	const URL = `https://api.themoviedb.org/3/search/movie?${params}`;

	try {
		const response = await fetch(URL);

		if (!response.ok) {
			throw new Error(`TMDB request failed: ${response.status}`);
		}

		const { results } = await response.json();

		searchResults.innerHTML = results.length
			? results
					.slice(0, 8)
					.map(
						(movieResult) => `
							<div data-movie-id="${movieResult.id}" class="movie-result flex flex-row gap-4 items-center cursor-pointer w-full mb-6">

								<img src="${movieResult.poster_path ? `https://image.tmdb.org/t/p/w92${movieResult.poster_path}` : "/notfound.png"}" alt="${movieResult.title} poster" class="w-14 h-14 object-cover rounded-lg bg-gray-700" />

								<div class="flex flex-col gap-1">
									<span class="text-sm font-semibold md:text-base lg:text-base">${movieResult.title}</span>
									<p class="text-xs">${movieResult.release_date?.slice(0, 4) ?? "Year unavailable"} · ${movieResult.original_language?.toUpperCase() ?? "Unknown language"}</p>
								</div>
							</div>
						`,
					)
					.join("")
			: `<p>No movies found.</p>`;

		searchResults.classList.remove("hidden");
		return results;
	} catch (error) {
		console.error(error);
		searchResults.innerHTML = `<p>Unable to load movie results.</p>`;
		searchResults.classList.remove("hidden");
		return [];
	}
};
