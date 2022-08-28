import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1>The Movie Database</h1>
		</Container>
	)
}

export default HomePage
