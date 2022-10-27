import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const useNowPlaying = () => {
    return useQuery(['now_playing'], TMDBAPI.getNowPlaying)
}

export default useNowPlaying