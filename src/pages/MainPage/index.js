/* eslint-disable */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { getMovies, searchMovies, getGenres } from '../../api/movieDB'
import TitleText from '../../components/Main/TitleText'
import GenreBadge from '../../components/MovieComponents/GenreBadge'
import MovieCard from '../../components/MovieComponents/MovieCard'

const MainPage = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const observer = useRef()

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading]
  )

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres()
      setGenres(data)
    }
    fetchGenres()
  }, [])

  useEffect(() => {
    let cancel = false
    const fetchData = async () => {
      setLoading(true)
      let data = await getMovies(page)
      if (selectedGenres.length > 0) {
        data = data.filter((movie) =>
          movie.genre_ids.some((id) => selectedGenres.includes(id))
        )
      }
      if (!cancel) {
        setMovies((prevMovies) => [...prevMovies, ...data])
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      cancel = true
    }
  }, [page, selectedGenres])

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value)

    if (event.target.value !== '') {
      const data = await searchMovies(event.target.value)
      setMovies([])
      setMovies(data)
      setPage(1)
    } else {
      const data = await getMovies(page)
      setMovies(data)
      setPage(1)
    }
  }

  const handleGenreClick = (id) => {
    setSelectedGenres((prev) => {
      return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    })
    const data = movies.filter((movie) =>
      movie.genre_ids.some((id) => selectedGenres.includes(id))
    )
    setMovies(data)
  }

  return (
    <div className="w-full">
      <TitleText
        title={'Пошук фільмів'}
        haveSearch={true}
        inline={true}
        value={searchQuery}
        onChange={handleSearch}
      />

      <div className="px-4 md:px-8 lg:px-8 xl:px-16 transition-all pb-4 md:pt-8">
        {/* <div className="flex overflow-scroll no-scrollbar max-w-prose">
          {genres.map((genre) => (
            <GenreBadge
              key={genre.id}
              title={genre.name}
              onClick={() => handleGenreClick(genre.id)}
              selected={selectedGenres.includes(genre.id)}
            />
          ))}
        </div> */}

        <div className="mt-4 text-gray-400 text-xs space-y-3 flex gap-3 flex-wrap md:gap-2">
          {movies.map((movie, index) => {
            if (movies.length === index + 1) {
              return (
                <MovieCard
                key={index}
                  movie={movie}
                  lastElementRef={lastMovieElementRef}
                  genres={genres}
                />
              )
            } else {
              return <MovieCard key={index} movie={movie} genres={genres} />
            }
          })}
        </div>
        <div>{loading && 'Loading...'}</div>
      </div>
    </div>
  )
}

export default MainPage
