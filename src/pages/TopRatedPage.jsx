import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import MovieCard from '../components/MovieCard'

const TopRatedPage = () => {
	const { data, isLoading, error, isError } = useQuery(['top_rated'], TheMovieDBAPI.getTopRatedMovies)

	return (
		<Container className='text-center'>
			<h1>Top rated movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<MovieCard data={data} />
			)}

		</Container>
	)
}

export default TopRatedPage