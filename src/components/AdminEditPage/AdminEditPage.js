import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminEditPage extends Component {
    state = {
        
    };

    componentDidMount(){
        console.log('hiii', this.props.match.params.id);
        this.props.dispatch({type: 'GET_EDIT', payload:this.props.match.params.id})
    }

    render() {
        console.log('id returns:', this.props.store.editReducer)
        return (
            <div>
                <h2>Edit Listing</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminEditPage);
