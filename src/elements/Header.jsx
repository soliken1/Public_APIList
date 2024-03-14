function Header() {
  return (
    <header>
      <div className="title-container">
        <label className="font-sans-serif color-white letter-spacing-5 font-size-28">
          PublicAPIs
        </label>
      </div>
      <div className="creator-container">
        <label className="font-sans-serif color-white letter-spacing-5 font-size-28">
          Created By{" "}
          <a
            className="txt-style-none"
            href="https://github.com/soliken1"
            target="_blank"
          >
            Soliken
          </a>
        </label>
      </div>
    </header>
  );
}

export default Header;
