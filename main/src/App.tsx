import { useState } from "react";
import "./App.css";
import Likes from "./Likes.tsx";
import Gallery from "./first.tsx";
import Buttons from "./button.tsx";
import Toolbar from "./buttonFirst.tsx";
import Profiles from "./second.tsx";

export default function App() {
  const [component, setComponent] = useState<string>("");

  async function clickLikes() {
    setComponent("Likes");
  }
  async function clickButton() {
    setComponent("Buttons");
  }
  async function clickSecondButtons() {
    setComponent("Toolbar");
  }
  async function clickGallerey() {
    setComponent("Gallery");
  }
  async function clickImage() {
    setComponent("Profiles");
  }

  const Bar = (
    <div className="container">
      <div className="header">
        <button onClick={clickLikes}>Лайки</button>
      </div>
      <div className="header">
        <button onClick={clickButton}>Кнопка</button>
      </div>
      <div className="header">
        <button onClick={clickSecondButtons}>Кнопка(поломанная)</button>
      </div>
      <div className="header">
        <button onClick={clickGallerey}>Галерея</button>
      </div>
      <div className="header">
        <button onClick={clickImage}>картина</button>
      </div>
    </div>
  );

  const collection = new Map();
  collection.set("Likes", Likes);
  collection.set("Gallery", Gallery);
  collection.set("Buttons", Buttons);
  collection.set("Toolbar", Toolbar);
  collection.set("Profiles", Profiles);

  if (collection.has(component)) {
    const ThisComponent = collection.get(component);
    return (
      <>
        {Bar}
        <ThisComponent />
      </>
    );
  } else {
    return <>{Bar}</>;
  }

  // switch (component) {
  //   case "likes":
  //     return (
  //       <>
  //         {Bar}
  //         <Likes />
  //       </>
  //     );
  //   case "Toolbar":
  //     return (
  //       <>
  //         {Bar}
  //         <Toolbar />
  //       </>
  //     );
  //   case "Gallery":
  //     return (
  //       <>
  //         {Bar}
  //         <Gallery />
  //       </>
  //     );
  //   case "Profiles":
  //     return (
  //       <>
  //         {Bar}
  //         <Profiles />
  //       </>
  //     );
  //   case "Buttons":
  //     return (
  //       <>
  //         {Bar}
  //         <Buttons></Buttons>
  //       </>
  //     );
  //   default:
  //     return { Bar };
  // }

  // if (component === "likes") {
  //   return (
  //     <>
  //       {Bar}
  //       <Likes />
  //     </>
  //   );
  // } else if (component === "Toolbar") {
  //   return (
  //     <>
  //       {Bar}
  //       <Toolbar />
  //     </>
  //   );
  // } else if (component === "Gallery") {
  //   return (
  //     <>
  //       {Bar}
  //       <Gallery />
  //     </>
  //   );
  // } else if (component === "Profiles") {
  //   return (
  //     <>
  //       {Bar}
  //       <Profiles />
  //     </>
  //   );
  // } else if (component === "Buttons") {
  //   return (
  //     <>
  //       {Bar}
  //       <Buttons></Buttons>
  //     </>
  //   );
  // } else {
  //   return { Bar };
  // }
}
