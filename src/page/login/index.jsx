import React from 'react';
import './index.scss';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    inputChange(e){
        let key = e.target.name;
        let value = e.target.value;
        this.setState({
            [key] : value
        })
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading text-center">欢迎登录</div>
                    <div className="panel-body">
                    <form>
                        <div className="form-group">
                            {/* for是关键词, 使用htmlfor */}
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="请输入用户名"
                                name="username"
                                onChange={e=>{this.inputChange(e)}}/>
                            {/* jsx要有结束标签/ */}
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="请输入密码"
                                name="password"
                                onChange={e=>{this.inputChange(e)}}/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-lg btn-block">登录</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;