import React from 'react';

import {Link} from 'react-router-dom';
// import './index.css'
import PageTitle from 'component/page-title/index.jsx';
import Statistic from 'service/statistic-service.jsx';
import Util from 'util/index.jsx';
import './index.scss'

const statistic = new Statistic();
const util = new Util();

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-',
        }
    }

    /**
     * 保险的hook, 如果在will中, 加载的很快视图还没有...
     * 
     * @memberof Home
     */
    componentDidMount(){
        this.loadCount();
    }

    /**
     * 加载数据
     * 
     * @memberof Home
     */
    loadCount(){
        statistic.getHomeCount()
        .then(res=>{
            // 设置数据
            this.setState(res);
        })
        .catch(errMsg=>{
            util.errorTips(errMsg);
        })
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"/>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box blue">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="/product" className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="product">
                                <i className="fa fa-user-o"></i>
                                <span>商品总数</span>
                            </p>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="/order" className="color-box red">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="order">
                                <i className="fa fa-user-o"></i>
                                <span>订单总数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;