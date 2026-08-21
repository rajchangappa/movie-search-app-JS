const genreNames = {
	28: "Action",
	12: "Adventure",
	16: "Animation",
	35: "Comedy",
	80: "Crime",
	99: "Documentary",
	18: "Drama",
	10751: "Family",
	14: "Fantasy",
	36: "History",
	27: "Horror",
	10402: "Music",
	9648: "Mystery",
	10749: "Romance",
	878: "Science Fiction",
	10770: "TV Movie",
	53: "Thriller",
	10752: "War",
	37: "Western",
};

export const movieCard = (movie) => {
	const movieContainer = document.getElementById("movie-container");
	const genres = movie.genre_ids?.map((genreId) => genreNames[genreId]).filter(Boolean);

	const formatDate = (date) => {
		if (!date) return "Unknown";

		const [year, month, day] = date.split("-");
		return `${day}-${month}-${year}`;
	};

	movieContainer.innerHTML = `
		<div class="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10">
					<div class="relative w-full max-h-[480px] h-fit md:max-h-none md:flex-none lg:max-h-none lg:flex-none lg:w-[480px] overflow-hidden rounded-xl bg-gray-900 shadow-2xl shadow-black/50">
						<img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/notfound.png"}" alt="${movie.title} poster" class="relative z-0 w-full h-full object-cover rounded-xl bg-gray-800 opacity-95" />
						<div class="pointer-events-none absolute inset-0 z-10 rounded-xl bg-gray-900/10"></div>
					</div>

					<div class="flex flex-col">
						<h4 class="text-gray-300 font-bold text-xl md:text-xl lg:text-2xl mb-2 lg:mb-3">${movie.title}</h4>
						<div class="flex flex-row gap-2 mb-4 lg:mb-6">
							${genres?.length ? genres.map((genre) => `<small class="flex items-center justify-center text-xs font-semibold text-gray-400 bg-gray-800 rounded-md w-fit py-1 px-2">${genre}</small>`).join("") : '<small class="text-xs text-gray-500">Genre unavailable</small>'}
							
							<small class="flex items-center justify-center text-xs font-semibold text-gray-400 bg-blue-800 rounded-md w-fit max-w-[120px] py-1 px-2">${movie.original_language?.toUpperCase() ?? "Unknown language"}</small>

						</div>
						<p class="text-gray-400 font-normal text-sm md:text-base lg:text-lg">${movie.overview || "No overview available."}</p>

						<div class="text-gray-500 text-xs md:text-base lg:text-base mt-6 font-medium flex flex-row gap-10">
							<span>Release: ${formatDate(movie.release_date)}</span>
							<span>Rating: ${movie.vote_average?.toFixed(1) ?? "Unknown"} (${movie.vote_count ?? 0} votes)</span>
						</div>
					</div>
		</div>
	`;
};
