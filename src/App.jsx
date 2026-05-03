import { useState } from "react"
import HeaderNetflix from "./commponents/header"
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/style/header.css"
import "../src/assets/style/style.css"
import Footer from "./commponents/footer"
import Main from "./commponents/MainPage"
import ProfilePage from "./commponents/Profile"
import SettingsPage from "./commponents/Settings"

function App() {
  const [showProfile, setShowProfile] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      {showProfile ? (
        <ProfilePage />
      ) : showSettings ? (
        <SettingsPage />
      ) : (
        <>
          <HeaderNetflix
            onProfileClick={() => {
              setShowSettings(false)
              setShowProfile(true)
            }}
            onSettingsClick={() => {
              setShowProfile(false)
              setShowSettings(true)
            }}
          />

          <Main />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
