import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDBAPI'

const useActor = (id) => {
    return useQuery(['actor', id], () => TMDBAPI.getActor(id))
}

export default useActor;
