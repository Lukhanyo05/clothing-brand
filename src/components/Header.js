import React from "react";
import "./Header.css"; // Create this file for styling

function Header({ isLoggedIn, userName }) {
  return (
    <header className="header">
      <div className="logo">Unique Tees</div>
      {isLoggedIn ? (
        <div>Welcome back, {userName}!</div>
      ) : (
        <button className="sign-in-btn">Sign In</button>
      )}
    </header>
  );
}

export default Header;
