import React, {Component} from 'react';

class R010_Variable extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        /*
        var 변수는 재선언과 재할당을 허용하기에
        경고 메시지가 출력되어도, 페이지는 정상적으로 표시됌
        */
        var varName = 'react';
        console.log('varName1 : ' + varName);
        var varName = '200';
        console.log('varName2 : ' + varName);

        /* 
        let 변수는 재선언은 허용 않지만, 재할당은 허용
        */
        let letName = 'react'
        console.log('letName1 : ' + letName);
        letName = 'react200';
        console.log('letName2 : ' + letName);
        /*
        const변수는 재선언과 재할당 둘 다 허용 않음
        */
        const constName = 'react';
        console.log('constName : ' + constName);
    }

    render(){
        return(
            <h2>[This is Variable]</h2>
        )
    }
}

export default R010_Variable;