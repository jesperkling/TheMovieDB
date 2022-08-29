import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const getGenres = async () => {
	const response = await axios.get(`/genre/movie/list?api_key=${apiKey}&include_adult=false`)

	return response.data
}

const getNowPlaying = async () => {
	const response = await axios.get(`/movie/now_playing?api_key=${apiKey}&include_Adult=false`)

	return response.data
}

const getPopularMovies = async () => {
	const response = await axios.get(`/movie/popular?api_key=${apiKey}&include_Adult=false`)

	return response.data
}

const getTopRatedMovies = async () => {
	const response = await axios.get(`/movie/top_rated?api_key=${apiKey}&include_Adult=false`)

	return response.data
}

const getMovie = async (id) => {
	const response = await axios.get(`/movie/${id}?api_key=${apiKey}&include_adult=false&append_to_response=credits`)

	return response.data
}

const getActor = async (id) => {
	const response = await axios.get(`/person/${id}?api_key=${apiKey}&include_adult=false`)

	return response.data
}

const getActorMovies = async (id) => {
	const response = await axios.get(`/discover/movie?api_key=${apiKey}&include_adult=false&with_people=${id}`)

	return response.data
}

const getGenre = async (genre, page) => {
	const response = await axios.get(`/discover/movie?api_key=${apiKey}&with_genres=${genre}&page=${page}`)

	return response.data
}

const exports = {
	getGenres,
	getNowPlaying,
	getPopularMovies,
	getTopRatedMovies,
	getMovie,
	getActor,
	getGenre,
	getActorMovies,
}

export default exports