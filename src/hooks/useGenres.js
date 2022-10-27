import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const useGenres = () => {
    return useQuery(['genres'], TMDBAPI.getGenres)
}

export default useGenres

