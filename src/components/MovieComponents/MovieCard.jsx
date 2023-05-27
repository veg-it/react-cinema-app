/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { addMovieToWatchlist } from '../../api/index';

const MovieCard = ({ movie, genres, lastElementRef = null, onClick }) => {
  const [watchl, setWatchl] = useState()
  useEffect(() => {
    const id = localStorage.getItem('watchlist_id');
    setWatchl(id)
  }, [])
  const handleAddToWatchlist = async () => {

    try {
      const response = await addMovieToWatchlist(watchl, movie.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      ref={lastElementRef}
      key={movie.id}
      className="flex gap-3 w-96 md:1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 flex-grow">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="md:w-150 rounded-md bg-gray-400 h-300"
      />
      <div className="flex-1">
        <NavLink to={`/movie/${movie.id}`}>
          <h2 className="text-gray-700 dark:text-white font-semibold mb-2">
            {movie.title}
          </h2>
        </NavLink>
        <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
          Короткий опис:
        </span>
        <div className="max-w-xs">{movie?.overview.slice(0, 100) + '...'}</div>

        <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
          Категорія:
        </span>
        <p>
          {movie?.adult ? 'Для дорослих 18+' : 'Не має контенту 18+'}
        </p>

        <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
          Жанри:
        </span>
        {movie.genre_ids && (
          <p>{movie.genre_ids.map(id => { return genres?.find(e => e.id === id).name }).join(', ')}</p>
        )}
        {movie.genres && (
          <p>{movie?.genres.map(genre => genre.name).join(', ')}</p>
        )}
        {onClick ? (<button
          onClick={onClick}
          className="my-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Видалити з плейлисту
        </button>) : (
          watchl ? (<button onClick={handleAddToWatchlist} className="my-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
            Додати в плейлист
          </button>) : (<p className='border border-red-500 max-w-fit p-1 rounded-sm text-md mt-3 text-red-400'>Створіть список, щоб додати в нього фільм</p>)
        )}


      </div>
    </div>
  )
}

export default MovieCard;
