import React from 'react';
import './App.css';
import ImportConponent from './React200/R003_ImportComponent'

function App(){
  return(
    <div>
      <h1>Start React 200!</h1>
      <p>Css 적용</p>
      <ImportConponent></ImportConponent> {/* 
        R003_ImportComponent에서 작성한 component 사용
        render()함수에서 읽어들였던  
        <h2>[This is Imported Component]</h2>
        코드 이식됌*/}  
    </div>
  );
}
export default App;