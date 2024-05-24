import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";
import LabelWithHighlight from "./LabelWithHighlight";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className="header-container">
        <LabelWithHighlight title="InterCalendar" boxh={1} boxw={17} />
        <div className="account-menu">
          {isLoggedIn ? (
            <div className="logged">
              <Link to="/profile" id="account-button">
                <p>MyPage</p>
              </Link>
            </div>
          ) : (
            <div className="not-logged">
              <Link to="/signup" id="account-button">
                <p>Sign Up</p>
              </Link>
              <Link to="/login" id="account-button">
                <p>Login</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
