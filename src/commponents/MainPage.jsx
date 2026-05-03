import { Component } from "react"
import Section from "./Section"
import Loader from "./Loader"
import TopBar from "./TopBar"

class Main extends Component {
  state = {
    trending: [],
    watchAgain: [],
    newReleases: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.loadRandomSections()
  }

  keywords = [
    "batman",
    "avengers",
    "matrix",
    "spider",
    "alien",
    "terminator",
    "harry potter",
    "star wars",
    "mission",
    "fast",
    "superman",
    "x-men",
  ]

  getRandomKeyword = () => {
    const i = Math.floor(Math.random() * this.keywords.length)
    return this.keywords[i]
  }

  loadRandomSections = () => {
    const k1 = this.getRandomKeyword()
    const k2 = this.getRandomKeyword()
    const k3 = this.getRandomKeyword()

    Promise.all([
      this.fetchMovies(k1),
      this.fetchMovies(k2),
      this.fetchMovies(k3),
    ])
      .then(([trending, watchAgain, newReleases]) => {
        this.setState({
          trending,
          watchAgain,
          newReleases,
          isLoading: false,
        })
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  fetchMovies = (query) => {
    return fetch(`https://www.omdbapi.com/?s=${query}&apikey=d8329f67`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") return []
        return data.Search
      })
  }

  render() {
    return (
      <main className="container-fluid p-4">
        <TopBar />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <Section title="Trending Now" movies={this.state.trending} />
            <Section title="Watch Again" movies={this.state.watchAgain} />
            <Section title="New Releases" movies={this.state.newReleases} />
          </>
        )}
      </main>
    )
  }
}

export default Main
