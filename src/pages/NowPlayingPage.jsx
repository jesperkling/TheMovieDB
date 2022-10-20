import { ListGroup } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import { Link } from 'react-router-dom'

const NowPlayingPage = () => {
	const { data, isLoading, error, isError } = useQuery(['now_playing'], TheMovieDBAPI.getNowPlaying)
	console.log(data)
	return (
		<Container className='text-center'>
			<h1 className='py-3'>Now playing in cinemas</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<ListGroup>
					{data.results.map(movie => 
						<ListGroup.Item key={movie.id}>
							{movie.poster_path 
								? <img 
									className='img-fluid'
									src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
									alt={"Poster of movie: " + movie.title}
								/>
								: <p>No poster available</p>
							}
							<div className='py-3'>
								<h3>{movie.title}</h3>
								<p><strong>Released:</strong> {movie.release_date}</p>
								<p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count})</p>
								<p>{movie.overview}</p>
								<Link to={`/movies/${movie.id}`}>Read more</Link>
							</div>
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

		</Container>
	)
}

export default NowPlayingPage