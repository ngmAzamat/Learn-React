import { NavLink } from "react-router-dom";
export default function Bar() {
  return (
    <div className="container">
      <div className="header">
        <NavLink to="/likes">Likes!!!!!!</NavLink>
        <NavLink to="/useStates">useStates</NavLink>
        <NavLink to="/StopDefault">StopDefault</NavLink>
        {/* <NavLink to="/Eventpropagation">Eventpropagation</NavLink>
        <NavLink to="/Stateless">Stateless</NavLink> */}
        <NavLink to="/Gallery">Gallery</NavLink>
        <NavLink to="/Buttons">Buttons</NavLink>
        <NavLink to="/Toolbar">Toolbar</NavLink>
        <NavLink to="/Profiles">Profiles</NavLink>
        <NavLink to="/SecondState">SecondState</NavLink>
        <NavLink to="/times">Time</NavLink>
      </div>
    </div>
  );
}
