import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminListItem from '../AdminListItem/AdminListItem';



class AdminListPage extends Component {
    

    componentDidMount(){
        this.props.dispatch({type: 'GET_ADMIN'})
    }

    // clickEdit = (event, id) => {
    //     this.props.history.push(`/edit/${id}`)
    // }
   

    render() {
           let adminList = this.props.store.adminReducer.map((item, index) => {
               return  <AdminListItem listing={item} key={index} />
                      
       })

        return (
            <div className="admin-container">

                <h2>Admin list page</h2>

                <table className="admin-table">
                    <tr>
                        <th>Name</th>
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
