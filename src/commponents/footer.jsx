import "bootstrap-icons/font/bootstrap-icons.css"

function Footer() {
  return (
    <footer className="container">
      <div className="container-fluid px-3 px-sm-4 px-md-5">
        <div className="d-flex gap-3 mb-4">
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-3 mb-4">
          <div className="col">
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Audio and Subtitles
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Media Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Audio Description
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Investor Relations
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Gift Cards
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <button className="btn btn-sm btn-outline-secondary">
              Service Code
            </button>
            <p className="mb-0 mt-3 text-secondary copyright">
              © 1997-2019 Netflix, Inc. (i-0d00fcda2fdf9c0de)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
