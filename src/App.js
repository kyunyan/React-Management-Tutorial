import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  "id" : 1
, "image" : "https://placeimg.com/64/64/1"   
,  "name" : "이건완"
, "birthday" : "920211"
, "gender" : "남자"
, "job" : "개발자"  
},
{
  "id" : 2
, "image" : "https://placeimg.com/64/64/2"   
,  "name" : "손민규"
, "birthday" : "930211"
, "gender" : "남자"
, "job" : "개발자"  
},
{
  "id" : 3
, "image" : "https://placeimg.com/64/64/3"   
,  "name" : "이건완"
, "birthday" : "920211"
, "gender" : "남자"
, "job" : "개발자"  
}
]
// componenet web문에서에서 보여주기 위한 기본적인 단위
class App extends Component {
  render(){
    return(
      <div>
        { customers.map( c =>{ return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)  }) }
      </div>
    )
  }
}

export default App;
