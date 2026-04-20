function Card({ children, shadow = "light" }) {
  const shadows = {
    none: "none",
    light: "0 2px 8px rgba(0,0,0,0.1)",
    medium: "0 4px 15px rgba(0,0,0,0.2)",
    strong: "0 8px 25px rgba(0,0,0,0.3)",
  }

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        boxShadow: shadows[shadow],
        background: "#fff",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  )
}

export default Card