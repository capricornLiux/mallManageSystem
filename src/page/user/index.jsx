import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'util/pagination/pagination.jsx';
import PageTitle from 'component/page-title/index.jsx';
import UserService from 'service/user-service.jsx';
import Util from 'util/index.jsx';
const userService = new UserService();
const util = new Util();
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            list: [],
            firstLoading: true
        }
    }
    componentDidMount() {
        this.loadUserList();
    }
    loadUserList() {
        userService
            .getUserList(this.state.pageNum)
            .then(res => {
                this.setState(res,()=>{
                    this.setState({
                        firstLoading: false
                    })
                });
            })
            .catch(errMsg => {
                // 将之前的list清空
                this.setState({
                    list: []
                })
                util.errorTips(errMsg)
            });
    }

    /**
     * 切换页码
     *
     * @param {any} current
     * @memberof UserList
     */
    pageChange(current) {
        // this.loadUserList();
        this.setState({
            pageNum: current
        }, () => {
            this.loadUserList();
        })
    }

    render() {
        let listBody = this.state.list.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{new Date(item.createTime).toLocaleString()}</td>
                </tr>
            )
        });
        let listError = (
            <tr>
                <td colSpan="5" className="text-center">
                    {this.state.firstLoading ? '正在加载数据' : '没有查找到数据'}
                </td>
            </tr>
        );
        let tableBody = this.state.list.length > 0 ? listBody : listError;
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>注册时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableBody}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination
                    current={this.state.pageNum}
                    total={this.state.total}
                    onChange={(current) => {
                    this.pageChange(current)
                }}/>
            </div>
        );
    }
}

export default UserList;