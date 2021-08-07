
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieApiCall from './MovieApiCall'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'
import MoviePage from './MoviePage'

function App() {
  return (
    <div>
    <NavBar /> 
    <MoviePage />
    </div>
  );
}

export default App;
