import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminEditPage extends Component {
    state = {
        
    };

    render() {
        return (
            <div>
                <h2>Edit Listing</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminEditPage);
