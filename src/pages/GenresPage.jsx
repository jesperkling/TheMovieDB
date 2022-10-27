import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import useGenres from '../hooks/useGenres'

const GenresPage = () => {
	const { data, isLoading, isError, error } = useGenres()
	
	return (
		<Container className='text-center'>
			<h1 className='py-3'>Genres</h1>

			{isLoading && (<p>Loading genres...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<ListGroup>
					{data.genres.map(genre => (
						<ListGroup.Item key={genre.id}>
							<Link to={`/genres/${genre.id}`}>{genre.name}</Link>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	)
}

export default GenresPage