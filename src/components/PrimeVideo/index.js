// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = []
  const comedyMovies = []
  moviesList.forEach(movie => {
    if (movie.categoryId === 'ACTION') {
      actionMovies.push(movie)
    } else {
      comedyMovies.push(movie)
    }
  })
  return (
    <div className="primeVideo-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movies-container">
        <div className="movies-category-div">
          <h1>Action Movies</h1>
          <MoviesSlider movies={actionMovies} />
        </div>
        <div className="movies-category-div">
          <h1>Comedy Movies</h1>
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
