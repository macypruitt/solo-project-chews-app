import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class DietButton extends Component {
    

    render() {
        return (
            <div className="diet-buttons" style={{ top: `${this.props.height}`, color: `rgb(0,0,0,${this.props.opacity})` }}>
                <h2>{this.props.letter}</h2>
                
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DietButton);
