export default function List() {
  const Starks = ["Eddard", "Robb", "Bran", "Rikon", "Sansa", "Arya"];
  const listItems = Starks.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
