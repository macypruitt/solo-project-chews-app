import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 


export class MapPage extends Component {
  state={}

  
  render() {
    return (
      <Map google={this.props.google} zoom={14}
      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
       
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS)
})(MapPage)