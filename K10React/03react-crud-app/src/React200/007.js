import React from 'react';
import './App.css';
import LifeCycleEx from './React200/R007_LifeCycleEx'

function App(){
  return(
    <div>
      <h1>Start React 200!</h1>
      <p>Css 적용</p>
      <LifeCycleEx
        prop_value = 'FromApp.js'
        />
    </div>
  );
}

export default App;
