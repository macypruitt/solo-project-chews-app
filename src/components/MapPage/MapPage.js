import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';
import './MapPage.css';
import Marker from './Marker';

dotenv.config();
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const styles = require('./GoogleMapStyles.json');

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
            <Marker key={index} className="test"
            lat={item.lat}
            lng={item.lng}
            //onClick={this.clickMarker('arrrrg')}
            >
                {item.name}
            </Marker>
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
          options={{
            styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffe9aa"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": 0.01
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -31
                    },
                    {
                        "lightness": -33
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.8
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 30
                    },
                    {
                        "saturation": 30
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 20
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "11"
                    },
                    {
                        "lightness": "-11"
                    },
                    {
                        "weight": "1.08"
                    },
                    {
                        "gamma": "4.65"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 10
                    },
                    {
                        "saturation": -30
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 25
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": -20
                    }
                ]
            }
        ]}}
        >

          {restaurantsArray}
          <Marker
            lat={39.07}
            lng={-94.59}
            text="checkssssssssssss"
            />
            
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