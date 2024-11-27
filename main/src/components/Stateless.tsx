import { GeneralList } from "./data";
export default function Stateless() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }
  let general = GeneralList[1];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h1>{general.name}</h1>
      <h1>{general.rank}</h1>
      <h1>{general.listOfBattle[index]}</h1>
    </>
  );
}
// здесть после next index изменнится но ни чего не изменнится ибо при изменнении переменных страница не перересуется
