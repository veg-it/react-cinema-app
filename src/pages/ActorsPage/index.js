/* eslint-disable */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { getActors, searchActors } from '../../api/movieDB'
import { NavLink } from 'react-router-dom'
import TitleText from '../../components/Main/TitleText'

const ActorsPage = () => {
  const [actors, setActors] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const observer = useRef()

  const lastActorElementRef = useCallback(
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
    let cancel = false
    const fetchData = async () => {
      setLoading(true)
      let data = await getActors(page)
      if (selectedGenre) {
        data = data.filter((actor) => actor.genre_ids.includes(selectedGenre))
      }
      if (!cancel) {
        setActors((prevMovies) => [...prevMovies, ...data])
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      cancel = true
    }
  }, [page, selectedGenre])

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value)

    if (event.target.value !== '') {
      const data = await searchActors(event.target.value)
      setActors(data)
      setPage(1)
    } else {
      const data = await getActors(page)
      setActors(data)
      setPage(1)
    }
  }

  return (
    <>
      <TitleText
        title={'Пошук акторів'}
        haveSearch={true}
        inline={true}
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="px-4 md:px-8 lg:px-16 transition-all pb-4 pt-8">
        <div className="mt-4 text-gray-400 text-xs space-y-3 flex gap-3 flex-wrap justify-between">
          {actors.map((actor, index) => {
            if (actors.length === index + 1) {
              return (
                <div ref={lastActorElementRef} key={actor.id}>
                  <NavLink to="/">
                    <h2 className="text-gray-700 dark:text-white font-semibold">
                      {actor.title}
                    </h2>
                  </NavLink>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.poster_path}`}
                    alt={actor.title}
                    className="md:w-150 rounded-md bg-gray-400 h-300"
                  />
                  <p>{actor.overview}</p>
                </div>
              )
            } else {
              return (
                <div
                  key={actor.id}
                  className="flex gap-3 max-w-lg w-1/2 lg:w-1/3 xl:w-1/4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="md:w-150 rounded-md bg-gray-400 h-300"
                  />
                  <div>
                    <NavLink to={`/actor/${actor.id}`}>
                      <h2 className="text-gray-700 dark:text-white font-semibold">
                        {actor.name}
                      </h2>
                    </NavLink>
                    <p>{JSON.stringify(actor.genre_ids)}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div>{loading && 'Loading...'}</div>
      </div>
    </>
  )
}

export default ActorsPage
