import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// 리엑트의 componenet 클래스 이자 라이브러리
class Customer extends React.Component {
    render(){
        return(
            // jsx 문법은 두개 이상의 컴포넌트를 사용할 때 무조건 div 태그로 감싸야된다.
          <TableRow>
              <TableCell>{this.props.id}</TableCell>
              <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
              <TableCell>{this.props.name}</TableCell> 
              <TableCell>{this.props.birthday}</TableCell>
              <TableCell>{this.props.gender}</TableCell>
              <TableCell>{this.props.job}</TableCell>
          </TableRow>
        ) 
    }
}

export default Customer;