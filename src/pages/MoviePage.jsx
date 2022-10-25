import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import TheMovieDBAPI from '../services/TMDBAPI'

const MoviePage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading } = useQuery(['movie', id], () => TheMovieDBAPI.getMovie(id))
	console.log(data)
	return (
		<Container className='text-center'>
			<h1>Movie Page</h1>

			{isLoading && (<p>Loading movie...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<div>
					<h3>{data.title}</h3>
					{data.poster_path
						? <img 
							className='img-fluid'
							src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
							alt={"Poster of " + data.title}
						/>
						: <p>No poster available</p>
					}
					<p><strong>Released:</strong> {data.release_date}</p>
					<p><strong>Plot:</strong> {data.overview}</p>
					<h3>Actors:</h3>
					{data.credits.cast.map(actor => (
						<div key={actor.id}>
							<Link to={`/people/${actor.id}`}>{actor.name}</Link>
							<p>{actor.character}</p>
						</div>
					))}
				</div>
			)}
		</Container>
	)
}

export default MoviePage