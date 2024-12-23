export function Avatar(props: any) {
  let person = props.person;
  let size = props.size;
  return (
    <img
      src="src"
      className="any"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profiles() {
  return (
    <Avatar size={100} person={{ name: "the one ring", imageId: "jfey3673" }} />
  );
}
