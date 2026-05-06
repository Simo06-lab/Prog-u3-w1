import heroBg from "../assets/img/download.jpg"
import onePieceLogo from "../assets/img/Netflix-One-Piece-Logo-PNG-removebg-preview.png"
import { Button } from "react-bootstrap"

export default function HeaderHero() {
  return (
    <div
      className="position-relative text-white d-flex align-items-end hero-section"
      style={{
        minHeight: "75vh",
        background: `url(${heroBg}) center center / cover no-repeat`,
      }}
    >
      <div className="hero-gradient"></div>

      <div
        className="position-relative px-4 pb-5 w-100"
        style={{ maxWidth: "600px" }}
      >
        <img
          src={onePieceLogo}
          alt="One Piece"
          className="img-fluid mb-2"
          style={{ maxWidth: "300px" }}
        />

        <div className="d-flex gap-2 mb-3 flex-wrap">
          <span className="badge bg-secondary text-white fw-normal">
            Azione
          </span>
          <span className="badge bg-secondary text-white fw-normal">
            Avventura
          </span>
          <span className="badge bg-secondary text-white fw-normal">
            Fantasy
          </span>
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <Button
            variant="light"
            className="text-dark fw-semibold px-5 d-flex align-items-center gap-2"
          >
            <i className="bi bi-play-fill"></i> Play
          </Button>

          <Button
            variant="secondary"
            className="bg-opacity-50 text-white fw-semibold px-4 d-flex align-items-center gap-2"
          >
            <i className="bi bi-info-circle-fill"></i> Altre info
          </Button>
        </div>
      </div>
    </div>
  )
}
