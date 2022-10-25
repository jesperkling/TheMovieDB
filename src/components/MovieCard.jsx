import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const MovieCard = ({ data }) => {
    return (
        <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {data.results.map((movie, id) =>
                    <Col key={id}>
                        <Card className='my-3 text-center h-100' style={{ width: '18rem' }} key={id}>
                            <Card.Title className='my-3'>{movie.title}</Card.Title>
                            {movie.poster_path 
                                ? <Card.Img 
                                    className='img-fluid p-3'
                                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                    alt={"Poster of movie: " + movie.title}
                                    />
                                    : <p>No poster available</p>
                            }
                                <Card.Body className='p-3'>
                                    <Card.Subtitle>Released:</Card.Subtitle> 
                                    {movie.release_date}
                                    <Card.Subtitle>Rating:</Card.Subtitle> {movie.vote_average} ({movie.vote_count})
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <Link to={`/movies/${movie.id}`}>Read more</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
        </Row>
    )
}

export default MovieCard