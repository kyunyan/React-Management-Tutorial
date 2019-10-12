import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  "name" : "이건완"
, "birthday" : "920211"
, "gender" : "남자"
, "job" : "개발자"  
}
// componenet web문에서에서 보여주기 위한 기본적인 단위
class App extends Component {
  render(){
    return(
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />    
    )
  }
}

export default App;
