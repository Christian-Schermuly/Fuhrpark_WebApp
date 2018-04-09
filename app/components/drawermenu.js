import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton'
import {logout} from '../actions/logoutActions'
import {connect} from "react-redux"

class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        
    }


    handleToggle = () => this.setState({openAdd: !this.state.openAdd});

    render() {
        return (
            <div>
                <AppBar
                    title="Fuhrpark Management"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    
                    iconElementRight={<img src="../images/fmlogo_xhdpi.png" height="60" width="60"
                                           />}
                />
                <Drawer open={this.state.openAdd}>
                    <MenuItem onTouchTap={this.handleToggle} href="#/">Home</MenuItem>
                    <Divider inset={true} />
                    <Subheader>Admin</Subheader>
                    <MenuItem onTouchTap={this.handleToggle} href="#/users">Benutzer Verwaltung</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle} href="#/cars">Fahrzeug Verwaltung</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle} href="#/reservations">Reservierungs Verwaltung</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle} href="#/carexport">Autodaten Export</MenuItem>
                    <Divider inset={true} />
                    <Subheader>User</Subheader>
                    <MenuItem onTouchTap={this.handleToggle} href="#/book">Fahrzeug reservieren</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle} href="#/reservation">Meine Reservierungen</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle} href="#/freebusy">Frei/-Gebucht Übersicht</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle} href="#/user">Benutzer Details bearbeiten</MenuItem>
                    <Divider inset={true} />
                    <Subheader>Logout</Subheader>
                    <MenuItem onTouchTap={logout}>Logout</MenuItem>
                </Drawer>
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(DrawerSimpleExample);