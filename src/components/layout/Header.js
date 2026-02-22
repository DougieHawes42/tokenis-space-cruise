import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <Link to="/">
          <h1 className="header-title">Tokeni's Space Cruise</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
