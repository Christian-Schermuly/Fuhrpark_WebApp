
import React from 'react';
import UserTable from './userstable'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserMgmt extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <UserTable/>
            </MuiThemeProvider>
        );
    }
}

export default UserMgmt;