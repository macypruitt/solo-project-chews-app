import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



class AdminListPage extends Component {
    

    componentDidMount(){
        this.props.dispatch({type: 'GET_ADMIN'})
        this.props.dispatch({type: 'GET_EDIT', payload:2})
    }

    clickEdit = (event, id) => {
        this.props.history.push(`/edit/${id}`)
    }
   

    render() {
           let adminList = this.props.store.adminReducer.map((item, index) => {
               return <tr key={index}>
                        <td>{item.name}</td>
                        <td>Submitted date</td>
                        <td onClick={(event) => this.clickEdit(event, item.id)}>Edit</td>
                        
                        </tr>
       })

        return (
            <div className="admin-container">

                <h2>Admin list page</h2>

                {this.props.store.editReducer.name}
                
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
