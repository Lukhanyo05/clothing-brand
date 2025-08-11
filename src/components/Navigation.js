import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ currentPath }) {
  const menuItems = [
    { path: "/", name: "Home", show: currentPath !== "/" },
    { path: "/profile", name: "Profile", show: currentPath !== "/profile" },
    { path: "/shop", name: "Shop", show: currentPath !== "/shop" },
    {
      path: "/calculator",
      name: "Calculator",
      show: currentPath !== "/calculator",
    },
    { path: "/legal", name: "Legal", show: currentPath !== "/legal" },
  ];

  return (
    <nav className="navigation">
      <ul>
        {menuItems.map(
          (item) =>
            item.show && (
              <li key={item.path}>
                <NavLink to={item.path} activeClassName="active" exact>
                  {item.name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
