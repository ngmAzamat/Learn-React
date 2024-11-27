import { GeneralList } from "./data";
import { useState } from "react";
export default function SecondState() {
  const [index, setIndex] = useState(0);
  const [ShowMore, SetShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }
  function handleMoreClick() {
    SetShowMore(!ShowMore);
  }
  let general = GeneralList[1];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h1>{general.name}</h1>
      <h1>{general.rank}</h1>
      <button onClick={handleMoreClick}>
        {ShowMore ? "hide" : "show"}Details
      </button>
      {ShowMore && <p>{general.listOfBattle[index]}</p>}
    </>
  );
}
