import { Component, createRef } from "react"
import MovieCard from "./MovieCard"

class Section extends Component {
  rowRef = createRef()

  scrollNext = () => {
    const row = this.rowRef.current
    if (row) {
      const imgWidth = row.querySelector("img")?.clientWidth || 200
      row.scrollLeft += imgWidth + 4
    }
  }

  scrollPrev = () => {
    const row = this.rowRef.current
    if (row) {
      const imgWidth = row.querySelector("img")?.clientWidth || 200
      row.scrollLeft -= imgWidth + 4
    }
  }

  render() {
    return (
      <section className="mb-5 position-relative random-section text-white">
        <h4 className="fw-bold mb-3">{this.props.title}</h4>

        <button
          className="prevBtn position-absolute start-0 translate-middle-y fs-1 text-white opacity-50"
          onClick={this.scrollPrev}
        >
          ‹
        </button>

        <button
          className="nextBtn position-absolute end-0 translate-middle-y fs-1 text-white opacity-50"
          onClick={this.scrollNext}
        >
          ›
        </button>

        <div className="row flex-nowrap g-1 scrollRow" ref={this.rowRef}>
          {this.props.movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </section>
    )
  }
}

export default Section
