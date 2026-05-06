import { Navbar, Nav, Container, Dropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import netflixLogo from "../assets/img/netflix_logo.png"
import kidsIcon from "../assets/img/kids_icon.png"
import "bootstrap-icons/font/bootstrap-icons.css"

function HeaderNavbar({ searchOpen, toggleSearch }) {
  const navigate = useNavigate()

  return (
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
            <Nav.Link as={Link} to="/" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows" className="fw-bold">
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
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="text"
                  id="searchInput"
                  className={searchOpen ? "open" : ""}
                  placeholder="Cerca..."
                />

                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
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
                    width="15"
                    height="15"
                    fill="white"
                    className="bi bi-caret-down-fill dropdown-toggle"
                    viewBox="0 0 16 16"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </Dropdown.Toggle>
              </div>

              <Dropdown.Menu className="bg-dark border-0 mt-3">
                <Dropdown.Item
                  className="text-white"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </Dropdown.Item>

                <Dropdown.Item
                  className="text-white"
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default HeaderNavbar
