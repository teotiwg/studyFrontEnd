import React, { Component } from 'react';

class R009_Es6 extends Component{

    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다\n다음 줄입니다.'
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        var Es6String1 = 'ES6'
        var Es6String2 = '입니다.'
        console.log('${Es6String1} 문자열{Es6String2}!!!--- 다음줄입니다.');
        // 변수는 ${변수명} 형태

        var LongString ="Es6에 추가된 String함수들입니다.";
        console.log('startWith : '+ LongString.startsWith("ES6에 추가")); // 변수 앞에서부터
        console.log('endsWith : ' + LongString.endsWith("함수들입니다.")); // 변수 뒤에서부터
        console.log('includes : ' + LongString.includes("추가된 String")); // 위치 상관없이
        // 특정 문자열이 포함됐는지 판단. 함수 조건에 부합하면 true, 부합 않으면 false 반환
    }

    render(){
        return(
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009_Es6;