import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ movie, genres, lastElementRef = null }) => {
  return (
    <div
      ref={lastElementRef}
      key={movie.id}
      className="flex gap-3 max-w-lg lg:w-1/3 xl:w-1/4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-150 rounded-md bg-gray-400 h-300"
      />
      <div className="w-full">
        <NavLink to={`/movie/${movie.id}`}>
          <h2 className="text-gray-700 dark:text-white font-semibold mb-2">
            {movie.title}
          </h2>
        </NavLink>
        <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
          Короткий опис:
        </span>
        <p className="">{movie?.overview.slice(0, 100) + '...'}</p>

        <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
          Категорія:
        </span>
        <p>
          {movie?.adult ? 'Для дорослих 18+' : 'Не має контенту 18+'}
        </p>

        <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
          Жанри:
        </span>
        <p>{movie.genre_ids.map(id => { return genres.find(e => e.id === id).name} ).join(', ')}</p>
      </div>
    </div>
  )
}

export default MovieCard;
