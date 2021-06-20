import React, { Component } from 'react';
/*
shouldComponentUpdate()함수는
리액트 생명주기에서 component의 변경 과정에 속함
props 나 state의 변경 의미
*/
class R008_LifeCycleEx extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call: ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    // componentDidMount()함수는 생성 함수 중 가장 마지막에 실행
    componentDidMount(){
        console.log('4. componentDidMount Call'); 
        console.log('5. tmp_state: ' + this.state.tmp_state);
        this.setState({tmp_state2: true}); //setState()는 변수의 선언과 초기화를 동시 실행
    }
/* 
앞에서 state의 변경이 발생했기에 '변경' 단계의 shouldComponentUpdate() 실행됌
이 함수는 boolean유형의 데이터를 반환하는데
return값이 true일 경우 render()함수를 한 번 더 호출함

이 점을 이용해 props나 state변수가 변경될 때 화면을 다시 그리며 제어 가능
*/
    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS shouldComponentUpdate Function]</h2>
        )
    }
}

export default R008_LifeCycleEx;