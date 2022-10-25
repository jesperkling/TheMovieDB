import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import MovieCard from '../components/MovieCard'

const PopularPage = () => {
	const { data, isLoading, error, isError } = useQuery(['popular'], TheMovieDBAPI.getPopularMovies)

	return (
		<Container className='text-center'>
			<h1>Popular movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<MovieCard data={data} />
			)}

		</Container>
	)
}

export default PopularPage