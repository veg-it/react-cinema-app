/* eslint-disable */
import TitleText from '../../components/Main/TitleText'
import MovieCard from '../../components/MovieComponents/MovieCard'
import { getTopMovies, getGenres } from '../../api/movieDB'
import ScheduleTable from '../../components/ScheduleComponents/ScheduleTable'
import { useState, useEffect } from 'react'

const CinemaPage = () => {
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
      data = data.slice(15, 20)
      setMovies(data)
    }

    fetchData()
  }, [])
  return (
    <div>
      <TitleText title={'Афіша кінотеатрів'} />
      <section></section>
      
      <div className="px-4 md:px-8 lg:px-8 xl:px-16 transition-all pb-4 md:pt-8">
      <h2 className='text-2xl text-gray-500 mb-3'>Cьогодні в кіно</h2>
        <div className="mt-4 text-gray-400 text-xs space-y-3 gap-3 md:gap-2">
          {movies.map((movie, index) => (
            <div key={index} className="mb-11 lg:flex justify-between items-center">
              <div className="flex items-center gap-10">
                <MovieCard movie={movie} genres={genres} />
              </div>
              <ScheduleTable />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default CinemaPage
