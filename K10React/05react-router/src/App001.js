/*
react-router-dom
  : 리엑트는 기본적으로 화면의 새로고침 없이 화면을 갱신한다. 이경우
  주소가 하나로 고정되기 때문에 즐겨찾기와 같은 기능을 사용할 수 없다. 
  어떤 주소로 들어왔을때 그 주소를 알아내어 그에 해당하는 컴포넌트를 
  렌더링하고, 그 상태를 관리하기 위해 내부적으로 state나 props를 관리할수
  있게 해주는 도구가 react-router-dom이다. 
*/
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
/*
BrowserRouter 
  : 리엑트 라우터 돔을 적용하고 싶은 컴포넌트의 최상위 컴포넌트를
  감싸주는 Wrapper(래퍼)로 사용한다. 
Route 
  : URL에 따른 적당한 컴포넌트를 렌더링 하기 위해 사용하는 컴포넌트이다. 
Switch
  : URL과 일치하는 첫번째 컴포넌트가 발견되면 나머지 컴포넌트는 아예
  렌더링 하지 않는 역할을 한다. 즉 최초로 발견되는 컴포넌트 하나만 렌더링
  한다. 
Link
  : 현재 링크를 클릭할때마다 페이지가 새로고침되어 갱신된다. 리엑트는 화면의
  깜빡임없이 화면이 갱신되어야 하므로, 링크를 눌렀을때 페이지가 리로드 되지
  않도록 처리해준다. 
NavLink
  : Link와 동일한 기능을 제공하지만, 추가적으로 class 속성을 
  엘리먼트에 삽입해준다.
*/

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home컴포넌트
    </div>
  );
}
function Topics(){
  return (
    <div>
      <h2>Topics</h2>
      Topics컴포넌트
    </div>
  );
}
function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      Contact컴포넌트
    </div>
  );
}
/**
exact : <Route 컴포넌트에 삽입하면 path(경로)와 정확히 일치하는
  경우에만 라우팅 된다. 만약 포함하지 않으면 Topics를 눌렀을때 
  Home이 같이 보이는 문제가 발생한다. 
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello React Router DOM</h1>
        <ul>
          <li><a href="/">Home(a)</a></li>
          <li><a href="/Topics">Topics(a)</a></li>
          <li><a href="/Contact">Contact(a)</a></li>
        </ul>
        <ul>
          <li><NavLink exact to="/">Home(Link)</NavLink></li>
          <li><NavLink to="/Topics">Topics(Link)</NavLink></li>
          <li><NavLink to="/Contact">Contact(Link)</NavLink></li>
        </ul>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/Topics"><Topics></Topics></Route>
        <Route path="/Contact"><Contact></Contact></Route>

        <h3>Switch적용하기</h3>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/Topics"><Topics></Topics></Route>
          <Route path="/Contact"><Contact></Contact></Route>
          <Route path="/">404:Page Not Found</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
