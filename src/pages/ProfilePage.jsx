import "./ProfilePage.scss"

const highlights = ["Viaggi", "Workout", "Progetti", "Weekend"]

const gallery = [
  "https://picsum.photos/300/300?random=11",
  "https://picsum.photos/300/300?random=12",
  "https://picsum.photos/300/300?random=13",
  "https://picsum.photos/300/300?random=14",
  "https://picsum.photos/300/300?random=15",
  "https://picsum.photos/300/300?random=16",
]

function ProfilePage({ loggedUsername }) {
  // Fallback quando l'utente non e' valorizzato nello stato globale.
  const username = loggedUsername || "paolett"

  return (
    <section className="page profile-page">
      <header className="profile-page__header-card">
        <img
          className="profile-page__avatar"
          src="https://i.pravatar.cc/120?img=12"
          alt={`Avatar di ${username}`}
        />

        <div className="profile-page__identity">
          <div className="profile-page__username-row">
            <h2 className="profile-page__username">{username}</h2>
            <button type="button" className="profile-page__edit-btn">
              Modifica profilo
            </button>
          </div>

          <ul className="profile-page__stats" aria-label="Statistiche profilo">
            <li>
              <strong>18</strong> post
            </li>
            <li>
              <strong>1.2k</strong> follower
            </li>
            <li>
              <strong>389</strong> seguiti
            </li>
          </ul>

          <p className="profile-page__bio">
            Paolo Developer
            <br />
            React, design e caffe.
            <br />
            Building mini social app ogni giorno.
          </p>

          <div className="profile-page__quick-actions" aria-label="Azioni profilo">
            <button type="button" className="profile-page__quick-btn">
              Condividi profilo
            </button>
            <button type="button" className="profile-page__quick-btn profile-page__quick-btn--ghost">
              Impostazioni
            </button>
          </div>
        </div>
      </header>

      <section className="profile-page__highlights" aria-label="In evidenza">
        <h3 className="profile-page__section-title">Highlights</h3>

        {/* Ogni voce evidenza e' generata dall'array highlights. */}
        {highlights.map((item) => (
          <div key={item} className="profile-page__highlight-item">
            <span className="profile-page__highlight-ring" />
            <span className="profile-page__highlight-label">{item}</span>
          </div>
        ))}
      </section>

      <section className="profile-page__gallery" aria-label="Galleria post">
        <h3 className="profile-page__section-title profile-page__section-title--gallery">I tuoi post</h3>

        {/* Gallery a griglia alimentata dall'array di immagini demo. */}
        {gallery.map((image, index) => (
          <article key={image} className="profile-page__tile">
            <img src={image} alt={`Post ${index + 1} di ${username}`} />
          </article>
        ))}
      </section>
    </section>
  )
}

export default ProfilePage