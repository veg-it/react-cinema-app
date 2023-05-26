export const apiLink = 'http://localhost:5000/api';

// Отримання списку всіх подій
export async function getEvents() {
    const response = await fetch(`${apiLink}/events`);
    return response.json();
}

// Отримання списку всіх кінотеатрів
export async function getCinemas() {
    const response = await fetch(`${apiLink}/cinemas`);
    return response.json();
}

// Отримання списку всіх акторів
export async function getActors() {
    const response = await fetch(`${apiLink}/actors`);
    return response.json();
}

// Отримання списку всіх жанрів
export async function getGenres() {
    const response = await fetch(`${apiLink}/genres`);
    return response.json();
}

// Отримання списку всіх фільмів
export async function getMovies() {
    const response = await fetch(`${apiLink}/movies`);
    return response.json();
}

// Отримання списку всіх списків перегляду
export async function getWatchlists() {
    const response = await fetch(`${apiLink}/watchlists`);
    return response.json();
}

// Додавання нового списку перегляду
export async function addWatchlist(watchlist) {
    const response = await fetch(`${apiLink}/watchlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(watchlist)
    });
    return response.json();
}

// Отримання списку перегляду за ID
export async function getWatchlist(id) {
    const response = await fetch(`${apiLink}/watchlists/${id}`);
    return response.json();
}

// Пошук фільмів за актором
export async function getMoviesByActor(actor_id) {
    const response = await fetch(`${apiLink}/movies/actor/${actor_id}`);
    return response.json();
}

// Пошук фільмів за жанром
export async function getMoviesByGenre(genre_id) {
    const response = await fetch(`${apiLink}/movies/genre/${genre_id}`);
    return response.json();
}

// Пошук фільмів за назвою
export async function getMoviesByTitle(title) {
    const response = await fetch(`${apiLink}/movies/title/${title}`);
    return response.json();
}

// Додавання ID фільму до списку перегляду
export async function addMovieToWatchlist(id, movie_id) {
    const response = await fetch(`${apiLink}/watchlists/${id}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id })
    });
    return response.json();
}

// Видалення ID фільму зі списку перегляду
export async function removeMovieFromWatchlist(id, movie_id) {
    const response = await fetch(`${apiLink}/watchlists/${id}/movies`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id })
    });
    return response.json();
}
