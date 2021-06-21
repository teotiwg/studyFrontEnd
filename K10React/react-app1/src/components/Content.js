import React, {Component} from "react";

// 콘텐츠 부분도 출력내용을 props로 변경
class Content extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

export default Content;