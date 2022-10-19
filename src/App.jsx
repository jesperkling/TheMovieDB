import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ActorPage from './pages/ActorPage'
import GenrePage from './pages/GenrePage'
import GenresPage from './pages/GenresPage'
import MoviePage from './pages/MoviePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/genres/:id" element={<GenrePage />} />
				<Route path='/now_playing' element={<NowPlayingPage />} />
				<Route path='/popular' element={<PopularPage />} />
				<Route path='/top_rated' element={<TopRatedPage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/people/:id" element={<ActorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
