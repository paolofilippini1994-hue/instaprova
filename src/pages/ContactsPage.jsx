function ContactsPage() {
  return (
    <section className="page">
      <h2 className="page__title">Contatti</h2>
      <p className="page__subtitle">Scrivici per supporto o collaborazioni.</p>

      <div className="page__card">
        <h3 className="page__card-title">Canali disponibili</h3>

        {/* Link pronti per azioni rapide da desktop o mobile. */}
        <div className="page__contact-grid">
          <a className="page__contact-item" href="mailto:support@instapaolett.dev">
            <span>Email</span>
            <strong>support@instapaolett.dev</strong>
          </a>

          <a className="page__contact-item" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <strong>@instapaolett</strong>
          </a>

          <div className="page__contact-item" role="status" aria-live="polite">
            <span>Orari</span>
            <strong>Lun - Ven, 09:00 - 18:00</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsPage
