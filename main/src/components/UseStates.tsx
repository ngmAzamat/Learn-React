import { GeneralList } from "./data";
import { useState } from "react";
export default function UseStates() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  let general = GeneralList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h1>{general.name}</h1>
      <h1>{general.rank}</h1>
      <h1>{general.listOfBattle[index]}</h1>
    </>
  );
}
