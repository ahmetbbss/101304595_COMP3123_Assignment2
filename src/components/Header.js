function Header({ username }) {
  return <header>{username && <p>Logged in as: {username}</p>}</header>;
}

export default Header;
