import { Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import StopDefault from "./components/UseStates.tsx";
// import Stateless from "./components/Stateless.tsx";
// import Eventpropagation from "./components/eventpropagation.tsx";
import UseStates from "./components/UseStates.tsx";
import Likes from "./components/Likes.tsx";
import Gallery from "./components/Gallerey.tsx";
import Buttons from "./components/button.tsx";
import Toolbar from "./components/ToolBar.tsx";
import Profiles from "./components/Profiles.tsx";

export default function App() {
  const Bar = (
    <div className="container">
      <div className="header">
        <NavLink to="/likes">Likes!!!!!!</NavLink>
        <NavLink to="/useStates">useStates</NavLink>
        <NavLink to="/StopDefault">StopDefault</NavLink>
        <NavLink to="/Eventpropagation">Eventpropagation</NavLink>
        <NavLink to="/Stateless">Stateless</NavLink>
        <NavLink to="/Gallery">Gallery</NavLink>
        <NavLink to="/Buttons">Buttons</NavLink>
        <NavLink to="/Toolbar">Toolbar</NavLink>
        <NavLink to="/Profiles">Profiles</NavLink>
      </div>
    </div>
  );
  return (
    <>
      <Routes>
        <Route path="/useStates" element={<UseStates />} />
        <Route path="/StopDefault" element={<StopDefault />} />
        {/* <Route path="/Eventpropagation" element={<Eventpropagation />} /> */}
        {/* <Route path="/Stateless" element={<Stateless/>}> */}
        <Route path="/likes" element={<Likes />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Buttons" element={<Buttons />} />
        <Route path="/Toolbar" element={<Toolbar />} />
        <Route path="/Profiles" element={<Profiles />} />
      </Routes>
      {Bar}
    </>
  );
}
