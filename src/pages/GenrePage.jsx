import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TMDBAPI'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import MovieCard from '../components/MovieCard'

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
					<MovieCard data={data} />
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