import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { useState } from 'react'

const GenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
	const { id, name } = useParams()
	const { data, isLoading, isError, error } = useQuery(['moviesbygenre', { id, page }], () => TheMovieDBAPI.getMoviesByGenre(id, page))
	const navigate = useNavigate()
	
	console.log('data:', data, 'page:',  id)

	return (
		<Container className='text-center'>
			{isLoading && (<p>Loading genres...</p>)}

			{isError && (<p>Error! {error.message}</p>)}

			{data && (
				<>
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
					<Pagination
						page={page}
						numPages={Math.ceil(data.total_pages)}
						hasPrevPage={data.page !== 1}
						hasNextPage={data.page !== data.numPages}
						onPrevPage={() => setSearchParams({ page: page - 1 })}
						onNextPage={() => setSearchParams({ page: page + 1 })}
					/>
				</>
			)}

		</Container>
	)
}

export default GenrePage