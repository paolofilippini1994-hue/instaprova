import { useState } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import "./App.scss"
import Container from "./components/container"
import Title from "./components/title.jsx"
import LoginForm from "./components/loginform"
import Footer from "./components/footer.jsx"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import HelpPage from "./pages/HelpPage"
import ContactsPage from "./pages/ContactsPage"
import NotFoundPage from "./pages/NotFoundPage"


  console.log("dopo")


function App() {
  const [loggedUsername, setLoggedUsername] = useState("")
  const [isLogged, setIsLogged] = useState(false)

  function handleLoginSuccess(username) {
    setIsLogged(true)
    setLoggedUsername(username)
    console.log("Login effettuato con successo")
  }

  function handleLogout() {
    setIsLogged(false)
    setLoggedUsername("")
  }

  if (!isLogged) {
    return (
      <LoginForm onLogin={handleLoginSuccess} />
    )
  }





  return (
    <div className="app-shell">
      <Container>
        <header className="app-shell__header">
          <Title>Instagram Paolett</Title>
          <p className="app-shell__welcome">Benvenuto, {loggedUsername}!</p>

          <nav className="app-shell__nav" aria-label="Navigazione principale">
            <NavLink to="/" end className={({ isActive }) => `app-shell__link${isActive ? " is-active" : ""}`}>
              Home
            </NavLink>
            <NavLink to="/profilo" className={({ isActive }) => `app-shell__link${isActive ? " is-active" : ""}`}>
              Profilo
            </NavLink>
            <NavLink to="/help" className={({ isActive }) => `app-shell__link${isActive ? " is-active" : ""}`}>
              Help
            </NavLink>
            <NavLink to="/contatti" className={({ isActive }) => `app-shell__link${isActive ? " is-active" : ""}`}>
              Contatti
            </NavLink>
          </nav>
        </header>

        <main className="app-shell__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profilo" element={<ProfilePage loggedUsername={loggedUsername} />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/contatti" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <button type="button" className="app-shell__logout" onClick={handleLogout}>
          Logout
        </button>

      </Container>
      <Footer />
    </div>
  )
}

export default App