import { Route, Routes } from "react-router-dom";

import "./App.css";
import Bar from "./components/Bar.tsx";
import StopDefault from "./components/StopDefault.tsx";
import Stateless from "./components/Stateless.tsx";
import UseStates from "./components/UseStates.tsx";
import StateObject from "./components/StateObject.tsx";
import List from "./components/List.tsx";
import Counter from "./components/Counter.tsx";
import Likes from "./components/Likes.tsx";
import Time from "./components/Time.tsx";
import Burger from "./components/Burger.tsx";
import Gallery from "./components/Gallerey.tsx";
import Button from "./components/Button.tsx";
import SecondState from "./components/SecondState.tsx";
import Toolbar from "./components/ToolBar.tsx";
import Profiles from "./components/Profiles.tsx";

export default function App() {
  return (
    <>
      <Burger />
      <Bar />
      <Routes>
        <Route path="/SecondState" element={<SecondState />} />
        <Route path="/UseStates" element={<UseStates />} />
        <Route path="/Time" element={<Time />} />
        <Route path="/StopDefault" element={<StopDefault />} />
        <Route path="/List" element={<List />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Stateless" element={<Stateless />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Buttons" element={<Button />} />
        <Route path="/Toolbar" element={<Toolbar />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/StateObject" element={<StateObject />} />
      </Routes>
    </>
  );
}

// Gallerey
// onClickButtons
// Profiles
