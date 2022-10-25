import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const MovieCard = ({ data }) => {
    return (
        <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {data.results.map(movie =>
                    <Col>
                        <Card className='my-3 text-center h-100' style={{ width: '18rem' }} key={movie.id}>
                            <Card.Title className='my-3'>{movie.title}</Card.Title>
                            {movie.poster_path 
                                ? <Card.Img 
                                    className='img-fluid p-3'
                                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                    alt={"Poster of movie: " + movie.title}
                                    />
                                    : <p>No poster available</p>
                            }
                                <Card.Text className='p-3'>
                                    <p><strong>Released:</strong> {movie.release_date}</p>
                                    <p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count})</p>
                                    <p>{movie.overview}</p>
                                    <Link to={`/movies/${movie.id}`}>Read more</Link>
                            </Card.Text>
                        </Card>
                    </Col>
                )}
        </Row>
    )
}

export default MovieCard