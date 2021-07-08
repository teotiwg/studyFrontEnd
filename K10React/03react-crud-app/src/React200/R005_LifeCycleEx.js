import React, { Component } from 'react';
/*
constructor(props)함수는 생명주기 함수 중 가장 먼저 실행되며,
처음 한 번만 호출됌
component 내부에서 사용되는 변수(state)를 선언하고,
부모 객체에서 전달받은 함수(props)를 초기화할 때 사용
super()함ㅅ는 가장 위에 호출해야 함
*/
class R005_LifeCycleEx extends Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    render(){
        console.log('3. render Call');
        return(
            <h2>[This is Constructor Function]</h2>
        )
    }
}

export default R005_LifeCycleEx;