import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'

const TopRatedPage = () => {
	const { data, isLoading, error, isError } = useQuery(['popular'], TheMovieDBAPI.getTopRatedMovies)

	return (
		<Container>
			<h1>Top rated movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<ul>{data.results.map(movie => (<li key={movie.id}>{movie.title}</li>))}</ul>
			)}

		</Container>
	)
}

export default TopRatedPage