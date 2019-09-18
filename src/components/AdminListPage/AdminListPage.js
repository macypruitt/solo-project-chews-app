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
               return <li key={index}>{item.name}</li>
       })

        return (
            <div className="admin-container">
                <h2>Admin list page</h2>
                
                <ul>{adminList}</ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminListPage);
