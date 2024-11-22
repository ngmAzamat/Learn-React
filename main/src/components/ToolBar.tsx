// import React from "react";
// function AlertButton({ message, children }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// начало ChatGPt
import { ReactNode } from "react";

interface AlertButtonProps {
  message: string;
  children: ReactNode;
}

function AlertButton({ message, children }: AlertButtonProps) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

// конец ChatGPT
export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Проигровается">Проигровай Фильм!</AlertButton>
      <AlertButton message="Загружено">Загрузи Изображение!</AlertButton>
    </div>
  );
}
