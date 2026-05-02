import { useState } from "react"
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap"

import netflixLogo from "../assets/img/netflix_logo.png"
import kidsIcon from "../assets/img/kids_icon.png"
import heroBg from "../assets/img/download.jpg"
import onePieceLogo from "../assets/img/Netflix-One-Piece-Logo-PNG-removebg-preview.png"
import "bootstrap-icons/font/bootstrap-icons.css"

function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" className="py-2 px-4">
        <Container fluid className="px-0">
          <img
            src={netflixLogo}
            alt="Netflix"
            className="img-fluid netflix-logo"
          />

          <Navbar.Toggle aria-controls="netflixNav" className="border-0" />

          <Navbar.Collapse id="netflixNav">
            <Nav className="me-auto mb-0">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#" className="active fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>

            <div className="nav-icons">
              <div className="search-container">
                <input
                  type="text"
                  id="searchInput"
                  className={searchOpen ? "open" : ""}
                  placeholder="Cerca..."
                />

                <svg
                  onClick={toggleSearch}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 16 16"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.018-.017z" />
                  <path d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>

              <span className="text-white text-uppercase fw-semibold small kids-badge">
                Kids
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>

              <Dropdown align="end">
                <div className="d-flex align-items-center gap-1">
                  <div className="bg-success rounded profile-img">
                    <img
                      src={kidsIcon}
                      alt="profile"
                      className="cursor-pointer"
                    />
                  </div>

                  <Dropdown.Toggle
                    as="span"
                    className="cursor-pointer"
                    data-bs-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu className="bg-dark border-0 mt-3">
                  <Dropdown.Item className="text-white" href="/profile">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white" href="/settings">
                    Settings
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </header>
  )
}
export default Header
