// 해당 문서에서 React의 기능을 사용하기 위해 import
import { directive } from '@babel/types';
import React, {Component} from 'react';
import './App.css';

/*
// 함수형 컴포넌트(해당 실습에선 사용않음)
function App() {
  return (
    <div className="App">
     Hello React!
    </div>
  );
}
*/

/* basicForm.html의 내용을 컴포넌트로 만듦 */
/*
컴포넌트를 만들 땐 항상 하나의 최상위 태그만 있어야 함
그렇지 않으면 컴파일 에러 발생
CDN방식에선 React.Component를 상속하지만 
모듈화 방식에선 아래와 같이 상속 
*/
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        World Wide Web
      </header>
    );
  }
}

class Navi extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
    </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

// 클래스명 컴포넌트(해당 실습에서 사용)
class App extends Component{
  render(){
    return(

      <div className="App">
        {/* Hello World! */}
        <Subject></Subject>
        <Navi></Navi>
        <Content></Content>
      </div>

    );
  }
}

export default App;
