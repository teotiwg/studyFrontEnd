import { directive } from '@babel/types';
import React, {Component} from 'react';
import './App.css';

import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';
import Buttons from './components/Buttons';
import CreateForm from './components/CreateForm';

class App extends Component{
  constructor(props){
    super(props);
    /*
    새로운 항목을 추가할 때 시퀀스와 같이 증가시킬 변수 필요
    현재 추가된 항목의 갯수를 초기값으로 지정
    또한 state에 추가않는 이유는화면(UI)과는 상관없는 값이므로 
    변경 시 불필요한 렌더링 방지 목적
    */
    this.max_content_id = 3;
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

    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Content title={_title} desc={_desc}></Content>;
    }
    else if(this.state.mode === 'read'){

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
      _article = <Content title={_title} desc={_desc}></Content>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateForm onSubmitValue={function(_title, _desc){
        console.log(_title, _desc);
        // 현재의 max_content_id에 1을 더함
        this.max_content_id = this.max_content_id + 1;
        /*
        기존의 배열(this.state.contents)에 
        새롭게 입력한 항목을 객체로 추가하여 새로운 배열을 생성
        concat()은 문자열인 경우 연결만 하지만,
        배열의 경우에는 두 배열을 연결한 새 배열을 반환
        */
        var _contents =this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        /*
        contents의 값을 새 배열로 변경하고,
        mode를 read로 변경
        현재 새롭게 추가한 항목의 id값으로 변경하여 내용을 출력
        */
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateForm>;
    }

    return(

      <div className="App">
        <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={function(){
              //alert('이벤트 확인용(부모)');
              this.setState({mode: 'welcome'});
            }.bind(this)}
            ></Subject>

        <Navi data={this.state.contents}
          onChangePage={function(id){
            //alert('이벤트 확인용(Navi))');
            console.log("content_id",id);
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
          });    
          }.bind(this)}></Navi>
          <Buttons onChangeMode={function(btn_mode){
            this.setState({
              mode : btn_mode
            });
          }.bind(this)}></Buttons>
          {_article}
      </div>
    );
  }
}

export default App;
