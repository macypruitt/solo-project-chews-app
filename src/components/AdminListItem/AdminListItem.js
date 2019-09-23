import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class AdminListItem extends Component {

    clickEdit = (event) => {
        this.props.history.push(`/edit/${this.props.listing.id}`);
    }

    render() {

        return (
                <tr>
                    <td>{this.props.listing.name}</td>
                    <td>Submitted on</td>
                    <td><button onClick={this.clickEdit}>Edit</button></td>
                </tr>
                
        );
    }
}

export default withRouter(AdminListItem);
