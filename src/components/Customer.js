import React from 'react';
// 리엑트의 componenet 클래스 이자 라이브러리
class Customer extends React.Component {
    render(){
        return(
            // jsx 문법은 두개 이상의 컴포넌트를 사용할 때 무조건 div 태그로 감싸야된다.
            <div>
                <CustomerProfile id={this.props.id} image ={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>    
        )
    }
}

class CustomerProfile extends React.Component {
    render(){
        return(
            <div>
                <img src = {this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>   
            </div>
        )
    }
}


export default Customer;