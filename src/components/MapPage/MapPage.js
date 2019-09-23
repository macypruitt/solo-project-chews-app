import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';

dotenv.config();
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
let coords = [
  {lat:39.0932,
  lng:-94.574,
  text: "whatup"},
  {lat:39.097,
    lng:-94.56,
  text: "hi"},
  {lat:39.0984,
    lng:-94.579,
  text: "hey"}
]

class SimpleMap extends Component {


  static defaultProps = {
    center: {
      lat: 39.07,
      lng: -94.59
    },
    zoom: 12
  };
 
  render() {
    console.log('loggie', this.props.store.restaurantsReducer);

    let restaurantsArray = this.props.store.restaurantsReducer.map((item, index) => {
        return (
            <div key={index} className="test"
            lat={item.lat}
            lng={item.lng}
            //onClick={this.clickMarker('arrrrg')}
            >
                {item.name}
            </div>
        )
        
    })

    console.log('rest array', restaurantsArray)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '92vh', width: '100%' }}>
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          {restaurantsArray}
          {/* <AnyReactComponent
            lat={39.07}
            lng={-94.59}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default connect(mapStoreToProps)(SimpleMap);