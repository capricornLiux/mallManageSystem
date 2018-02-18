import React from 'react';

class TableList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstLoading: true
        }
    }

    componentWillReceiveProps(){
        // 只有组件挂载的时候是true
        this.firstLoading = false;
    }

    render(){
        // 表头(Array[th,th,...])
        let listHeader = this.props.tableHeaders.map((header, index)=>{
            return <th key={index}>{header}</th>;
        })

        // 列表body(Array[tr,tr,...])
        let listBody = this.props.children;

        let listInfo = (
            <tr>
                <td colSpan="this.props.tableHeaders.length" className="text-center">
                    {this.state.firstLoading ? '正在加载数据' : '没有查找到数据'}
                </td>
            </tr>
        );

        let tableBody = listBody.length > 0 ? listBody : listInfo;

        return (

            <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    {listHeader}
                                </tr>
                            </thead>
                            <tbody>
                                {tableBody}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default TableList;