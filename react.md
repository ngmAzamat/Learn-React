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
в JSX(например onClick={ имя функции }) НЕЛЬЗЯ { имя функции() } то есть параметры нельзя передатьы

strict mode - жесткий режим который должен напомнить об ошибках
import { StrictMode } from "react";
<StrictMode>тут весь return</StrictMode>;

орбработка событий в React button.jsx

далее buttonFirst.jsx

#### Reat-Router-Dom

React-Router-Dom позволяет не делать кучу проэктов по 1 страничке в каждом а сделать условные ссылки и когда по ссылкам переходишь будет отдельная страничка.

1. инсталяция - bun i react-router-dom@6 - 6 это версия

далее надо обернуть <App/> в <BrowserRouter></BrowserRouter> в main.tsx что бы подключить Routing к Проэкту

2. подключение import { BrowserRouter } from "react-router-dom";

теперь непосредственно app.tsx - import всего для routing

3. Импортирование import { Route, Routes, NavLink } from "react-router-dom";

###### как изпользовать:

для начало пишем <Routes></Routes> и в нем пишем <Route/>

1. в Route пишем path="" и component={} в path пишем путь при котором будет показан component. пример:

<Routes><Route path="/home" components={<home/>}/></Routes>

допустим пользователь перешел на "localhost:4000/gfnd"

2. можно написать: <Routes><Route path="\*" components={<NotFound/>}/></Routes> и сделать специальной NotFound.tsx

<!-- <Routes><Route path="/" element={<home/>} /></Routes> --> это означает что на условном localhost:4000/ будет поазан элемент Home

##### часть 2

у нас такой код:

<Routes>
<Route path="/about" components={<about/>}/>
<Route path="/BlogPage" components={<BlogPage/>}/>
<Route path="/home" components={<home/>}/>
</Routes>

создаем Layout.tsx:

переносим туда Link(это как тег a):

<Link path="/about" ></Link>
<Link path="/BlogPage" ></Link>
<Link path="/home" ></Link>

проблема в том что надо сделать так что бы есле мы на about <Link path="/about" ></Link> - подсвечивалась

1. пишем не Link а NavLink и теперь в CSS: color: aqua; и все - ибо NavLink по умолчанию на тот адрес который является активном пишет className={active}

<NavLink to=""> - как <a href=""> только лучше.

import { ReactNode } from "react";

#### TSX

<!-- tsx - как jsx только не конвертируется в js а в ts -->

1. особенность tsx: в props надо показать Тип и это делается с помощью interface:

interface firsts { props1: string; props2: ReactNode; }
function first({ props1, props2 }: firsts) {}

2. особенность tsx: когда для useState указываем Тип надо писать Тип в <>:

const [data, setData] = useState<number>(0)
