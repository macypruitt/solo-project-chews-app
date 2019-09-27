import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button'
import Silverware from './restaurant.svg'

class Modal extends Component {
    render() {
        ////item is specific listing we are viewing
        const item = this.props.store.modalReducer

        ////Displays diet category inside modal
        let ketoIndicator;
        let veganIndicator;
        let gfIndicator;

        if (this.props.store.modalReducer.keto == true){
            ketoIndicator = 'KETO'
        }
        if (this.props.store.modalReducer.vegan == true){
            veganIndicator = ' VEGAN'
        }
        if (this.props.store.modalReducer.gluten_free == true){
            gfIndicator = ' GLUTEN-FREE'
        }

        ////cleaning up the address
            let newAddress = '';
            if(this.props.store.modalReducer.address){
                let address = this.props.store.modalReducer.address;
            
                newAddress = address.split(',');
                newAddress.pop();
                newAddress = newAddress.join(', ');
            }

        return (
            <div>
                <div className="modal">
                    <Button size="large" 
                        className="btn-exit-modal" 
                        onClick={this.props.modalToggle}>Close</Button>

                    <div className="modal-content">
                        <br />
                        <h3 className="modal-title">{this.props.store.modalReducer.name}</h3>
                        <div className="diet">
                            {ketoIndicator}{veganIndicator}{gfIndicator}
                        </div>
                        
                        

                        <p>{newAddress}</p>
                        <p>{this.props.store.modalReducer.phone}</p>
                        
                        <img src={Silverware} className="silverware"></img>
                        

                        <p>{this.props.store.modalReducer.description}</p>
                        <br/>
                        
                        <a href={`https://www.google.com/maps/search/?api=1&query=` + item.name +
                            `,` + item.address}>Google Maps</a>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Modal);
