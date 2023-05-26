import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../../api/movieDB'
import { useEffect, useState } from 'react'

const MoviePage = () => {
  const { aID } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async () => {
    const response = await getMovieDetails(aID)
    console.log(response)
    setMovie(response)
  }
  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 transition-all pb-4 pt-16">
      <div className="md:flex md:gap-3">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt={movie?.title}
          className=" md:w-1/2 rounded-md w-full"
        />
        {/* <h1>{movie.original_title}</h1> */}
        <div className='mt-3'>
          <div className="flex gap-3 mb-3">
            <h1 className="text-xl w-fit">{movie?.title}</h1>
            <span className="bg-indigo-50 w-fit p-2 text-indigo-500 rounded-md text-xs">
              {movie?.release_date}
            </span>
          </div>
          <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
            Опис фільму:
          </span>
          <p>{movie?.overview}</p>

          <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
            Категорія:
          </span>
          <p>{movie?.adult ? 'Для дорослих' : 'Підходить для дітей'}</p>

          <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
            Жанри:
          </span>
          <p>{movie?.adult}</p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
