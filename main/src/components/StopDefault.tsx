export default function StopDefault() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("Отправка!");
      }}
    >
      <input />
      <button>Отправить</button>
    </form>
  );
}
// event.preventDefault(); - нужен что бы страница не перезагрузилась ибо event.preventDefault(); отменяет стандартное поведение.
