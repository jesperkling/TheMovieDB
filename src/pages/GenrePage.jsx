import Container from 'react-bootstrap/Container'
import { useParams, useSearchParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import MovieCard from '../components/MovieCard'
import useMoviesByGenre from '../hooks/useMoviesByGenre'
import { useEffect } from 'react'

const GenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
	const { id, name } = useParams()
	const { data, isLoading, isError, error } = useMoviesByGenre(id, page)

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [data])
	
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