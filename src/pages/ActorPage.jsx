import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TheMovieDBAPI from '../services/TMDBAPI'

const ActorPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading } = useQuery(['actor', id], () => TheMovieDBAPI.getActor(id))
	const { data: actorMovies, isLoading: isLoadingTwo, isError: isErrorTwo, error: errorTwo } = useQuery(['actorMovies', id], () => TheMovieDBAPI.getActorMovies(id))
	const navigate = useNavigate()

	console.log('data', data)
	console.log('actorMovies', actorMovies)
	return (
		<Container>
			{isLoading && (<p>Loading movie...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<div>
					<div className='text-center'>
						<h1 className='text-center'>{data.name}</h1>
						{data.profile_path
							? <img
								className='img-fluid'
								src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
								alt={"Picture of " + data.name}
							/>
							:	<p>No picture available</p>
						}
						<p><strong>Date of Birth:</strong> {data.birthday}</p>
						<p><strong>Place of Birth:</strong> {data.place_of_birth}</p>
						<p><strong>Biography:</strong> {data.biography}</p>
						<a href={data.homepage}>{data.homepage}</a>
					</div>
					<div>
						<h3 className='text-center'>Movies starring {data.name}</h3>
						{actorMovies && (
							actorMovies.results.map((movie, id) => (
								<div className='text-center' key={movie.id}>
									<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
								</div>
							))
						)}
					</div>

				</div>
			)}
			
		</Container>
	)
}

export default ActorPage