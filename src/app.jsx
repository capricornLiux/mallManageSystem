// console.log('app.js');

// let a = 10;
// const b = 20;
// let c = value => value * 2;

// console.log(c(20));

import React from 'react';
import ReactDOM from 'react-dom';
// import 'font-awesome/css/font-awesome.min.css'
// import './index.css';
// import './index.scss';

// ReactDOM.render(
//   <div>
//     <i class="fa fa-car"></i>
//     <h1>Hello, world</h1>,
//   </div>,
//   document.getElementById('app')
// );

// =============================================
import './index.scss'

// // 样式对象
// let style = {
//   // 属性要使用驼峰命名法
//   color: 'red',
//   fontSize: '30px'
//   // 属性值支持字符串拼接
// }

// let name = 'lance'
// let flag = false;
// let arr = ['zhangsan', 'lisi', 'wangwu']
// let jsx = (
//   <div className="jsx">
//     jsx...{flag ? <p>I am {name}</p> : <p>I am not {name}</p>}
//     {
//       arr.map((name,index) => <p key={index}>Hello, {name}</p>)
//     }
//   </div>
// );

// ==============================================
// 组件
// function Component(){
//   return <h1>hello world</h1>
// }

// ES6的组件
class ES6Component extends React.Component{
  constructor(props){
    // props是只读的, 不能被改变
    super(props);
    // this.state = {
    //   name: 'R'
    // }
  }
  render(){
    // 修改state
    // setTimeout(()=>{
    //   this.setState({
    //     name: 'S'
    //   })
    // },2000)
    // return <h2>你好,{this.state.name}</h2>
    return <h2>hello,{this.props.name}</h2>
  }
}

// ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(
  <div>
    {/* <Component/> */}
    <ES6Component name="Q"/>
  </div>,
  document.getElementById('app')
)
