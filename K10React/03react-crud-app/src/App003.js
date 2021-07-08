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
