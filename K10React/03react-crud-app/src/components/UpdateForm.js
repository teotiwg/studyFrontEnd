import React, {Component} from "react";

// 게시물 수정을 위한 수정폼
class UpdateForm extends Component{
    // state 추가 위한 생성자 선언
    constructor(props){
        super(props);
        // props로 전달된 데이터를 state 초기화
        this.state = {
            id : this.props.readData.id,
            title : this.props.readData.title,
            desc : this.props.readData.desc
        }
    }
    /* 
    각 input상자에서 입력한 내용이 있을때 state값을 변경하기 위한 화살표함수
    setState의 name부분은 input의 name, 그리고 state의 key와 동일한 값 가짐
    */
    inputChangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
        return(
            <article>
                <h2>Update</h2>
                {/* 서브밋 이벤트 리스너에서 이벤트 객체를 통해 입력한 값 전송 */}
                <form action="/create_process" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmitValue(
                        e.target.id.value,
                        e.target.title.value,
                        e.target.desc.value
                    );
                }.bind(this)}>
                {/*기존 게시물에 대한 수정이므로 게시물 아이디를 저장할 hidden상자 필요 */}
                {/*
                App.js에서 기존 게시물을 읽어온 후 
                props를 통해 전달한 데이터를 각 input상자에 삽입
                하지만 값을수정하는 건 불가능
                props는 읽기전용이므로 값을 수정하려면 반드시 state를 통해서만 가능
                */}
                {/* 
                읽기전용인 props값은 변경할수 없으므로 state값을 통해 입력값 변경
                값이 변경될 때 onChange이벤트 통해 
                inputChangeHandler()함수를 호출하여 state값 변경
                */}
                    <input type="hidden" name="id" value={this.state.id} />
                    <p><input type="text" name="title" placeholder="제목입력" 
                        value={this.state.title}
                        onChange={this.inputChangeHandler} /></p>
                    <p><textarea name="desc" placeholder="내용입력"
                        value={this.state.desc}
                        onChange={this.inputChangeHandler} ></textarea></p>
                    <p><input type="submit" value="전송" /></p>
                </form>
            </article>
        );
    }
}
export default UpdateForm;