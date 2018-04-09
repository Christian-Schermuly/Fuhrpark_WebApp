

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Center from 'react-center';
import RaisedButton from 'material-ui/RaisedButton';
import validateLogin from './../actions/validations/loginValidation';
import {connect} from 'react-redux';
import {login} from '../actions/loginActions';





const styles = {
    paper: {
        height: 350,
        width: 400,
        margin: 150,
        textAlign: 'center',
        display: 'inline-block',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        paddingTop: 20,
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors:{},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid()
    {
        const {errors,isValid} = validateLogin(this.state);

        if(!isValid)
        {
            this.setState({errors});
        }
        return isValid;
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();
        if(this.isValid())
        {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({errors: err.data.errors, isLoading: false})
            );
        }
    }

    render()
        {
            const {username,password,errors,isLoading} = this.state;

            return (
                <Center>
                    <div>
                        <MuiThemeProvider>
                            <Paper style={styles.paper} zDepth={2}>
                                <h2 style={styles.header}>Login</h2>
                                {errors.form && <div>{errors.form}</div>}
                                <TextField
                                    hintText="Benutzername"
                                    floatingLabelText="Benutzer"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                    errorText={this.state.errors.username}
                                />
                                <TextField
                                    hintText="Ihr Passwort"
                                    floatingLabelText="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                    errorText={this.state.errors.password}
                                />
                                <div style={styles.header}>
                                    <RaisedButton label="Login" primary={true} onTouchTap={this.onSubmit}/>
                                </div>
                                <div style={styles.header}>
                                    <a href="#/resetpw">Passwort vergessen?</a>
                                </div>
                                <div>
                                    <a href="#/register">Registrieren</a>
                                </div>
                            </Paper>

                        </MuiThemeProvider>
                    </div>
                </Center>
            )
        }
}

Login.contextTypes={
    router: React.PropTypes.object.isRequired
}

Login.propTypes ={
    login: React.PropTypes.func.isRequired
}

export default connect(null,{login})(Login);