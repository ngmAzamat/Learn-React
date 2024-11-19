- React не возвращяет HTML он вохвращает JSX
- JSX не обязателен - можно сделать createElement("button",null,"смайлик")

import { func } from "prop-types";
import { Component, useState } from "react";

создать проэкт без vite

- npx create-app react-demo
- cd react-demo
- npm start

export default может быть только один в файле. при export надо делать {} также можно сделать {Profile as ase} а после <ase/> // сохраня Profile как ase

JSX - нельзя <h1>что то</h1><h1>что то</h1> ибо JSX может содержать только ОДИН корневой элемент
JSX - можно <div><h1>что то</h1><h1>что то</h1></div>
елсе вам не нужно DIV: <><h1>что то</h1><h1>что то</h1></> вот это тоже можно
JSX конвертируется в JS(Typescript ЛУЧШЕ!) и поэтому class="что то" надо заменить на className="" ибо class зарезервирован в JS

JSX как JS имеет переменные - const avatar = "ссылка" и далее <img src={avatar}>
также в Фигурных скобках (только в return(JSX)) - {
имя переменных и функции(class={переменная}) { name }, { myfunk },
вызов функций или методов { myfunc() }, { message.split('').reverse().join }
вычислние { number + 1 }
условных(тернарный оператор) { ok ? "YES" : "NO" },
}

style в JSX - вместо style="background-color" - style={{backgroundColor}} и да backgroundColor БЕЗ черточки(минуса)

параметры - Props(в файле second.jsx)

children - Props другой компонент

function Parent(props) {
return <div>{props.children}</div>;
}
function other() {
return (
<Parent>
<Child /> // можно передать как children функции Parent ибо Child внутри
</Parent>
);
}

key - уникальный ключ который можно сделать что бы отличать что то
<Component key={1} />;

use State hook - при изменнении значения произходит rendering: Likes.jsx

strict mode - жесткий режим который должен напомнить об ошибках
import { StrictMode } from "react";
<StrictMode>тут весь return</StrictMode>;

орбработка событий в React button.jsx

далее buttonFirst.jsx
