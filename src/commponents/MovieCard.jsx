import { Component } from "react"
import { useNavigate } from "react-router-dom"

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />
}

class MovieCard extends Component {
  render() {
    const { movie, navigate } = this.props

    const poster =
      movie.Poster && movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450?text=No+Image"

    return (
      <div
        className="col-6 col-sm-4 col-md-3 col-lg-2 item"
        onClick={() => navigate(`/movie-details/${movie.imdbID}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={poster} alt={movie.Title} className="preview-img" />
      </div>
    )
  }
}

export default withNavigation(MovieCard)
