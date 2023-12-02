function Header({ username }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e1e1e1",
      }}
    >
      <h1 style={{ margin: "0", fontSize: "24px" }}>Employee Management App</h1>
      {username && (
        <p style={{ margin: "0", fontSize: "18px" }}>
          Logged in as: {username}
        </p>
      )}
    </header>
  );
}

export default Header;