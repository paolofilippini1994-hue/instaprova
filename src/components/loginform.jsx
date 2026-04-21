import { useEffect, useRef, useState } from "react"
import "./loginform.scss"

function LoginForm({ onLogin }) {
  // Stato dei campi del form
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Riferimenti agli input per gestire il focus
  const usernameInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  // Messaggio mostrato quando le credenziali non sono corrette
  const [error, setError] = useState("")

  // Controlla se la password va mostrata in chiaro o nascosta
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    // Focus iniziale sul campo username
    usernameInputRef.current?.focus()
  }, [])

  function onFormSubmit(e) {
    // Evita il refresh della pagina al submit del form
    e.preventDefault()

    // Validazione base delle credenziali
    if (username === "paolo" && password === "1234") {
      setError("")
      // Comunica ad App che il login e' andato a buon fine
      onLogin(username)
      return
    }

    // Se le credenziali non combaciano, mostra errore
    setError("Username o password errati")
    passwordInputRef.current?.focus()
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={onFormSubmit}>
        <h1 className="login__title">Instagram Paolett</h1>

        <input
          ref={usernameInputRef}
          type="text"
          placeholder="Username"
          value={username}
          // Aggiorna lo stato mentre l'utente scrive
          onChange={(e) => setUsername(e.target.value)}
          className="login__input"
        />

        <div className="login__password-wrapper">
          <input
            ref={passwordInputRef}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            // Aggiorna lo stato password in tempo reale
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
          />

          <button
            type="button"
            // Alterna visibilita' della password
            onClick={() => setShowPassword(!showPassword)}
            className="login__toggle"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Mostra il testo errore solo se error non e' vuoto */}
        {error && <p className="login__error">{error}</p>}

        <button type="submit" className="login__button">
          Accedi
        </button>
      </form>
    </div>
  )
}

export default LoginForm