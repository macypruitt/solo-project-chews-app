import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class AdminListPage extends Component {
    state = {
        heading: 'Class Component',
    };

    componentDidMount(){
        this.props.dispatch({type: 'GET_ADMIN'});
    }
    render() {
        let adminList = this.props.store.adminReducer;
        console.log('admin lister',adminList)

        return (
            <div className="admin-container">
                <h2>Admin list page</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminListPage);
