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

const exports = {
	getGenres,
	getNowPlaying,
	getPopularMovies,
}

export default exports