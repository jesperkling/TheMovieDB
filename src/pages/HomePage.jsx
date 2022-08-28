import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'

const HomePage = () => {
	const { data, error } = useQuery('genres', TheMovieDBAPI.getGenres)

	return (
		<Container className="py-3">
			{error && (
				<p>Error</p>
			)}
			{data && data.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
		</Container>
	)
}

export default HomePage
