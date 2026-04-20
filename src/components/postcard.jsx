import "../components/postcard/PostCard.scss"

function PostCard({ username, profileImage, image, caption, likes = 0 }) {
  const avatarSrc =
    profileImage ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=f0f0f0&color=333`

  return (
    <div className="post-card">
      <div className="post-card__header">
        <img
          src={avatarSrc}
          alt={`Foto profilo di ${username}`}
          className="post-card__avatar"
        />
        <span>@{username}</span>
      </div>

      <img src={image} alt={`Post di ${username}`} className="post-card__image" />

      <div className="post-card__actions" aria-label="Azioni post">
        <button type="button" className="post-card__icon-button" aria-label="Metti like">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12 21s-6.716-4.41-9.192-8.193C.972 10.018 1.4 6.5 4.2 4.7A5.38 5.38 0 0 1 12 6.5a5.38 5.38 0 0 1 7.8-1.8c2.8 1.8 3.228 5.318 1.392 8.107C18.716 16.59 12 21 12 21Z" />
          </svg>
        </button>

        <button type="button" className="post-card__icon-button" aria-label="Commenta">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M4 4h16v12H7l-3 3V4Zm2 2v8.17L6.17 14H18V6H6Z" />
          </svg>
        </button>
      </div>

      <div className="post-card__content">
        <p className="post-card__likes">{likes} Mi piace</p>
        <p>
          <strong>@{username}</strong> {caption}
        </p>
      </div>
    </div>
  )
}

export default PostCard