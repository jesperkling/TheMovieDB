import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({ data }) => {
    return (
        <div>
            <ListGroup>
                {data.results.map(movie => 
                    <ListGroup.Item key={movie.id}>
                        <h3>{movie.title}</h3>
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
        </div>
    )
}

export default MovieCard