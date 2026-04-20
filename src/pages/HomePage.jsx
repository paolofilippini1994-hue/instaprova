import PostCard from "../components/postcard"

// Dati demo del feed principale.
const posts = [
  {
    id: 1,
    username: "paolett",
    profileImage: "https://i.pravatar.cc/40?img=12",
    image: "https://picsum.photos/500/350?random=1",
    caption: "Prima prova stile Instagram 😎",
    likes: 128,
  },
  {
    id: 2,
    username: "tonystark",
    profileImage: "https://i.pravatar.cc/40?img=15",
    image: "https://picsum.photos/500/350?random=2",
    caption: "Oggi si builda forte 🔥",
    likes: 342,
  },
  {
    id: 3,
    username: "paulette",
    profileImage: "https://i.pravatar.cc/40?img=20",
    image: "https://picsum.photos/500/350?random=3",
    caption: "Mini social React in costruzione 💻",
    likes: 89,
  },
]

function HomePage() {
  return (
    <section className="page page--home">
      <header className="page__hero">
        <h2 className="page__title">Home</h2>
        <p className="page__subtitle">Feed principale con gli ultimi post.</p>

        <div className="page__badges" aria-label="Riepilogo feed">
          <span className="page__badge">{posts.length} post disponibili</span>
          <span className="page__badge">Tema social caldo</span>
          <span className="page__badge">UI responsive</span>
        </div>
      </header>

      <div className="page__feed">
        {/* Render dinamico delle card a partire dall'array locale. */}
        {posts.map((post) => (
          <PostCard
            key={post.id}
            username={post.username}
            profileImage={post.profileImage}
            image={post.image}
            caption={post.caption}
            likes={post.likes}
          />
        ))}
      </div>
    </section>
  )
}

export default HomePage
