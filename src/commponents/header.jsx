import { useState } from "react"
import HeaderNavbar from "./HeaderNavbar"
import HeaderHero from "./HeaderHero"
import { useLocation } from "react-router-dom"

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  const location = useLocation()
  const showHero = location.pathname === "/"

  return (
    <>
      <HeaderNavbar searchOpen={searchOpen} toggleSearch={toggleSearch} />
      {showHero && <HeaderHero />}
    </>
  )
}
