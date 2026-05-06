import { Container } from "react-bootstrap"

function TVShows() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-white text-center">
        <h1>TV Shows</h1>
        <p>devi cliccare una serie tv</p>
      </div>
    </Container>
  )
}

export default TVShows
