
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Center from 'react-center';
import ReservationTable from './reservationtable';


const styles = {
    space: {
        padding: 20,
    },
    header:{
        paddingTop:50,
    }

};

class ReservationManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 10};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        return (
            <MuiThemeProvider>
                <ReservationTable/>
            </MuiThemeProvider>
        );
    }
}

export default ReservationManagement;
