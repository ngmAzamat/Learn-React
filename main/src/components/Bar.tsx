import { NavLink } from "react-router-dom";
export default function Bar() {
  return (
    <div className="container">
      <div className="header">
        <NavLink to="/likes">Likes</NavLink>
        <NavLink to="/UseStates">useStates</NavLink>
        <NavLink to="/StopDefault">StopDefault</NavLink>
        <NavLink to="/Counter">Counter</NavLink>
        <NavLink to="/List">List</NavLink>
        <NavLink to="/Stateless">Stateless</NavLink>
        <NavLink to="/Gallery">Gallery</NavLink>
        <NavLink to="/Buttons">Buttons</NavLink>
        <NavLink to="/Toolbar">Toolbar</NavLink>
        <NavLink to="/Profiles">Profiles</NavLink>
        <NavLink to="/SecondState">SecondState</NavLink>
        <NavLink to="/Time">Time</NavLink>
        <NavLink to="/StateObject">StateObject</NavLink>
      </div>
    </div>
  );
}
