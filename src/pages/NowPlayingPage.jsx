import Container from 'react-bootstrap/Container'
import MovieCard from '../components/MovieCard'
import useNowPlaying from '../hooks/useNowPlaying'

const NowPlayingPage = () => {
	const { data, isLoading, error, isError } = useNowPlaying()
	
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