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
        modalIsVisible: false
    };

    showModal = (event) => {
        this.setState({
            modalIsVisible:true
        })
    

    }

    render() {
        
        let detailsModal = <div></div>;

        if (this.state.modalIsVisible == true){
            detailsModal = <div className="details-box"></div>
        } ;


        return (
            <div className="map-marker">
                {detailsModal}
                <div id="pane">
                <RoomRoundedIcon 
                    fontSize="large" 
                    onClick={this.showModal}
                    id="pin" />
                </div>

                <div className="map-div:after">jukjsdkfs</div>
                

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Marker);
