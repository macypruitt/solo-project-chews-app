import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TextInput extends Component {
    state = {
        heading: 'Class Component',
    };

    render() {
        return (
            <div className="edit-box">
                    <p>Name: {this.props.store.editReducer[0].name}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'name')}
                        placeholder="New name">
                    </input>
                </div>
        );
    }
}

export default connect(mapStoreToProps)(TextInput);
