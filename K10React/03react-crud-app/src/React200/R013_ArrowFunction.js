import  React, {Component} from 'react';

class R013_ArrowFunction extends Component{

    constructor(props){
        super(props);
        this.state={
            arrowFunc:'React200',
            num: 3
        };
    }

    // Function1~5 호출
    componentDidMount(){
        Function1(1);
        this.Function2(1, 1);
        this.Function3(1, 3);
        this.Function4();
        this.Function5(0, 2, 3);

        // 함수 호출할 때 전달받은 num1이라는 변수를 함수 내부에서 사용 가능
        function Function1(num1){
            return console.log(num1 + '. Es5 Function');
        }
    }
    // function 대신에 "=>"로 선언
    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3 + '. Arrow Function : ' + this.state.arrowFunc);
        /*
        함수 내에서 사용된 this는 R013ArrowFunction 컴포넌트인데,
        this로 컴포넌트의 statr 변수에 접근 가능
         */
    }

    Function3(){
        var this_bind = this;
        setTimeout(function(){
            console.log(this_bind.state.num + '. Es5 Callback Function noBind: ');
            console.log(this.state.arrowFunc);// 콜백함수 내에서 this는 윈도객체이기에 this로 state에 접근하면 에러 발생
        }, 100);/* 콜백 함수 내부에선 컴포넌트에 this로 접근 불가하기에
                    접근할 수 있는 변수에 this를 백업
                    백업된 변수인 this_bind를 이용해 컴포넌트의 state변수에 접근 가능 */
    }

    Function4(){
        setTimeout(function(){
            console.log('4. Es5 Callback Function Bind: ' + this.state.arrowFunc);
        }.bind(this), 100); // 콜백함수에 함수 밖의 this를 bind 해주면 this를 컴포넌트로 사용 가능
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4 + '. Arrow Callback Function : ' + this.state.arrowFunc);
        }, 100); //화살표 함수는 this를 bind해주지 않아도 this를 컴포넌트로 사용해 state변수에 접근 가능
    }

    render(){
        return(
            <h2>[This is ArrowFunction]</h2>
        )
    }
}

export default R013_ArrowFunction;