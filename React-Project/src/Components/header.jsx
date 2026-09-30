
function Header({ title }) {
  return (
    <header className="header">
      <p className="header-subtitle">
        Stay organized and productive
      </p>

      <h1>{title}</h1>

      <p className="header-description">
        Manage your daily tasks in one simple place.
      </p>
    </header>
  );
}

export default Header;