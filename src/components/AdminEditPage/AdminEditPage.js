import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminEditPage extends Component {
    state = {
        name: 'Shanice'
    };

    componentDidMount(){
        console.log('hiii', this.props.match.params.id);
        this.props.dispatch({type: 'GET_EDIT', payload:this.props.match.params.id})
        
    }

    //{this.props.store.editReducer[0].name}
    handleChangeInputText(event, dataKey) {
        const fieldValue = event.target.value;
        this.setState({
            ...this.state,
            [dataKey]: fieldValue,
        })
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>Edit Listing</h2>

                <div className="edit-box">
                    <p>{this.state.name}</p>
                    <p></p>
                    {this.props.store.editReducer[0].name}
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'name')}>
                    </input>
                </div>

                <br></br>
                {this.props.store.editReducer[0].address}
                <input type="text"
                    onChange={(event) => this.handleChangeInputText(event, 'address')}>
                </input>
                <br></br>
                {this.props.store.editReducer[0].phone}
                <input type="text"
                    onChange={(event) => this.handleChangeInputText(event, 'phone')}>
                </input>
                <br></br>
                {this.props.store.editReducer[0].description}
                <input type="text"
                    onChange={(event) => this.handleChangeInputText(event, 'description')}>
                </input>
                <br></br>
                {this.props.store.editReducer[0].website}
                <input type="text"
                    onChange={(event) => this.handleChangeInputText(event, 'website')}>
                </input>

                <br></br>
                {this.props.store.editReducer[0].lat}
                <input type="text"
                    onChange={(event) => this.handleChangeInputText(event, 'lat')}>
                </input>
                <br></br>
                {this.props.store.editReducer[0].lng}
                <input type="text"
                    onChange={(event) => this.handleChangeInputText(event, 'lng')}>
                </input>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminEditPage);
