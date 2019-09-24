import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class DietButtons extends Component {
    

    render() {
        return (
            <div className="diet-buttons" style={{ top: `${this.props.height}` }}>
                <h2>{this.props.letter}</h2>
                
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DietButtons);
