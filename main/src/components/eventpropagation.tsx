import { ReactNode } from "react";

interface a {
  onClick: any;
  children: ReactNode;
}

function ButtonWithotPropagation({ onClick, children }: a) {
  return <button onClick={onClick}>{children}</button>;
}
export default function Eventpropagation() {
  <div
    className=""
    onClick={() => {
      alert("вы нажали на тулбар!");
    }}
  >
    <ButtonWithotPropagation onClick={() => alert("Проигровается!")}>
      Проигровай Фильм
    </ButtonWithotPropagation>
    <ButtonWithotPropagation onClick={() => alert("Загружается!")}>
      Загрузи изображение
    </ButtonWithotPropagation>
  </div>;
}
// итак когда мы нажмем на ButtonWithotPropagation условно первый то тогда не только будет Проигровается! но еже будет вы нажали на тулбар!
// ибо в React есть такая штука как Всплытие Событий - когда какоето Дочерние событие произходит то тогда Триггерит событие выше по дерву(то есть для ButtonWithotPropagation это - div)
// что бы избежать этого при onClick в ButtonWithotPropagation пишем не   return <button onClick={onClick}>{children}</button>;
// а - return <button onClick={(theEvent) => () {e.stopPropagation(); onClick();}}>{children}</button>;
