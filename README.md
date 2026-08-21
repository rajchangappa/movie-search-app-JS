# CineFind

CineFind is a movie search app built with Vite and Tailwind CSS. Search for a movie to see live TMDB suggestions, then select a result to view its poster, genres, language, overview, release date, and rating.

## Demo

Deployment URL: [movie-search-app-2concstgm-whorajks-projects.vercel.app](https://movie-search-app-js-plum.vercel.app/)

## Features

- Search TMDB movies as you type
- Debounced search requests
- Display up to eight search suggestions
- Select a movie from the suggestions
- Show movie poster, title, genres, language, overview, release date, and rating
- Fallback image when a poster is unavailable
- Responsive layout for mobile, tablet, and desktop screens

## Tech Stack

- JavaScript
- Vite
- Tailwind CSS
- TMDB API

## Getting Started

### Prerequisites

- Node.js installed
- A TMDB API key

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd movie-search-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Do not commit `.env` or expose your API key in the repository.

4. Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev          # Start the development server
npm run build        # Create a production build
npm run preview      # Preview the production build locally
npm run format       # Format project files with Prettier
npm run format:check # Check formatting without changing files
```

## Project Structure

```text
src/
  layout.js       # Application layout and search markup
  main.js         # App startup and event listeners
  search.js       # TMDB search requests and suggestions
  movieCard.js    # Selected movie card rendering
  style.css       # Global styles and Tailwind import
```

## Deployment

This project can be deployed to Vercel for free.

Recommended Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

Add this environment variable in the Vercel project settings:

```text
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Deployment URL:

## API

Movie data is provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

This frontend uses a `VITE_` environment variable, which means the API key is included in the browser bundle. For a production application, use a server-side proxy or serverless function to keep the API key private.
