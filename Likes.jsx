function Likes() {
  const [Likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };
  return <button onClick={handleLike}>Лайков: {likes}</button>;
}
