// 해당 문서에서 React의 기능을 사용하기 위해 import
import { directive } from '@babel/types';
import React, {Component} from 'react';
import './App.css';

import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';

class App extends Component{
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
      selected_content_id: 2,
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
      //_title = this.state.contents[0].title;
      //_desc = this.state.contents[0].desc;
      /*
      selected_content_id값과 일치하는 객체를 찾아서 제목과 내용 부분을 설정
      */
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break; 
        }
        i++;
      }
    }
    /*
    Subject에 작성했던 이벤트를 Navi에도 붙여줌
        */
    return(

      <div className="App">
        {/* Hello World! */}
        <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={function(){
              //alert('이벤트 확인용(부모)');
              this.setState({mode: 'welcome'});
            }.bind(this)}
            ></Subject>
        {/* 자식(Navi)에서 보내준 data-id값을 인자로 받은 후 
            selected_content_id값을 변경 
        */}
        <Navi data={this.state.contents}
          onChangePage={function(id){
            //alert('이벤트 확인용(Navi))');
            console.log("content_id",id);
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
          });    
          }.bind(this)}></Navi>
        <Content title={_title} desc={_desc}></Content>
      </div>

    );
  }
}

export default App;
