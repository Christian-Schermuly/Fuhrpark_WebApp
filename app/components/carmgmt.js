
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CarTable from './cartable';


class CarsMgmt extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <CarTable/>
                </MuiThemeProvider>
        );
    }
}

export default CarsMgmt;