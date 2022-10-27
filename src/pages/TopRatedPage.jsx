import Container from 'react-bootstrap/Container'
import MovieCard from '../components/MovieCard'
import useTopRated from '../hooks/useTopRated'

const TopRatedPage = () => {
	const { data, isLoading, error, isError } = useTopRated()

	return (
		<Container className='text-center'>
			<h1 className='py-3'>Top rated movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<MovieCard data={data} />
			)}

		</Container>
	)
}

export default TopRatedPage