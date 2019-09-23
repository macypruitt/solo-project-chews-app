import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Marker extends Component {
    state = {
        heading: 'Class Component',
    };

    render() {
        return (
            <div className="map-marker">
                <h2>{this.state.heading}</h2>
                <RoomRoundedIcon />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Marker);
