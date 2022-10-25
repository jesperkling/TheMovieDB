import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import MovieCard from '../components/MovieCard'

const NowPlayingPage = () => {
	const { data, isLoading, error, isError } = useQuery(['now_playing'], TheMovieDBAPI.getNowPlaying)
	
	return (
		<Container className='text-center'>
			<h1 className='py-3'>Now playing in cinemas</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<MovieCard data={data} />
			)}

		</Container>
	)
}

export default NowPlayingPage