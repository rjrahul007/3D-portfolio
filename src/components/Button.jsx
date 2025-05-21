const Button = ({ text, className, id, href, download, target, rel }) => {
  const handleClick = (e) => {
    // Only scroll if there's no href (means it's meant to scroll)
    if (!href && id) {
      e.preventDefault();
      const targetEl = document.getElementById("counter");
      if (targetEl) {
        const offset = window.innerHeight * 0.15;
        const top =
          targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
