const createLayout = () => {
	return `
		<header class="w-full flex flex-col gap-0 items-start justify-center px-3 md:px-10 lg:px-20 py-4 border-b border-gray-600 border-dotted">
			<a class="text-lg md:text-2xl lg:text-3xl font-bold text-blue-400">CineFind</a>
            <small class="text-gray-500 text-xs">Search for your favorite movies</small>
		</header>

		<main class="w-full px-3 md:px-10 lg:px-20 mt-12 md:mt-12 lg:mt-16">
            <h1 class="capitalize text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 mb-1 md:mb-2 lg:mb-2">Search for movies...</h1>
			<p class="text-gray-500 text-sm md:text-lg lg:text-lg font-medium">Search thousands of movies, explore detailed cast profiles, read reviews, and find where to stream your next favorite film.</p>

			<div class="mt-6 w-full flex flex-row gap-1 relative">
                <input type="text" autocomplete="off" placeholder="Search for a movie..." class="text-gray-300 border border-gray-600 placeholder:text-gray-500 text-sm md:text-base lg:text-base p-3 rounded-xl w-full focus:border-blue-500" id="movie-search"/>

				<article class="absolute top-[100%] z-90 w-full bg-gray-800 py-4 px-4 rounded-lg mt-2 text-gray-400 max-h-80 overflow-y-auto hidden" id="search-results"></article>
            </div>

			<section class="w-full py-10 md:py-14 lg:py-16" id="movie-container"></section>
		</main>
	`;
};

export { createLayout };
