import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



class AdminListPage extends Component {
    

    componentDidMount(){
        this.props.dispatch({type: 'GET_ADMIN'})
    }
   
    



    render() {
    
       console.log('help me, myron', this.props.store.adminReducer)
           let adminList = this.props.store.adminReducer.map((item, index) => {
               return <tr key={index}>
                        <td>{item.name}</td>
                        <td>Subm date</td>
                        <td>Edit</td>
                        
                        </tr>
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
                    {adminList}
                </table>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminListPage);
