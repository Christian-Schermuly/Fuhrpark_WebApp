import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import signupActions from '../actions/signupActions';
import signupValidation from '../actions/validations/signupValidation';
import axios from 'axios';
import {connect} from "react-redux"




class UserToolbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            //openAdd: false,
            //openEdit: false,
            //userrole: 0,       
            username: this.props.user.user.username,
            password: '',
            firstname: this.props.user.user.firstname,
            lastname: this.props.user.user.lastname,
            email: this.props.user.user.email,
            phone: this.props.user.user.phone,
            passwordConfirmation:'',
            userrole: this.props.user.user.role,
            errors:{},
        
        };
                this.onChange = this.onChange.bind(this);
                this.onSubmit =this.onSubmit.bind(this);
                
    }
        onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
        isValid(){
        const{errors, isValid} = signupValidation(this.state)

        if(!isValid)
        {
            this.setState({errors});
        }

        return isValid;
    }
    
    
    onSubmitEdit(e) {
       // e.preventDefault();
       // if(this.isValid())
       // {
            
    
           // this.props.userSignupRequest(this.state);
            console.log(this.state);
            axios({
               
                method: 'put',
                url: 'https://10.18.2.151/api/users/:users',
                data: this.state
                
            })
                    this.setState({openEdit: false});
                    this.context.router.push('/cars');
       // }

    }

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid())
        {
            
    
           // this.props.userSignupRequest(this.state);
            console.log(this.state);
            axios({
                method: 'post',
                url: 'https://10.18.2.151/api/register',
                data: this.state
                
            })
                    this.setState({openAdd: false});
                    this.context.router.push('/cars');
        }

    }

    handleOpenAdd = () => {
        this.setState({openAdd: true});
            this.state._id = null;
            this.state.username = '';
            this.state.password = '';
            this.state.firstname = '';
            this.state.lastname = '';
            this.state.email = '';
            this.state.phone = '';
            this.state.passwordConfirmation = '';
            this.state.userrole= '';
            
        
    };

    handleCloseAdd = () => {
        this.setState({openAdd: false});
    };
        handleCommitAdd = () => {
            onSubmit();
        //this.setState({openAdd: false});
    };
    handleOpenEdit = () => {
        this.setState({openEdit: true});
            this.state._id = this.props.user.user._id;
            this.state.username = this.props.user.user.username;
            this.state.password = '';
            this.state.firstname = this.props.user.user.firstname;
            this.state.lastname = this.props.user.user.lastname;
            this.state.email = this.props.user.user.email;
            this.state.phone = this.props.user.user.phone;
            this.state.passwordConfirmation = '';
            this.state.userrole= this.props.user.user.role;
    };
    handleCloseEdit = () => {
        this.setState({openEdit: false});
    };
        handleCommitEdit = () => {
            onSubmit();
        //this.setState({openEdit: false});
    };


    render() {

        const actionsAdd = [
            <FlatButton
                label="Speichern"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCommitAdd}
                
            />,
            <FlatButton
                label="Abbrechen"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseAdd}
            />,
        ];
        const actionsEdit = [
            <FlatButton
                label="Speichern"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCommitEdit}
            />,
            <FlatButton
                label="Abbrechen"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseEdit}
            />,
        ];

        return (
            <div>
            <Toolbar>
                <ToolbarGroup>
                    <RaisedButton label="Hinzufügen" primary={true} onTouchTap={this.handleOpenAdd} />
                    <RaisedButton label="Bearbeiten" primary={true} onTouchTap={this.handleOpenEdit}/>
                </ToolbarGroup>
                <ToolbarGroup lastChild="true">
                    <RaisedButton label="Löschen" backgroundColor="#EF5350" />
                </ToolbarGroup>
            </Toolbar>
                <Dialog
                    title="Benutzer hinzufügen"
                    actions={actionsAdd}
                    modal={false}
                    open={this.state.openAdd}
                    onRequestClose={this.handleCloseAdd}
                >
                    <TextField
                        hintText="Benutzername"
                        floatingLabelText="Benutzername"
                        name="username"
                        onChange={this.onChange}
                        value={this.props.user.username}
                        errorText={this.state.errors.username}
                    />
                    <TextField
                        hintText="Vorname"
                        floatingLabelText="Vorname"
                        name="firstname"
                        onChange={this.onChange}
                        value={this.props.user.username}
                        errorText={this.state.errors.firstname}
                    />
                    <TextField
                        hintText="Nachname"
                        floatingLabelText="Nachname"
                        name="lastname"
                        onChange={this.onChange}
                        value={this.state.lastname}
                        errorText={this.state.errors.lastname}
                    />
                    <TextField
                        hintText="Ihre E-Mail Adresse"
                        floatingLabelText="E-Mail"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        errorText={this.state.errors.email}
                    />
                    <TextField
                        hintText="Telefonnummer"
                        floatingLabelText="Telefonnummer"
                        name="phone"
                        onChange={this.onChange}
                        value={this.state.phone}
                        errorText={this.state.errors.phone}
                    />
                    <TextField
                        hintText="Ihr Passwort"
                        floatingLabelText="Password"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        errorText={this.state.errors.password}
                                    />
                                    <TextField
                                    hintText="Passwort Wiederholen"
                                    floatingLabelText="Password Wiederholen"
                                    type="password"
                                    name="passwordConfirmation"
                                    onChange={this.onChange}
                                    value={this.state.passwordConfirmation}
                                    errorText={this.state.errors.passwordConfirmation}

                                />
                                <RaisedButton label="Registrieeeeren" primary={true} onTouchTap={this.onSubmit}/>
                    <div>
                        <div>
                        <a>Rollenverwaltung</a>
                        </div>
                    <DropDownMenu name="userrole" value={this.state.userrole} onChange={this.onChange}>
                        <MenuItem 
                        value={0} 
                        primaryText="Admin" 
                        onChange={this.onChange}
                        />
                        <MenuItem value={1} primaryText="User" onChange={this.onChange} />
                    </DropDownMenu>
                    </div>
                </Dialog>
                <Dialog
                    title="Benutzer bearbeiten"
                    actions={actionsEdit}
                    modal={false}
                    open={this.state.openEdit}
                    onRequestClose={this.handleCloseEdit}
                >
                   <TextField
                        hintText="Benutzername"
                        floatingLabelText="Benutzername"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                        errorText={this.state.errors.username}
                    />
                    <TextField
                        hintText="Vorname"
                        floatingLabelText="Vorname"
                        name="firstname"
                        onChange={this.onChange}
                        value={this.state.firstname}
                        errorText={this.state.errors.firstname}
                    />
                    <TextField
                        hintText="Nachname"
                        floatingLabelText="Nachname"
                        name="lastname"
                        onChange={this.onChange}
                        value={this.state.lastname}
                        errorText={this.state.errors.lastname}
                    />
                    <TextField
                        hintText="Ihre E-Mail Adresse"
                        floatingLabelText="E-Mail"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        errorText={this.state.errors.email}
                    />
                    <TextField
                        hintText="Telefonnummer"
                        floatingLabelText="Telefonnummer"
                        name="phone"
                        onChange={this.onChange}
                        value={this.state.phone}
                        errorText={this.state.errors.phone}
                    />
                    <TextField
                        hintText="Ihr Passwort"
                        floatingLabelText="Password"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        errorText={this.state.errors.password}
                                    />
                                    <TextField
                                    hintText="Passwort Wiederholen"
                                    floatingLabelText="Password Wiederholen"
                                    type="password"
                                    name="passwordConfirmation"
                                    onChange={this.onChange}
                                    value={this.state.passwordConfirmation}
                                    errorText={this.state.errors.passwordConfirmation}

                                />
                                <RaisedButton label="Edit" primary={true} onTouchTap={this.onSubmitEdit}/>
                    <div>
                        <div>
                        <a>Rollenverwaltung</a>
                        </div>
                    <DropDownMenu value={this.state.userrole}>
                        <MenuItem value={0} primaryText="Admin" />
                        <MenuItem value={1} primaryText="User" />
                    </DropDownMenu>
                    </div>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    };
}
export default connect(mapStateToProps)(UserToolbar);