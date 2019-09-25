import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {createMuiTheme, withStyles, makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

import Marker from './Marker';
import Modal from './Modal';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


const mapStyles = require('./GoogleMapStyles.json');

const theme = createMuiTheme({
    palette: {
      primary: { main: '#FFE28C' }, // Purple and green play nicely together.
      secondary: { main: '#9EDBFF' }, // This is just green.A700 as hex.
    },
  });


class MapPage extends Component {
    ////STATE handles modal and Keto, Vegan, Gluten-free filters
    state={
        modalIsShowing: false,
        activeListing: '',
        show: 'all'
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

  changeFilter = (event, data) => {
      this.setState({
          ...this.state,
          show: data
      })
      console.log(data)
  }




  


  render() {
    console.log(this.state);
    ////CONDITIONAL RENDERING ACCORDING TO FILTER
    let restaurantsArray; //holds restaurants to be shown

    ////default is to render all approved restaurants
    if(this.state.show == 'all'){
        restaurantsArray = this.props.store.restaurantsReducer.map((item, index) => {
            return (
                <Marker key={index} className="test"
                lat={item.lat}
                lng={item.lng}
                modalToggle={this.handleModal}
                item={item}
                />
            ) 
        })
    }
    ////if vegan is selected, show vegan restaurants
    if(this.state.show == 'vegan'){
        let veganRestaurants = this.props.store.restaurantsReducer.filter((item, index) => {
            return item.vegan === true;
        })

        restaurantsArray = veganRestaurants.map((item, index) => {
            return (
                <Marker key={index} className="test"
                lat={item.lat}
                lng={item.lng}
                modalToggle={this.handleModal}
                item={item}
                />
            ) 
        })
    }
    ////if gluten_free is selected, show gluten_free restaurants
    if(this.state.show == 'gluten_free'){
        let gfRestaurants = this.props.store.restaurantsReducer.filter((item, index) => {
            return item.gluten_free === true;
        })

        restaurantsArray = gfRestaurants.map((item, index) => {
            return (
                <Marker key={index} className="test"
                lat={item.lat}
                lng={item.lng}
                modalToggle={this.handleModal}
                item={item}
                />
            ) 
        })
    }
    ////if keto is selected, show keto restaurants
    if(this.state.show == 'keto'){
        let ketoRestaurants = this.props.store.restaurantsReducer.filter((item, index) => {
            return item.keto === true;
        })

        restaurantsArray = ketoRestaurants.map((item, index) => {
            return (
                <Marker key={index} className="test"
                lat={item.lat}
                lng={item.lng}
                modalToggle={this.handleModal}
                item={item}
                />
            ) 
        })
    }

    

    ////MODAL pops up depending on state
    let detailsPane = <div></div>
    if(this.state.modalIsShowing){
        detailsPane = <Modal id="modal" modalToggle={this.handleModal}></Modal>
    }
   
    return (
      <div className="map-div">
      <div  style={{ height: '92vh', width: '100%' }}>

      {detailsPane} 
          <div className="filter-buttons">
            <ThemeProvider theme={theme}>
                <ButtonGroup size="small" variant="contained" color="secondary">
                    <Button 
                    onClick={(event) => this.changeFilter(event, 'keto')}>Keto</Button> 
                    <Button
                    onClick={(event) => this.changeFilter(event, 'vegan')}>Vegan</Button> 
                    <Button
                    onClick={(event) => this.changeFilter(event, 'gluten_free')}>Gluten-Free</Button> 
                    <Button
                    onClick={(event) => this.changeFilter(event, 'all')}>All</Button> 
                </ButtonGroup>
            </ThemeProvider>
        </div>
         
        
          
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: mapStyles}}
        >

          {restaurantsArray} 
          
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MapPage);