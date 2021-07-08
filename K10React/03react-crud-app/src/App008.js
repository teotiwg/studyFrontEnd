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
    /* 
    상단의 링크를 눌렀을때 mode를 welcome으로 변경하고
    Navi의 링크를 눌렀을 때 mode를 read로 변경하면서
    각 내용을 가져와서 출력하기 위해 state를 추가
    mode 추가, welcome 추가
    */
    this.state = {
      mode: 'welcome',
      welcome: {title:'Welcome', desc:'Hello, React!'}, 
      subject: {title:'WEB(st)', sub:'World Wide Web(st)'},
      contents : [
        {id:1, title:'HTML', desc:'HTML은 내용을 출력'},
        {id:2, title:'CSS', desc:'CSS는 스타일 지정'},
        {id:3, title:'JavaScript', desc:'JS는 화면을 동적제어'}
      ]
    }
  }

  render(){
    
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }
    else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }
    /*
        App컴포넌트에서 작업했던 부분을 Subject컴포넌트로 옮김
        Subject컴포넌트는 App의 입장에선 자식이므로 자식에서 부모에게
        명령을 전달하기 위해선 이벤트 사용 필수
        
        onChangePage라는 props를 통해 자식에세 함수를 전달하고
        Subject에선 그 함수를 호출하여 부모쪽으로 명령 전달
        그렇게 state값을 변경

        React 규칙
        부모 컴포넌트가 자식 컴포넌트에게 명령할 땐 props를 통해 전달
        자식이 부모에게 명령할 땐 이벤트 통해 전달
        */ 
    return(

      <div className="App">
        {/* Hello World! */}
        <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={function(){
              alert('이벤트 확인용(부모)');
              this.setState({mode: 'welcome'});
            }.bind(this)}
            ></Subject>
        <Navi data={this.state.contents}></Navi>
        <Content title={_title} desc={_desc}></Content>
      </div>

    );
  }
}

export default App;
