import { Route, Routes } from "react-router-dom";

import "./App.css";
import Bar from "./components/Bar.tsx";
import StopDefault from "./components/UseStates.tsx";
// import Stateless from "./components/Stateless.tsx";
// import onClickButtons from "./components/onClickButtons.tsx";
import UseStates from "./components/UseStates.tsx";
import Likes from "./components/Likes.tsx";
import Time from "./components/Time.tsx";
import Gallery from "./components/Gallerey.tsx";
import Buttons from "./components/button.tsx";
import SecondState from "./components/SecondState.tsx";
import Toolbar from "./components/ToolBar.tsx";
import Profiles from "./components/Profiles.tsx";

export default function App() {
  return (
    <>
      <Bar />
      <Routes>
        <Route path="/SecondState" element={<SecondState />} />
        <Route path="/useStates" element={<UseStates />} />
        <Route path="/times" element={<Time />} />
        <Route path="/StopDefault" element={<StopDefault />} />
        {/* <Route path="/onClickButtons" element={<onClickButtons />} /> */}
        {/* <Route path="/Stateless" element={<Stateless/>}> */}
        <Route path="/likes" element={<Likes />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Buttons" element={<Buttons />} />
        <Route path="/Toolbar" element={<Toolbar />} />
        <Route path="/Profiles" element={<Profiles />} />
      </Routes>
    </>
  );
}
