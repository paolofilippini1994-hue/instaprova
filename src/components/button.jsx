function Button({children, color = "blue", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "auto",
        display: "block",
        paddingTop: "10px",
      }}
    >
      {children}
    </button>
  )
}

export default Button