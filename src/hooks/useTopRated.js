import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const useTopRated = () => {
    return useQuery(['top_rated'], TMDBAPI.getTopRatedMovies)
}

export default useTopRated