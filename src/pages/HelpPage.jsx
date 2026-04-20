function HelpPage() {
  return (
    <section className="page">
      <h2 className="page__title">Help</h2>
      <p className="page__subtitle">Guida rapida dell'app.</p>

      <div className="page__card">
        <h3>Come usare questa app</h3>
        <ul>
          <li>Vai su Home per vedere le postcard.</li>
          <li>Usa Contatti per inviare richieste o feedback.</li>
          <li>Se una pagina non esiste, verrai portato su Not Found.</li>
        </ul>
      </div>
    </section>
  )
}

export default HelpPage
