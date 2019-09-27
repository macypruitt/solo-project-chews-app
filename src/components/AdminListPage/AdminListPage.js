import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminListItem from '../AdminListItem/AdminListItem';

//// This page is only viewable to admin 
class AdminListPage extends Component {
    
    componentDidMount(){
        this.props.dispatch({type: 'GET_ADMIN'})
        //// Requests all restaurants, both approved and pending approval
    }

    render() {
            //// Mapping the array of restaurants to a table
            let adminList = this.props.store.adminReducer.map((item, index) => {
               return  <AdminListItem listing={item} key={index} />     
            })

        return (
            <div className="admin-container">
                <div className="admin-list-spacer"></div>
                <h2>Admin page</h2>
                <h4>"With great power comes great responsibility"</h4>
                <table className="admin-table">
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Edit</th>
                    </tr>
                    <tbody>
                        {adminList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminListPage);
