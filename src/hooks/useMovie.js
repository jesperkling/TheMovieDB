import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const useMovie = (id) => {
    return useQuery(['movie', id], () => TMDBAPI.getMovie(id))
}

export default useMovie