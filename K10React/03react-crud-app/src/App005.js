// 해당 문서에서 React의 기능을 사용하기 위해 import
import { directive } from '@babel/types';
import React, {Component} from 'react';
import './App.css';

/*
외부 js파일로 모듈화된 컴포넌트를 해당 문서로 import하기 위한 구문으로,
export default로 지정한 이름을 그대로 사용하면 됌
형식)
import 변수명 from '컴포넌트경로';
*/
import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';

// 클래스명 컴포넌트(해당 실습에서 사용)
class App extends Component{
  // state를 추가하기 위해 생성자 정의
  constructor(props){
    super(props);
    // state를 생성 및 초기화
    this.state = {
      subject: {title:'WEB(st)', sub:'World Wide Web(st)'},
      contents : [
        {id:1, title:'HTML', desc:'HTML은 내용을 출력'},
        {id:2, title:'CSS', desc:'CSS는 스타일 지정'},
        {id:3, title:'JavaScript', desc:'JS는 화면을 동적제어'}
      ]
    }
  }
  /*
  Navi 컴포넌트에 반복되는 링크를 for문으로 처리하기 위해
  state에 contents 항목 추가
  객체 3개를 저장한 배열의 형태

  Navi 컴포넌트에 prop를 통해 전달
  */
  render(){
    return(

      <div className="App">
        {/* Hello World! */}
        <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}>
        </Subject>
        <Navi data={this.state.contents}></Navi>
        <Content title="HTML(pr)" desc="HTML is HyperText Markup Language(pr)"></Content>
      </div>

    );
  }
}

export default App;
