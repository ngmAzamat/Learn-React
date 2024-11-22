import { useState } from "react";

export default function Likes() {
  const [Likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(Likes + 1);
  };
  return <button onClick={handleLike}>Лайков: {Likes}</button>;
}
