import React, { useEffect, useState } from 'react'
import { getTopMovies, getGenres } from '../../api/movieDB'
import TitleText from '../../components/Main/TitleText'
import MovieCard from '../../components/MovieComponents/MovieCard'

const TopPage = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres()
      setGenres(data)
    }
    fetchGenres()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      let data = await getTopMovies()
      data = data.slice(0, 10)
      setMovies(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <TitleText title={'Топ 10 фільмів'} haveSearch={false} inline={false} />
      <div className="px-4 md:px-8 lg:px-8 xl:px-16 transition-all pb-4 md:pt-8">
        <div className="mt-4 text-gray-400 text-xs space-y-3 gap-3 md:gap-2">
          {movies.map((movie, index) => (
            <div key={index} className="mb-11 md:flex justify-between items-center">
              <div className='flex items-center gap-10'>
                <h1 className='text-2xl lg:text-5xl md:w-3 lg:w-9 text-center'>{index + 1} </h1>
                <MovieCard movie={movie} genres={genres} />
              </div>
              <p className='text-right text-xl lg:text-3xl'>{movie.vote_average}⭐</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TopPage
