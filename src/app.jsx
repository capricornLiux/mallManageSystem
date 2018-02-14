import React from 'react';
import ReactDOM from 'react-dom';

// 事件的处理
class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Y'
    }
    // this.handleClick = this.handleClick.bind(this)
    // 也可以使用箭头函数解决这个问题
  }
  render(){
    return (
      <div>
        <div>I am {this.state.name}</div>
        {/* <button onClick={this.handleClick}>改变名字</button> */}
        <button onClick={(e)=>{this.handleClick(e)}}>改变名字</button>

        <input type="text" onChange={(e)=>{this.handleValueChange(e)}}/>
      </div>
    )
  }
  handleClick(){
    alert('handleClick');

    this.setState({
      name:'Z'
    })
  }
  handleValueChange(e){
    this.setState({
      name: e.target.value
    })
  }
}

class Title extends React.Component{
  constructor(props){
    super(props);
  }
  render(props){
    // return <h1>{this.props.title}</h1>
    
    // 使用children
    return <h1>{this.props.children}</h1>
  }
}
class App extends React.Component{
  render(){
    return (
      <div>
        {/* <h1>App</h1> */}
        {/* <Title title="hello world999"/> */}
        <Title>
          <span>1</span>
          <p>2</p>
        </Title>
        <hr/>
        <Component/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
