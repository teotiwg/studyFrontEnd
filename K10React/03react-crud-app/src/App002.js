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
    /* 
    Subject컴포넌트를 렌더링 시 속성으로 추가한 내용을 
    props로 얻어와서 적용
    */
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
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
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

// 클래스명 컴포넌트(해당 실습에서 사용)
class App extends Component{
  /*
  props는 컴포넌트 추가 시 HTML의 속성처럼 추가하는 부분으로
  사용할 땐 "this.props.속성명"으로 기술
  */
  render(){
    return(

      <div className="App">
        {/* Hello World! */}
        <Subject title="WEB(pr)" sub="Wirld Wide Web(pr)"></Subject>
        <Navi></Navi>
        <Content title="HTML(pr)" desc="HTML is HyperText Markup Language(pr)"></Content>
      </div>

    );
  }
}

export default App;
