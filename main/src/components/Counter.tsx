import { useState } from "react";
export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <h1>{number}</h1>
    </>
  );
}
// допустим у нас в onclick setNumber(number + 1); сделаем три раза это вместо одного. вопрос: после нажатия в h1 будет 3 или нет?
// ответ: нет ибо при текушем рендере мы не увидим обнавленное значение number поэтому мы выполненяем текущий render так:
// первый setNumber(number + 1); : итак наше значение 0 становиться 1(НО ТОЛЬКО ПРИ СЛЕДУЮЩИМ RENDER)
// второй setNumber(number + 1); : итак наше значение 0 становиться 1(НО ТОЛЬКО ПРИ СЛЕДУЮЩИМ RENDER)
// третьий setNumber(number + 1); : итак наше значение 0 становиться 1(НО ТОЛЬКО ПРИ СЛЕДУЮЩИМ RENDER)
// допутим мы сделаем н 2 дополнительных setNumber а один setTimeout(() => alert(number),5000) вопрос что будет в alert:
// ответ: 0 ибо alert этот в текущем render вот работа текущего render:
// setNumber(number + 1); : итак наше значение 0 становиться 1(НО ТОЛЬКО ПРИ СЛЕДУЮЩИМ RENDER)
// setTimeout(() => alert(number),5000) : alert(0) так как alert был вызван в текущем render а setNumber() работает на следующий render.
// почему это произходит: допустим react офизиант мы просим setColor('red'); setColor('blue'); setColor('orange'); офизиант не бежит на кухню сразу а ждет пока все заказы будут сделаны и принисет на кухню окончательное решение: setColor('orange');

// допустим нам надо все же сделать +3 при нажатии на кнопку:
// первый setNumber((n) => n + 1);
// второй setNumber((n) => n + 1);
// третьий setNumber((n) => n + 1);
// и тут все работает дело в том мы сперва увелчеваем значение n до 1, 2, а потом до 3 и это будет значение number есле раньше мы увеличивали напрямую number НО number меняется только при rerender а n  меняется всегда
//но можно сделать так
// setNumber(number + 2);
// setNumber((n) => n + 1);
// это сработает потому что второй setNumber не с значением number которое 0 а с n которое 2
