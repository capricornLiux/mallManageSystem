import React from 'react';
import ReactDOM from 'react-dom';

// 兄弟组件之间的传值
class Child1 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h2>Child1</h2>
        <button onClick={(e)=>{this.handleClick(e)}}>改变child2的color</button>
      </div>
    )
  }
  handleClick(){
    this.props.onChangeChild2BgColor('#333')
  }
}

class Child2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={{backgroundColor: this.props.child2BgColor}}>
        <h2>Child2</h2>
        <p>child2的颜色{this.props.child2BgColor}</p>
      </div>
    )
  }
}

class Father extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      child2BgColor: '#666'
    }
  }
  render(props){
    return (
      <div>
        <p>父组件</p>
        <br/>

        <p>父组件中的子组件部分</p>
        <Child1 onChangeChild2BgColor={(color)=>{this.changeChild2BgColor(color)}}/>
        <Child2 child2BgColor={this.state.child2BgColor}/>
      </div>
    )
  }
  changeChild2BgColor(color){
    this.setState({
      child2BgColor: color
    })
  }
}

ReactDOM.render(
  <Father/>,
  document.getElementById('app')
)
