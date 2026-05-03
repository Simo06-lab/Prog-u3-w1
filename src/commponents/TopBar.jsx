import { Component } from "react"

class TopBar extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-between py-4">
        <div className="d-flex align-items-center gap-3">
          <h2 className="m-0 fs-3 fw-medium text-light">TV Shows</h2>

          <div className="dropdown">
            <button
              className="btn btn-dark border border-secondary dropdown-toggle py-1 rounded-0"
              type="button"
              data-bs-toggle="dropdown"
            >
              Genres
            </button>

            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Horror
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="border-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 16 16"
            >
              <path
                stroke="white"
                strokeWidth="1.5"
                d="M2 4h12M2 8h12M2 12h12"
              />
            </svg>
          </div>

          <div className="border-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 16 16"
            >
              <rect x="2" y="2" width="4" height="4" rx="1" fill="white" />
              <rect x="10" y="2" width="4" height="4" rx="1" fill="white" />
              <rect x="2" y="10" width="4" height="4" rx="1" fill="white" />
              <rect x="10" y="10" width="4" height="4" rx="1" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
