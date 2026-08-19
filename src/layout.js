const createLayout = () => {
	return `
		<header class="w-full flex flex-col gap-0 items-start justify-center px-6 md:px-10 lg:px-20 py-4">
			<a class="text-2xl md:text-3xl lg:text-3xl font-bold text-red-700">CineFind</a>
            <small class="text-gray-400 text-xs">Search for your favorite movies</small>
		</header>

		<main class="px-6 md:px-10 lg:px-20 mt-12 md:mt-10 lg:mt-10">
            <h1 class="capitalize text-2xl md:text-2xl lg:text-4xl font-bold text-gray-400 mb-2">our Ultimate Backstage Pass to Cinema</h1>
			<p class="text-gray-500 text-base md:text-lg lg:text-lg font-medium">Search thousands of movies, explore detailed cast profiles, read reviews, and find where to stream your next favorite film.</p>

			<form class="mt-8 w-full flex flex-row gap-1" id="movie-search-form">
                <input type="text" autocomplete="off" placeholder="Search for a movie..." class="text-gray-300 border-2 border-gray-600 placeholder:text-gray-500 text-sm md:text-base lg:text-base p-3 rounded-xl w-full focus:border-red-500" id="movie-search"/>
                <button class="bg-red-700 text-gray-100 text-base py-3 px-6 rounded-xl hover:bg-red-600" id="search-button">Search</button>
            </form>
		</main>
	`;
};

export { createLayout };
