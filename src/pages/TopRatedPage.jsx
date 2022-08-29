import Container from 'react-bootstrap/Container'
import { ListGroup } from 'react-bootstrap'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import { Link } from 'react-router-dom'

const TopRatedPage = () => {
	const { data, isLoading, error, isError } = useQuery(['popular'], TheMovieDBAPI.getTopRatedMovies)

	return (
		<Container>
			<h1>Top rated movies</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<ListGroup>
					{data.results.map(movie => 
						<ListGroup.Item key={movie.id}>
							<h3>{movie.title}</h3>
							<p>{movie.release_date}</p>
							{movie.poster_path 
								? <img 
									className='img-fluid'
									src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
									alt={"Poster of movie: " + movie.title}
								/>
								: <p>No poster available</p>
							}
							<Link to={`/movies/${movie.id}`}>Read more</Link>
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

		</Container>
	)
}

export default TopRatedPage