import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import signupActions from '../actions/signupActions';
import createCarValidation from '../actions/validations/createCarValidation';
import axios from 'axios';
import {connect} from 'react-redux'

/*
 * toolbar in the car-table
 * 
 * provides functionality to create/edit/delete cars
 * 
 * 
 */

class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            vendor: '',
            model: '',
            mileage:'',
            licenseNumber:'',
            available: false,
            chargedkWh:'',
            battery:'',
            charging: false,
            chargedkWh:'',
            errors:{},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }
        onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
        isValid(){
        const{errors, isValid} = createCarValidation(this.state)

        if(!isValid)
        {
            this.setState({errors});
        }

        return isValid;
    }
/*
 * Submits data via axios to the REST-API
 * 
 * should be placed into car-Actions for consistency
 * after testing
 * 
 */
    onSubmit(e){
        console.log(this.state);
        e.preventDefault();
        if(this.isValid())
        {
            axios({
                method: 'post',
                url: 'https://x.x.x.x/api/cars', //IP Deleted, Public
                data: this.state
                
            })
            console.log(this.state);
        }
    }
    
    /*
     * 
     * @param {type} e
     * @returns {undefined}
     */
        onSubmitEdit(e){
        console.log(this.state);
       // e.preventDefault();
       // if(this.isValid())
       // {
            axios({
                method: 'put',
                url: 'https://10.18.2.151/api/cars/:car',
                data: this.state
                
            })
            console.log(this.state);
       // }
    }
        /*
         * resets the default options for "new" cars
         */
        
    handleOpenAdd = () => {
        this.setState({openAdd: true});
        this.state._id = null;
        this.state.vendor = '';
        this.state.model = '';
        this.state.mileage = '';
        this.state.licenseNumber = '';
        this.state.available = false;
        this.state.chargedkWh = '';
        this.state.battery = '';
        this.state.charging = false;
        //this.state.chargedkWh= '';
    };

    handleCloseAdd = () => {
        this.setState({openAdd: false});
    };
        handleCommitAdd = () => {
        this.setState({openAdd: false});
    };
    /*
     * gets car-data from the store as default values for the edit-menu
     * 
     */
    handleOpenEdit = () => {
        this.setState({openEdit: true});
        this.state._id = this.props.car.car._id;
        this.state.vendor = this.props.car.car.vendor;
        this.state.model = this.props.car.car.model;
        this.state.mileage = this.props.car.car.mileage;
        this.state.licenseNumber = this.props.car.car.licenseNumber;
        this.state.available = this.props.car.car.available;
        this.state.chargedkWh = this.props.car.car.chargedkWh;
        this.state.battery = this.props.car.car.battery;
        this.state.charging = this.props.car.car.carging;

    };
    handleCloseEdit = () => {
        this.setState({openEdit: false});
    };
        handleCommitEdit = () => {
        this.setState({openEdit: false});
    };

    render() {
            

                const actionsAdd = [
            <FlatButton
                label="Speichern"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseAdd}
            />,
            <FlatButton
                label="Abbrechen"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCommitAdd}
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
                    <RaisedButton label="Hinzufügen" primary={true} onTouchTap={this.handleOpenAdd}/>
                    <RaisedButton label="Bearbeiten" primary={true} onTouchTap={this.handleOpenEdit}/>
                    <RaisedButton label="Export" primary={true} onTouchTap={this.handleOpenEdit}/>
                </ToolbarGroup>
                <ToolbarGroup lastChild="true">
                    <RaisedButton label="Löschen" backgroundColor="#EF5350" />
                </ToolbarGroup>
            </Toolbar>
                <Dialog
                    title="Auto hinzufügen"
                    actions={actionsAdd}
                    modal={false}
                    open={this.state.openAdd}
                    onRequestClose={this.handleCloseAdd}
                >
                    <TextField
                        hintText="Hersteller"
                        floatingLabelText="Hersteller"
                        name="vendor"
                        onChange={this.onChange}
                        value={this.state.vendor}
                        
                    />
                    <TextField
                        floatingLabelText="Modell"
                        name="model"
                        onChange={this.onChange}
                        value={this.state.model}
                        errorText={this.state.errors.model}
                    />
                    <TextField
                        hintText="Kennzeichen"
                        floatingLabelText="Kennzeichen"
                        name="licenseNumber"
                        onChange={this.onChange}
                        value={this.state.licenseNumber}
                        errorText={this.state.errors.licenseNumber}
                    />
                    <TextField
                        hintText="Kilometerstand"
                        floatingLabelText="Kilometerstand"
                        name="mileage"
                        onChange={this.onChange}
                        value={this.state.mileage}
                        errorText={this.state.errors.mileage}
                    />
                    <TextField
                        hintText="Geladene kWh"
                        floatingLabelText="Geladene kWh"
                        name="chargedkWh"
                        onChange={this.onChange}
                        value={this.state.chargedkWh}
                        errorText={this.state.errors.chargedkWh}
                    />
                    <RaisedButton label="Speichern" primary={true} onTouchTap={this.onSubmit}/>
                    <div>
                    <DropDownMenu value={this.state.available}>
                        <MenuItem value={true} primaryText="Verfügbar" />
                        <MenuItem value={false} primaryText="Nicht verfügbar" />
                    </DropDownMenu>
                    <DropDownMenu value={this.state.charging}>
                        <MenuItem value={true} primaryText="Ladend" />
                        <MenuItem value={false} primaryText="Nicht Ladend" />
                    </DropDownMenu>
                    </div>

                </Dialog>
                <Dialog
                    title="Auto bearbeiten"
                    actions={actionsEdit}
                    modal={false}
                    open={this.state.openEdit}
                    onRequestClose={this.handleCloseEdit}
                >
                    <TextField
                        hintText="Hersteller"
                        floatingLabelText="Hersteller"
                        name="vendor"
                        onChange={this.onChange}
                        value={this.state.vendor}
                    />
                    <TextField
                        floatingLabelText="Modell"
                        name="model"
                        onChange={this.onChange}
                        value={this.state.model}
                        errorText={this.state.errors.model}
                    />
                    <TextField
                        hintText="Kennzeichen"
                        floatingLabelText="Kennzeichen"
                        name="licenseNumber"
                        onChange={this.onChange}
                        value={this.state.licenseNumber}
                        errorText={this.state.errors.licenseNumber}
                    />
                    <TextField
                        hintText="Kilometerstand"
                        floatingLabelText="Kilometerstand"
                        name="mileage"
                        onChange={this.onChange}
                        value={this.state.mileage}
                        errorText={this.state.errors.mileage}
                    />

                    <TextField
                        hintText="Geladene kWh"
                        floatingLabelText="Geladene kWh"
                        name="chargedkWh"
                        onChange={this.onChange}
                        value={this.state.chargedkWh}
                        errorText={this.state.errors.chargedkWh}
                    />
                    <RaisedButton label="speichern" primary={true} onTouchTap={this.onSubmitEdit}/>
                    <div>
                        <DropDownMenu value={this.state.available}>
                            <MenuItem value={true} primaryText="Verfügbar" />
                            <MenuItem value={false} primaryText="Nicht verfügbar" />
                        </DropDownMenu>
                        <DropDownMenu value={this.state.charging}>
                            <MenuItem value={true} primaryText="Ladend" />
                            <MenuItem value={false} primaryText="Nicht Ladend" />
                        </DropDownMenu>
                    </div>
                </Dialog>
            </div>
        );
    }
}

/*
 * connects cartoolbar to the Provider/Store
 * provides the car-Object from the store as car
 */
function mapStateToProps(state){
    return{
        car: state.car
    };
}
export default connect(mapStateToProps)(ToolbarExamplesSimple);