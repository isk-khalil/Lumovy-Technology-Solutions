
function Footer({ year, appName }) {
  return (
    <footer className="footer">
      <p>
        © {year} {appName}
      </p>

      <p>
        Built with React
      </p>
    </footer>
  );
}

export default Footer;
