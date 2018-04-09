
import React from 'react';
import Register from './../components/register';
import {connect} from 'react-redux';
import {userSignupRequest} from './../actions/signupActions'

class RegisterContainer extends React.Component {
    render() {
        const {userSignupRequest} = this.props;
        return (
            <Register userSignupRequest={userSignupRequest}/>
        );
    }
}
RegisterContainer.propTypes={
    userSignupRequest: React.PropTypes.func.isRequired
}
export default connect((state) => {return{} }, {userSignupRequest})(RegisterContainer);