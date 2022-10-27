import Container from 'react-bootstrap/Container'
import { Link, useParams } from 'react-router-dom'
import useActor from '../hooks/useActor'
import useActorMovies from '../hooks/useActorMovies'

const ActorPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading } = useActor(id)
	const { data: actorMovies, isLoading: isLoadingTwo, isError: isErrorTwo, error: errorTwo } = useActorMovies(id)
	
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