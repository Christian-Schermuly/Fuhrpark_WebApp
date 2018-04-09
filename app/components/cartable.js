import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from 'material-ui/Table';
import AddCar from './cartoolbar';
import IconCar from 'material-ui/svg-icons/maps/directions-car';
import { connect } from "react-redux"
import { selectCarFromTable } from "../actions/carActions"

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

class TableExampleComplex extends React.Component {

    constructor(props) {
        super(props);
        
        var self = this;
        
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '500px',
        };
        
                // daten vom server holen
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://x.x.x.x/api/cars"); //IP has to be Set. Currently deleted, since public
        xhr.setRequestHeader('Authentication', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4)
            {
                self.setState({carData: JSON.parse(xhr.response)});
            }
        };
        xhr.send(null);
    }
    /*
     * gets the ID of the current selected row from the selected array
     * since the ID match the position in the carData array, the data
     * can be extracted and dispatched into the store for further use
     * in the edit-menu or delete (since the _id of the car in the DB is needed
     * for this) 
     */
    _onRowSelection(rows) {
        var carData = this.state.carData || [];
    
    for (let i = 0; i < rows.length; i++) {
        this.props.dispatch(selectCarFromTable(this.state.carData[rows[i]]));
        console.log(this.state.carData[rows[i]]);
        
        
    }
}

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.car]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        console.log(this.props);   
        var carData = this.state.carData || [];
    
        return (
            <div>
                <AddCar/>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    onRowSelection={(rows) => this._onRowSelection(rows)}
                    
                    
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="9" style={{textAlign: 'center'}}>
                                <IconCar/>
                                <div>Auto Verwaltung</div>
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Fahrzeug ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Hersteller">Hersteller</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Modell">Modell</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Aktueller Kilometerstand">Kilometerstand</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Kennzeichen">Kennzeichen</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Zeigt Verfügbarkeit des Fahrzeugs an">Verfügbar</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Batterie">Batterie</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Ladezustand">Ladezustand</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Geladene kWh">Geladene kWh</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                         
                    >
                        {carData.map( (row, index) => (
                            <TableRow key={index} 
                            selected={row.selected}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row._id}</TableRowColumn>
                                <TableRowColumn>{row.vendor}</TableRowColumn>
                                <TableRowColumn>{row.model}</TableRowColumn>
                                <TableRowColumn>{row.mileage}</TableRowColumn>
                                <TableRowColumn>{row.licenseNumber}</TableRowColumn>
                                <TableRowColumn>{row.available}</TableRowColumn>
                                <TableRowColumn>{row.battery}</TableRowColumn>
                                <TableRowColumn>{row.charging}</TableRowColumn>
                                <TableRowColumn>{row.chargedkWh}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }
}

/*
 * connects cartable to the Provider/store
 */
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(TableExampleComplex);