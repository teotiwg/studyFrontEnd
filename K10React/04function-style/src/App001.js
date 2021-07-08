import React from 'react';
import './App.css';

/*
아래에서 생성한 함수형/클래스형 컴포넌트를 화면에 출력하기 
위해 <컴포넌트명> 과 같은 태그 형태로 사용한다. 
*/
function App() {
  return (
    <div className="container">
      <h1>Class VS Function 스타일 컴포넌트</h1>
      {/* 
        부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할때는 
        props를 사용한다. HTML속성과 같이 사용하는 특징이 있다. 
      */}
      <FuncComponent initNumber={2}></FuncComponent>
      <ClassComponent initNumber={2}></ClassComponent>
    </div>
  );
}
/*
함수형 컴포넌트
  : 출력할 내용을 즉시 return하면 된다. 함수안에 또다른 함수를 
  사용할 수 없으므로 render()함수가 별도로 존재하지 않고, 
  자기 자신이 render() 역할을 한다. 

  부모컴포넌트에서 props로 전달한 데이터를 받을때 매개변수를 
  사용한다. 매개변수이므로 이름은 props가 아닌 다른 이름을 사용해도
  된다. 
*/
function FuncComponent(props){
  return (
    <div className="container">
      <h2>function형 컴포넌트</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  );
}
/*
클래스형 컴포넌트
  : React.Component를 상속하여 선언한다. 수명주기 함수중에 
  render()함수를 통해 랜더링 하므로 필수적으로 선언해야 한다.

  부모컴포넌트에서 전달한 props를 받을때에는 'this.props.속성명'
  으로 출력한다. 
*/
class ClassComponent extends React.Component {
  render(){
    return (      
      <div className="container">
        <h2>class형 컴포넌트</h2>
        <p>Number : {this.props.initNumber}</p>
      </div>
    );
  }
}
export default App;
