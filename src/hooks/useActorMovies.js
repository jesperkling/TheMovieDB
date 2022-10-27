import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const useActorMovies = (id) => {
    return useQuery(['actorMovies', id], () => TMDBAPI.getActorMovies(id))
}

export default useActorMovies
