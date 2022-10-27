import Container from 'react-bootstrap/Container'
import MovieCard from '../components/MovieCard'
import usePopular from '../hooks/usePopular'

const PopularPage = () => {
	const { data, isLoading, error, isError } = usePopular()

	return (
		<Container className='text-center'>
			<h1 className='py-3'>Popular movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<MovieCard data={data} />
			)}

		</Container>
	)
}

export default PopularPage