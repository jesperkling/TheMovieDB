import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const usePopular = () => {
    return useQuery(['popular'], TMDBAPI.getPopularMovies)
}

export default usePopular