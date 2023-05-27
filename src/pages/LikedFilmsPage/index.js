/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Modal from '../../components/PlayListComponents/PlaylistModal'
import { useParams } from 'react-router-dom'
import TitleText from '../../components/Main/TitleText'
import { getWatchlist, removeMovieFromWatchlist } from '../../api/index'
import { getMovieDetails } from '../../api/movieDB'
import { NavLink } from 'react-router-dom'
import MovieCard from '../../components/MovieComponents/MovieCard'

function LikedFilmsPage() {
  const { create } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isGenerateMode, setGenerateMode] = useState(false)
  const [watchlist, setWatchlist] = useState(null)
  const [movies, setMovies] = useState([])

  const fetchWatchlist = async () => {
    const id = localStorage.getItem('watchlist_id')
    if (id) {
      const data = await getWatchlist(id)
      setWatchlist(data)
    }
  }

  useEffect(() => {
    fetchWatchlist()
  }, [])

  useEffect(() => {
    if (create) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      fetchWatchlist()
    }
  }, [isOpen])

  const fetchMovies = async () => {
    const movieIds = JSON.parse(watchlist.movie_ids)
    const moviePromises = movieIds.map((id) => getMovieDetails(id))
    const movieDetails = await Promise.all(moviePromises)
    setMovies(movieDetails)
  }

  useEffect(() => {
    if (watchlist) {
      fetchMovies()
    }
  }, [watchlist])

  const handleRemoveFromWatchlist = async (movieId) => {
    const id = localStorage.getItem('watchlist_id')
    try {
      const response = await removeMovieFromWatchlist(id, movieId)
      fetchWatchlist()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="">
      <TitleText
        title={watchlist ? watchlist.list_name : 'Назва списку'}
        haveSearch={false}
        inline={false}
      />
      <div className="px-4 md:px-8 lg:px-8 xl:px-16 transition-all pb-4 md:pt-8">
        {watchlist ? (
          <>
            {movies && movies.length > 0 ? (
              <div className="mt-4 text-gray-400 text-xs space-y-3 flex gap-3 flex-wrap md:gap-2">
                {movies.map((movie) => (
                
                    <MovieCard key={movie.id} movie={movie} genres={movie.genres} onClick={() => handleRemoveFromWatchlist(movie.id)} />
                    
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-full text-center">
                <p>
                  У вас ще немає фільмів у цьому списку, додати?{' '}
                  <NavLink to={`/`}>
                    <span className="px-4 py-2 text-indigo-500 bg-transparent rounded underline">
                      Додати
                    </span>
                  </NavLink>
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center items-center h-full text-center">
            <p>
              В вас ще немає списку фільмів, створити новий?{' '}
              <span
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 text-indigo-500 bg-transparent rounded underline">
                Створити
              </span>
            </p>
          </div>
        )}
      </div>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="my-node"
        unmountOnExit>
        <Modal
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          isGenerateMode={isGenerateMode}
          setGenerateMode={setGenerateMode}
        />
      </CSSTransition>
    </div>
  )
}

export default LikedFilmsPage
