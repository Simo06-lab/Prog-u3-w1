import profileImg from "../assets/img/avatar.png"
function ProfilePage() {
  return (
    <main className="d-flex justify-content-center">
      <div className="w-100 w-md-50 mt-5 px-3" style={{ maxWidth: "700px" }}>
        <h1 className="text-white" style={{ fontSize: "55px" }}>
          Edit Profile
        </h1>

        <hr className="border-secondary" />

        <div className="row g-3">
          <div className="col-12 col-md-2 d-flex justify-content-center justify-content-md-start">
            <div className="position-relative">
              <img
                src={profileImg}
                className="rounded"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
                id="profile"
                alt="profile avatar"
              />

              <div
                className="bg-dark rounded-circle d-flex align-items-center justify-content-center border border-secondary"
                style={{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  top: "80px",
                  left: "5px",
                }}
              >
                <i
                  className="bi bi-pencil-fill text-white"
                  style={{ fontSize: "8px" }}
                ></i>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-10">
            <input
              type="text"
              className="form-control mb-3 fs-4 text-white border-0 rounded-0"
              defaultValue="Strive Student"
              style={{ backgroundColor: "#666" }}
            />

            <label className="font-footer fs-5 mb-1">Language:</label>

            <div className="dropdown" data-bs-theme="dark">
              <button
                className="btn dropdown-toggle text-start rounded-0 drop-dawn d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                English
              </button>

              <ul className="dropdown-menu bg-dark border-secondary">
                <li>
                  <a className="dropdown-item active text-white" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-secondary" href="#">
                    Italian
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-secondary" href="#">
                    Spanish
                  </a>
                </li>
              </ul>
            </div>

            <hr className="border-secondary" />

            <p className="font-footer mb-3">Maturity Settings:</p>

            <span
              className="badge text-white mb-3 px-3 py-2 rounded-0"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                backgroundColor: "#333",
              }}
            >
              ALL MATURITY RATINGS
            </span>

            <p className="font-footer small mb-4">
              Show titles of <strong>all maturity ratings</strong> for this
              profile.
            </p>

            <button
              className="btn btn-outline-secondary btn-md rounded-0 mb-3"
              style={{ letterSpacing: "1px" }}
            >
              EDIT
            </button>

            <hr className="border-secondary" />

            <p className="font-footer mb-3">Autoplay controls</p>

            <div className="form-check d-flex align-items-center gap-2 mb-2">
              <input
                className="form-check-input check"
                type="checkbox"
                defaultChecked
                id="check1"
              />
              <label className="form-check-label font-footer" htmlFor="check1">
                Autoplay next episode in a series on all devices.
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-2">
              <input
                className="form-check-input check"
                type="checkbox"
                defaultChecked
                id="check2"
              />
              <label className="form-check-label font-footer" htmlFor="check2">
                Autoplay previews while browsing on all devices.
              </label>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="row gap-3 mt-4 justify-content-center justify-content-md-start">
            <button
              className="btn btn-light fw-bold rounded-0 col-2"
              style={{ letterSpacing: "1px" }}
            >
              SAVE
            </button>

            <button
              className="btn btn-outline-secondary rounded-0 col-3"
              style={{ letterSpacing: "1px" }}
            >
              CANCEL
            </button>

            <button
              className="btn btn-outline-secondary rounded-0 col-4"
              style={{ letterSpacing: "1px" }}
            >
              DELETE PROFILE
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default ProfilePage
