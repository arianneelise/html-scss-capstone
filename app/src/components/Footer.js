const Footer = (props) => {
  const page = `${props.page}-footer`;

  return (
    <footer className={page}>
      <div>
        <a className="link">ABOUT</a>
        <a className="link">PARENT PAGE</a>
      </div>
      <div>
        Hestia | Developed by <a>Themelsle</a>
      </div>
    </footer>
  );
};

export default Footer;
