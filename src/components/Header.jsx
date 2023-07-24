import { Link, NavLink } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const screenWidth = useWindowWidth();

  return (
    <header className="nav-menu-container">
      <Link className="logo" to="/">
        Rent My Plot
      </Link>
      <nav className={screenWidth > 800 ? "nav-links-container" : "hidden"}>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/plots"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Our Plots
        </NavLink>
      </nav>
    </header>
  );
}
