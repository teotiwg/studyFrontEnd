import React, {Component, useLayoutEffect} from "react";
//생성, 수정, 삭제 버튼 컴포넌트 정의
class Buttons extends Component{
    render(){
        return(
            // 리액트에서 스타일 지정 시 중괄호를 중첩해서 적용
            /* 
            버튼 클릭 시 이벤트처리를 위해 onClick핸들러를 추가하고
            함수의 인자로는 event객체를 받아옴
            화면의 깜빡임을 방지하기 위해 preventDefault()를 호출하고,
            props로 전달된 onChangeMode()를 통해 각 버튼의 mode값을 전달
            */
            <ul>
                <li style={{listStyleType: 'none'}}>
                    <input type="button" value="create" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('create');
                        }.bind(this)} />
                    <input type="button" value="update" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('update');
                        }.bind(this)} />
                    <input type="button" value="delete" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                        }.bind(this)}/>
                </li>
            </ul>
        );
    }
}
export default Buttons;