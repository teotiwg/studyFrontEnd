import React, {Component} from "react";

class Navi extends Component{

    render(){

        let lists = [];
        let data = this.props.data;
        let i = 0;

        /*
        state에서 정의한 contents를 props로 받아서 배열 크기 만큼 반복하여 li 태그 출력
        이때 warning이 뜨는데, 중복되지 않는 key prop을 지정해야 한다는 의미
        리액트의 요청사항이므로 li태그에 key속성을 추가하여 중복않는 값을 갖도록 처리 필요
        */        
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id }>{data[i].title}</a></li>);
            i++;
        }

        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Navi;


