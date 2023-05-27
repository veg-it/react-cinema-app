/* eslint-disable */
import { useParams } from 'react-router-dom'
import { getActorDetails, getActorFilms, getGenres } from '../../api/movieDB'
import { useEffect, useState } from 'react'
import  MovieCard from '../../components/MovieComponents/MovieCard'

const ActorPage = () => {
  const { cID } = useParams()
  const [actor, setActor] = useState()
  const [movies, setMovies] = useState()
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchActor = async () => {
      const fetchedActor = await getActorDetails(cID)
      setActor(fetchedActor)
    }
    const fetchedActorMovies = async () => {
      const fetchedMovies = await getActorFilms(cID)
      setMovies(fetchedMovies.cast)
    }

    fetchActor()
    fetchedActorMovies()
  }, [])
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 transition-all pb-4 pt-16">
        <div className="md:flex md:gap-3">
          <img
            src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
            alt={actor?.name}
            className=" md:w-1/4 rounded-md w-full md:h-300 lg:h-1/2"
          />
          {/* <h1>{actor.original_title}</h1> */}
          <div className="mt-3">
            <div className="md:flex gap-3 mb-3">
              <h1 className="text-xl w-fit">{actor?.name}</h1>
              <div className="bg-indigo-50 w-fit p-2 text-indigo-500 rounded-md text-xs">
                {actor?.birthday}
              </div>
            </div>
            <span className="w-fit text-indigo-500 rounded-md md:text-xs text-md mb-2">
              Біографія:
            </span>
            <p>{actor?.biography}</p>
          </div>
        </div>
        <div className="w-fit text-indigo-500 rounded-md md:text-md text-md mb-2 mt-5">
          Фільми в яких брав участь:
        </div>
        <div className="mt-4 text-gray-400 text-xs space-y-2 flex gap-3 flex-wrap justify-between">
          {movies?.map((movie, id) => {
            return (
                <MovieCard key={id} movie={movie} genres={genres} />
              
            )
          })}
        </div>
      </div>
    </>
  )
}
export default ActorPage
