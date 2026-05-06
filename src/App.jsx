import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderNetflix from "./commponents/header"
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/style/header.css"
import "../src/assets/style/style.css"
import Footer from "./commponents/footer"
import Main from "./commponents/MainPage"
import ProfilePage from "./commponents/Profile"
import SettingsPage from "./commponents/Settings"
import TVShows from "./commponents/TvShows"
import MovieDetails from "./commponents/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <HeaderNetflix />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
