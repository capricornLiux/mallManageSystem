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
            pageNum: 1
        }
    }
    componentDidMount() {
        this.loadUserList();
    }
    loadUserList() {
        userService
            .getUserList(this.state.pageNum)
            .then(res => {
                this.setState(res);
            })
            .catch(errMsg => {
                util.errorTips(errMsg)
            });
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Id</th>
                                    <th>Id</th>
                                    <th>Id</th>
                                    <th>Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123</td>
                                    <td>123</td>
                                    <td>123</td>
                                    <td>123</td>
                                    <td>123</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={11} total={200}/>
            </div>
        );
    }
}

export default UserList;