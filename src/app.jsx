import React from 'react';
import ReactDOM from 'react-dom';

// 事件的处理
class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Y'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    return (
      <div>
        <div>I am {this.state.name}</div>
        <button onClick={this.handleClick}>改变名字</button>
      </div>
    )
  }
  handleClick(){
    alert('handleClick');

    this.setState({
      name:'Z'
    })
  }
}

ReactDOM.render(
  <Component/>,
  document.getElementById('app')
)
