////import modules
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

////import components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import MapPage from '../MapPage/MapPage';
import SuggestPage from '../SuggestPage/SuggestPage';
import AdminListPage from '../AdminListPage/AdminListPage';
import EditPage from '../EditPage/EditPage';

////import styling
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {

  ////let's check if user is an admin and get the list of approved restaurants
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'});
    this.props.dispatch({type: 'GET_PINS'});
  }

  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <div className="map-div">
            <Switch >
              <Redirect exact from="/" to="/map" />
              <Route
                exact
                path="/suggest"
                component={SuggestPage}
              />
              <Route
                exact
                path="/home"
                component={LandingPage}
              />
              <Route
                exact
                path="/map"
                component={MapPage}
              />
              <ProtectedRoute
                exact
                path="/admin"
                component={AdminListPage}
              />
              <ProtectedRoute
                path="/edit/:id"
                component={EditPage}
              />
              
              {/* If the user is logged in,they will be redirected to the authRedirect path provided. */}
              <ProtectedRoute
                exact
                path="/login"
                authRedirect="/admin"
                component={LoginPage}
              />
              {/* <Route
                exact
                path="/registration"
                authRedirect="/registration"
                component={RegisterPage}
              /> */}

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect(mapStoreToProps)(App);
