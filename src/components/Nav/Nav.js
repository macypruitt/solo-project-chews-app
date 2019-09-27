import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import logo from '../Nav/logo.png'

const Nav = (props) => (
  <div className="nav">
    <Link to="/map">
      <img src={logo} className="nav-logo" alt="Chews"></img>
    </Link>
    <div className="nav-right">
    
      <Link className="nav-link" to="/map">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        Map
      </Link>
      <Link className="nav-link" to="/suggest">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        Suggest Restaurant
      </Link>
      
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {/* <Link className="nav-link" to="/home">
        
        {props.store.user.id ? 'Home' : 'Login / Register'}
      </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.store.user.id && (
        <>
          <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
    </div>
  </div>
);

export default connect(mapStoreToProps)(Nav);
