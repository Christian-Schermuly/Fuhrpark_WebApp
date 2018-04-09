
import 'babel-polyfill';
import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './components/home';
import NotFound from './components/notfound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerMenu from './components/drawermenu'
import injectTapEventPlugin from 'react-tap-event-plugin';
import UserMgmt from './components/usermgmt';
import CarMgmt from './components/carmgmt';
import CarExport from './components/carexport';
import Login from './containers/loginContainer';
import Register from './containers/registerContainer';
import Book from './components/book';
import Reservation from  './components/reservation';
import ReservationMgmt from './components/reservationmgmt';
import User from './components/user';
import FreeBusy from './components/freebusy';
import ResetPW from './components/resetpw';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
require ('../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';




injectTapEventPlugin();

               
const Nav = () => (
<MuiThemeProvider>
        <DrawerMenu/>
    </MuiThemeProvider>

)

const RootContainer = (props) => <div>
    <Nav />
    {props.children}
</div>

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/resetpw' component={ResetPW} />
                <Route path='/' component={RootContainer}>
                    <IndexRoute component={Home} 
                    onEnter={requiresAuth}/>
                    <Route path='/users' component={UserMgmt}/>
                    <Route path='/cars' component={CarMgmt} />
                    <Route path='/reservations' component={ReservationMgmt} />
                    <Route path='/carexport' component={CarExport} />
                    <Route path='/reservation' component={Reservation} />
                    <Route path='/book' component={Book} />
                    <Route path='/user' component={User} />
                    <Route path='/freebusy' component={FreeBusy} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>

        );
    }


};

//Prüft, ob eine jwt vorhanden. Leitet um auf '/login' falls nicht.


function requiresAuth(nextState, replace){
    if(!localStorage.jwtToken){
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname}
          
        })
    }
}

export default App;