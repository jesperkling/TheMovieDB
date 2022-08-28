import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'

const NowPlayingPage = () => {
	const { data, isLoading, error, isError } = useQuery(['now_playing'], TheMovieDBAPI.getNowPlaying)
	
	return (
		<Container>
			<h1>Now playing in cinemas</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<ul>{data.results.map(movie => (<li key={movie.id}>{movie.title}</li>))}</ul>
			)}

		</Container>
	)
}

export default NowPlayingPage