import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';
import './MapPage.css';
import Marker from './Marker';
import Modal from './Modal';
import DietButtons from './DietButtons';

dotenv.config();
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const styles = require('./GoogleMapStyles.json');

class SimpleMap extends Component {

    state={
        modalIsShowing: false,
        activeListing: ''
    }

    static defaultProps = {
        center: {
            lat: 39.07,
            lng: -94.59
        },
        zoom: 12
  };

  handleModal = (event, data) => {
    this.setState(prevState => ({
        modalIsShowing: !prevState.modalIsShowing,
    }), () =>{
        if(this.state.modalIsShowing == true)
        this.props.dispatch({type:'MODAL_INFO', payload: data})
        }
    );
  }


  render() {
    console.log(this.state);

    let restaurantsArray = this.props.store.restaurantsReducer.map((item, index) => {
        return (
            <Marker key={index} className="test"
            lat={item.lat}
            lng={item.lng}
            modalToggle={this.handleModal}
            item={item}
            />
        ) 
    })

    
    let detailsPane = <div></div>

    if(this.state.modalIsShowing){
        detailsPane = <Modal id="modal" modalToggle={this.handleModal}></Modal>
    }

    return (
      // Important! Always set the container height explicitly
      <div className="map-div">
      <div  style={{ height: '92vh', width: '100%' }}>
          <DietButtons height={'8px'} letter={'k k'}/>
          
        {detailsPane}
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
          
            
          
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SimpleMap);