import React, {Component} from "react";

class Navi extends Component{

    render(){

        let lists = [];
        let data = this.props.data;
        let i = 0;

        /*
        Navi에서 각 항목을 클릭했을 때 내용 변경을 위해
        data-id라는 속성 추가
        해당 속성은 이벤트를 통해 전달되며 dataset이라는 항목에서 확인 가능
        이벤트 객체.target.dataset.id 와 같이 값을 얻어올 수 있음
        */        
        while(i < data.length){
            lists.push(<li key={data[i].id}>
                <a href={"/content/" + data[i].id }
                    data-id={data[i].id}
                    onClick={function(event){
                        //console.log(event);
                        //debugger; // 실행을 잠시 멈추고 디버깅 모드로 진입시킴
                        event.preventDefault();
                        // 부모가 props로 전달해준 함수를 호출 
                        // data-id의 값을 얻어와서 함수의 인자로 전달 
                        this.props.onChangePage(event.target.dataset.id);
                    }.bind(this)}
                >{data[i].title}</a>
                </li>);
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


