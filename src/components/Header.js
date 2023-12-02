function Header({ username }) {
  return (
    <header>
      {username && (
        <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '16px' }}>
          Logged in as: {username}
        </p>
      )}
    </header>
  );
}

export default Header;
