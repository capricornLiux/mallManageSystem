import React from 'react';
import ReactDOM from 'react-dom';

// 事件的处理
class Child extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div>{this.props.bgColor}</div>
        <button onClick={(e)=>{this.handleClick(e)}}>改变名字</button>
      </div>
    )
  }
  handleClick(){
    this.props.colorChange('#333')
  }
}

class Father extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bgColor: '#888'
    }
  }
  render(props){
    return (
      <div style={{backgroundColor: this.state.bgColor}}>
        <p>父组件</p>
        <br/>

        <p>父组件中的子组件部分</p>
        <Child bgColor={this.state.bgColor} colorChange={(color)=>{this.onColorChange(color)}}/>
      </div>
    )
  }
  onColorChange(color){
    this.setState({
      bgColor: color
    })
  }
}

ReactDOM.render(
  <Father/>,
  document.getElementById('app')
)
