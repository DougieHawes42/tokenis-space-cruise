import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <h1 className="header-title">
          <span className="header-title-initial">T</span>okeni's{" "}
          <span className="header-title-initial">S</span>pace{" "}
          <span className="header-title-initial">C</span>ruise
        </h1>
      </div>
    </header>
  );
};

export default Header;
