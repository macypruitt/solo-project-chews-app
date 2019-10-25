import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import gpslogo from './gpsicon.svg';
import Marker from './Marker';
import Modal from './Modal';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


////mapStyles JSON generated at Snazzymaps.com
const mapStyles = require('./GoogleMapStyles.json');

class MapPage extends Component {
    ////STATE controls modal, diet filter, and holds user location
    state={
        modalIsShowing: false,
        show: 'all',
        lat: '',
        lng: '',
    }

    static defaultProps = {
        center: {
            lat: 39.04,
            lng: -94.59
        },
        zoom: 12
  };


    componentDidMount(){
    ////check user's location if available
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.onPositionReceived);
        }
    }

    onPositionReceived = (position) => {
    ////store user's location in state
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
      }  

    handleModal = (event, data) => {
    ////if modal is closed, open it, and vice versa
        this.setState(prevState => ({
            modalIsShowing: !prevState.modalIsShowing,
        }), () =>{
                ////if modal is open, get listing data from reducer
                if(this.state.modalIsShowing == true){
                    this.props.dispatch({type:'MODAL_INFO', payload: data})
                }
            }
        );
    }

    changeFilter = (event, data) => {
    ////diet filter buttons change state
        this.setState({
          ...this.state,
          show: data
        })
    }

    render() {
    ////CONDITIONAL RENDERING ACCORDING TO FILTER
        let restaurantsArray = this.props.store.restaurantsReducer;

        const diet= this.state.show;

        if(diet !== 'all'){
            restaurantsArray = this.props.store.restaurantsReducer.filter((item, index) => {
                return item[diet] === true;
            })
        }
       
       const renderThesePins =  restaurantsArray.map((item, index) => {
            return (
                <Marker key={index} className="test"
                lat={item.lat}
                lng={item.lng}
                modalToggle={this.handleModal}
                item={item}
                />
            ) 
    })
       
    ////user's latitude and longitude will be used for pin
    const userLat = this.state.lat;
    const userLng = this.state.lng;
    
    ////MODAL pops up depending on state
    let detailsPane = <div></div>
    if(this.state.modalIsShowing){
        detailsPane = <Modal id="modal" modalToggle={this.handleModal}></Modal>
    }
   
    return (
        <div className="map-page">
            <div className="map-spacer"></div>
                <div  style={{ height: '93vh', width: '100%', bottom: '0px'}}>
                    {detailsPane} 
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            options={{
                            styles: mapStyles}}>
                
                            {renderThesePins}
        
                            <div className="user-pin"
                                lat={this.state.lat}
                                lng={this.state.lng}>
                                    <img src={gpslogo}></img>
                            </div>

                        </GoogleMapReact>
                </div>

            <div className="filter-buttons">
                
                    <ButtonGroup size="small" variant="contained" color="primary">
                        <Button 
                            onClick={(event) => this.changeFilter(event, 'keto')}>Keto</Button> 
                        <Button
                            onClick={(event) => this.changeFilter(event, 'vegan')}>Vegan</Button> 
                        <Button
                            onClick={(event) => this.changeFilter(event, 'gluten_free')}>Gluten-Free</Button> 
                        <Button
                            onClick={(event) => this.changeFilter(event, 'all')}>All</Button> 
                    </ButtonGroup>
                
            </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MapPage);