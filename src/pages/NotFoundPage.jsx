import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <section className="page">
      <h2 className="page__title">404 - Pagina non trovata</h2>
      <p className="page__subtitle">Il percorso richiesto non esiste.</p>
      <Link className="page__back-link" to="/">
        Torna alla Home
      </Link>
    </section>
  )
}

export default NotFoundPage
