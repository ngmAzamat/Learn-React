import React from "React";
export default function AlertButtons({ message, children }) {
  return (
    <button
      onClick={() => {alert("вы нажали на кнопку");}}>{message}</button>
  );
}
export default function Toolbar() {
  return (
    <div>
    <AlertButtons message="Проигровается">Проигровай Фильм!</AlertButtons>
    <AlertButtons message="Загружено">Загрузи Изображение!</AlertButtons>
    </div>
  )};