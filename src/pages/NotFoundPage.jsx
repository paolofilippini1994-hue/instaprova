import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <section className="page">
      <div className="page__card page__not-found">
        <h2 className="page__title">404 - Pagina non trovata</h2>
        <p className="page__subtitle">Il percorso richiesto non esiste o e' stato spostato.</p>
        <Link className="page__back-link" to="/">
          Torna alla Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
