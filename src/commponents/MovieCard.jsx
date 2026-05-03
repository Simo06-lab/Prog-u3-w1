import { Component } from "react"

class MovieCard extends Component {
  render() {
    const movie = this.props.movie

    const poster =
      movie.Poster && movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450?text=No+Image"

    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-8col  item">
        <img src={poster} alt={movie.Title} className="preview-img" />
      </div>
    )
  }
}

export default MovieCard
