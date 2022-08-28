import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'

const PopularPage = () => {
	const { data, isLoading, error, isError } = useQuery(['popular'], TheMovieDBAPI.getPopularMovies)

	return (
		<Container>
			<h1>Popular movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<ul>{data.results.map(movie => (<li key={movie.id}>{movie.title}</li>))}</ul>
			)}

		</Container>
	)
}

export default PopularPage