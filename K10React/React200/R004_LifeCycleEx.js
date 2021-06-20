import React, { Component } from 'react';
/*
React에서 생명주기란?
component의 생성, 변경, 소멸의 과정
render(), constructor(), getDerivedStateFormProps(), componentDidMount()함수 모두 생성과정
*/
class R004_LifeCycleEx extends Component {
    render(){ {/*render()는 리턴되는 html형식의 코드를 화면에 그려주는 함수로
                화면 내용이 변경되어야 할 시점에 자동으로 호출됌 */}
        console.log('3. render Call');
        return(
            <h2>[This is render function]</h2>
        )
    }
}

export default R004_LifeCycleEx;