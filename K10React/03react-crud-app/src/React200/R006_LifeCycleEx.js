import React, {Component} from 'react';

class R006_LifeCycleEx extends Component{
    /*
    getDerivedStateFromProps(props, state)함수는
    constructor()함수 다음으로 실행됌
    컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해줌
    */
    static getDerivedStateFromProps(props, state){
        console.log('2.getDerivedStateFromProps Call: ' + props.prop_value);
        return{};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>[This is Constructor Function ] </h2>
        )
    }
}

export default R006_LifeCycleEx;