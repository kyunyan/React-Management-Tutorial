import React from 'react';
// 리엑트의 componenet 클래스 이자 라이브러리
class Customer extends React.Component {
    render(){
        return(
        <div>
            <h2>{this.props.name}</h2> 
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>   
        </div>
        )
    }
}


export default Customer;