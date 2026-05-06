import kidsIcon from "../assets/img/kids_icon.png"

export default function SettingsPage() {
  return (
    <>
      <div className="text-white" style={{ backgroundColor: "#fff" }}>
        <main className="container py-4 text-black">
          <h1 className="fw-normal mb-3">Account</h1>
          <hr className="border-dark border-2" />

          <div className="row py-3">
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <p className="text-secondary fs-5 fw-semibold text-uppercase">
                Membership & Billing
              </p>
              <button className="btn btn-sm border-0 border-bottom rounded-0 border-secondary">
                Cancel Membership
              </button>
            </div>

            <div className="col-12 col-md-9">
              <table className="w-100">
                <tbody>
                  <tr>
                    <td className="fw-bold text-secondary py-1">
                      student@strive.school
                    </td>
                    <td className="text-primary text-end py-1">
                      Change account email
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary py-1">Password: ********</td>
                    <td className="text-primary text-end py-1">
                      Change password
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary py-1">Phone: 321 044 1279</td>
                    <td className="text-primary text-end py-1">
                      Change phone number
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr className="border-secondary opacity-25" />

              <table className="w-100">
                <tbody>
                  <tr>
                    <td className="py-1">
                      <span className="fw-bold me-2 text-secondary">
                        ℗ PayPal
                      </span>
                      <span className="text-secondary">
                        admin@strive.school
                      </span>
                    </td>
                    <td className="text-primary text-end py-1">
                      Update payment info
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="text-primary text-end py-1">
                      Billing details
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr className="border-secondary opacity-25" />

              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td></td>
                    <td className="text-primary text-end py-1">
                      Redeem gift card or promo code
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="text-primary text-end py-1">
                      Where to buy gift cards
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="border-dark border-2" />
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <p className="text-secondary fs-5 fw-semibold text-uppercase">
                Plan Details
              </p>
            </div>

            <div className="col-12 col-md-9 d-flex justify-content-between align-items-start">
              <p className="fw-bold text-secondary mb-0">
                Premium
                <span className="border border-dark px-1 fw-normal fs-6 text-black">
                  ULTRA HD
                </span>
              </p>
              <span className="text-primary">Change plan</span>
            </div>

            <hr className="border-dark border-2 mt-3" />
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <p className="text-secondary fs-5 fw-semibold text-uppercase">
                Settings
              </p>
            </div>

            <div className="col-12 col-md-9">
              <p className="text-primary mb-2">Parental controls</p>
              <p className="text-primary mb-2">Test participation</p>
              <p className="text-primary mb-2">Manage download devices</p>
              <p className="text-primary mb-2">Activate a device</p>
              <p className="text-primary mb-2">
                Recent device streaming activity
              </p>
              <p className="text-primary mb-2">Sign out of all devices</p>
            </div>

            <hr className="border-dark border-2 mt-3" />
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <p className="text-secondary fs-5 fw-semibold text-uppercase">
                My Profile
              </p>
            </div>

            <div className="col-12 col-md-9">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-2">
                  <img src={kidsIcon} alt="profile" style={{ width: "32px" }} />
                  <span className="fw-bold text-secondary">Strive Student</span>
                </div>

                <div className="text-end">
                  <p className="text-primary mb-1">Manage profiles</p>
                  <p className="text-primary mb-0">Add profile email</p>
                </div>
              </div>

              <table className="w-100">
                <tbody>
                  <tr>
                    <td className="text-primary pb-2">Language</td>
                    <td className="text-primary pb-2">Viewing activity</td>
                  </tr>
                  <tr>
                    <td className="text-primary pb-2">Playback settings</td>
                    <td className="text-primary pb-2">Ratings</td>
                  </tr>
                  <tr>
                    <td className="text-primary">Subtitle appearance</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
