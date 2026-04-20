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


function App() {
  const [loggedUsername, setLoggedUsername] = useState("")
  const [isLogged, setIsLogged] = useState(false)
  const [theme, setTheme] = useState("warm")

  // Aggiorna lo stato globale quando il login va a buon fine.
  function handleLoginSuccess(username) {
    setIsLogged(true)
    setLoggedUsername(username)
    console.log("Login effettuato con successo")
  }

  // Ripristina lo stato iniziale per tornare alla schermata di login.
  function handleLogout() {
    setIsLogged(false)
    setLoggedUsername("")
  }

  // Toggle tra la palette calda attuale e una versione neutra.
  function handleThemeToggle() {
    setTheme((currentTheme) => (currentTheme === "warm" ? "neutral" : "warm"))
  }

  // Gate semplice: senza login mostriamo solo il form di accesso.
  if (!isLogged) {
    return (
      <LoginForm onLogin={handleLoginSuccess} />
    )
  }





  return (
    <div className={`app-shell ${theme === "neutral" ? "theme-neutral" : "theme-warm"}`}>
      <Container>
        <header className="app-shell__header">
          <Title>Instagram Paolett</Title>
          <p className="app-shell__welcome">Benvenuto, {loggedUsername}!</p>

          <button
            type="button"
            className="app-shell__theme-toggle"
            onClick={handleThemeToggle}
            aria-pressed={theme === "neutral"}
            aria-label="Cambia palette colore"
          >
            {theme === "warm" ? "Tema caldo" : "Tema neutro"}
          </button>

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
          {/* Le route principali vivono qui dentro il layout comune. */}
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