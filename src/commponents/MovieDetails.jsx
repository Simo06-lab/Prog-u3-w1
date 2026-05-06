import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Alert } from "react-bootstrap"
import Loader from "./Loader"
function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const API_KEY = "d8329f67"
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data)
        return fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${data.Title}`,
          {
            headers: {
              Authorization: "Bearer …",
            },
          },
        )
      })
      .then((res) => res.json())
      .then((data) => {
        setComments(data)
      })
      .catch((err) => {
        console.log("Errore:", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [movieId])

  if (loading) return <Loader />
  return (
    <Container
      className="text-white d-flex flex-column justify-content-center align-items-center mt-4"
      style={{ minHeight: "80vh" }}
    >
      <h1>{movie.Title}</h1>

      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ maxWidth: "300px", borderRadius: "8px" }}
        className="my-3"
      />

      <p>
        <strong>Anno:</strong> {movie.Year}
      </p>

      <p className="text-center" style={{ maxWidth: "600px" }}>
        <strong>Trama:</strong> {movie.Plot}
      </p>

      <h3 className="mt-4">Commenti</h3>

      {comments.length === 0 && (
        <Alert variant="info">Nessun commento disponibile</Alert>
      )}

      {comments.map((c) => (
        <div
          key={c._id}
          className="border p-2 mb-2"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <strong>{c.author}</strong>: {c.comment}
        </div>
      ))}
    </Container>
  )
}
export default MovieDetails
