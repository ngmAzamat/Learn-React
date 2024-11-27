import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const HaddleClick = (event: any) => {
    event.currentTarget.classList.toggle("active");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/Likes">Likes</NavLink>
          </li>
          <li>
            <NavLink to="/UseStates">useStates</NavLink>
          </li>
          <li>
            <NavLink to="/StopDefault">StopDefault</NavLink>
          </li>
          <li>
            <NavLink to="/Gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Buttons">Buttons</NavLink>
          </li>
          <li>
            <NavLink to="/Toolbar">Toolbar</NavLink>
          </li>
          <li>
            <NavLink to="/Counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/List">List</NavLink>
          </li>
          <li>
            <NavLink to="/Stateless">Stateless</NavLink>
          </li>
          <li>
            <NavLink to="/Profiles">Profiles</NavLink>
          </li>
          <li>
            <NavLink to="/SecondState">SecondState</NavLink>
          </li>
          <li>
            <NavLink to="/Time">Time</NavLink>
          </li>
          <li>
            <NavLink to="/StateObject">StateObject</NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger" onClick={HaddleClick}>
        <span></span>
      </div>
    </>
  );
}
