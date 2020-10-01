import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import MapPage from '../MapPage/MapPage';
import SuggestPage from '../SuggestPage/SuggestPage';
import AdminListPage from '../AdminListPage/AdminListPage';
import EditPage from '../EditPage/EditPage';

// styling
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFE9AA' }, 
    secondary: { main: '#0582CA' }, 
  },
});

class App extends Component {
    componentDidMount () {
        this.props.dispatch({type: 'FETCH_USER'});
        this.props.dispatch({type: 'GET_PINS'});
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <div>
                        <Nav/>
                        <div className="map-div">
                            <Switch >
                                <Redirect exact from="/" to="/map" />
                                
                                <Route
                                    exact
                                    path="/map"
                                    component={MapPage}
                                />
                                
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
                                
                                <ProtectedRoute
                                    exact
                                    path="/admin"
                                    component={AdminListPage}
                                />

                                <ProtectedRoute
                                    path="/edit/:id"
                                    component={EditPage}
                                />
                                
                                <ProtectedRoute
                                    exact
                                    path="/login"
                                    authRedirect="/admin"
                                    component={LoginPage}
                                />

                                <Route render={() => <h1>404</h1>} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </ThemeProvider>
        )}
}

export default connect(mapStoreToProps)(App);
