function HelpPage() {
  return (
    <section className="page">
      <h2 className="page__title">Help</h2>
      <p className="page__subtitle">Guida rapida dell'app.</p>

      <div className="page__grid">
        <article className="page__card">
          <h3 className="page__card-title">Come usare questa app</h3>
          <ul className="page__list">
            <li>Apri Home per vedere il feed con le postcard.</li>
            <li>Visita Profilo per statistiche, highlights e gallery.</li>
            <li>Contatti contiene i canali per supporto e feedback.</li>
          </ul>
        </article>

        <article className="page__card">
          <h3 className="page__card-title">Suggerimenti rapidi</h3>
          <ul className="page__list">
            <li>Usa la navbar in alto per passare tra pagine.</li>
            <li>Il pulsante Logout riporta al form di accesso.</li>
            <li>Ogni sezione e' ottimizzata anche per mobile.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default HelpPage
