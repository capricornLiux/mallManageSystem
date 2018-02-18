import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'util/pagination/pagination.jsx';
import PageTitle from 'component/page-title/index.jsx';
import ProductService from 'service/product-service.jsx';
import TableList from 'util/table-list/index.jsx';
import Util from 'util/index.jsx';

const productService = new ProductService();
const util = new Util();

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            list: []
        }
    }
    componentDidMount() {
        this.loadUserList();
    }
    loadUserList() {
        productService
            .getProductList(this.state.pageNum)
            .then(res => {
                this.setState(res);
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
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表"/>
                <TableList tableHeaders={['ID','用户名','邮箱','电话','注册时间']}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{new Date(item.createTime).toLocaleString()}</td>
                                </tr>
                            )
                        })
                    }
                </TableList>
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

export default ProductList;