
import React from 'react';
import Login from './../components/login';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {
    render() {
        return (
            <Login/>
        );
    }
}

export default connect((state) => {return{} },)(LoginContainer);
