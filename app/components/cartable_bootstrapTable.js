import React from 'react';
//import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
//    from 'material-ui/Table';
import AddCar from './cartoolbar';
import IconCar from 'material-ui/svg-icons/maps/directions-car';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
<link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css">
</link>

/*
 * Obsolete
 * Class for testing differend approaches on the table-issues
 * 
 * 
 */



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
const cellEditProp = {
  mode: 'click'
};

//--
class NameEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = {
      name: props.defaultValue,
      open: true
    };
  }
  focus() {
    this.refs.inputRef.focus();
  }
  updateData() {
    this.props.onUpdate(this.state.name);
  }
  close = () => {
    this.setState({ open: false });
    this.props.onUpdate(this.props.defaultValue);
  }
  render() {
    const fadeIn = this.state.open ? 'in' : '';
    const display = this.state.open ? 'block' : 'none';
    return (
      <div className={ `modal fade ${fadeIn}` } id='myModal' role='dialog' style={ { display } }>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <input
                ref='inputRef'
                className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
                style={ { display: 'inline', width: '50%' } }
                type='text'
                value={ this.state.name }
                onChange={ e => { this.setState({ name: e.currentTarget.value }); } } />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' onClick={ this.updateData }>Save</button>
              <button type='button' className='btn btn-default' onClick={ this.close }>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





//---
const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);

const options = {
  onRowClick: function(row) {
    alert(`You click row id: ${row.model}`);
  },
  onRowDoubleClick: function(row) {
    alert(`You double click row id: ${row.id}`);
  },
  defaultSortName: 'licenseNumber',
      defaultSortOrder: 'desc'
};

export default class TableExampleComplex extends React.Component {
          getSelectedRowKeys() {
    //Here is your answer
    console.log(this.refs.table.state.selectedRowKeys)
}



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
        xhr.open("GET", "https://x.x.x.x/api/cars"); //IP deleted, public
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

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.car]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };
/*
    render() {
           
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
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{index}</TableRowColumn>
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
    */
   
   render(){
       function format(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)" 
};
       var carData = this.state.carData || [];
       return(
               <div>
               <button onClick={this.getSelectedRowKeys.bind(this)}>Details</button>
       
               <BootstrapTable data={ carData }
                cellEdit={ cellEditProp }
                striped
                selectRow={selectRowProp}
                hover
    condensed
    pagination
    insertRow={ true }
    deleteRow
    search
     options={ options }>
               <link rel="stylesheet" src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css">
</link>
            <TableHeaderColumn dataField='_id' isKey dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='vendor' dataSort customEditor={ { getElement: createNameEditor } }>Hersteller</TableHeaderColumn>
        <TableHeaderColumn dataField='model' dataSort>Model</TableHeaderColumn>
        <TableHeaderColumn dataField='mileage' dataSort>Kilometerstand</TableHeaderColumn>
        <TableHeaderColumn dataField='licenseNumber' dataSort>Kennzeichen</TableHeaderColumn>
        <TableHeaderColumn dataField='available' dataSort>Verfügbar</TableHeaderColumn>
        <TableHeaderColumn dataField='battery' dataSort>Ladestand</TableHeaderColumn>
        <TableHeaderColumn dataField='charging' dataSort>Läd</TableHeaderColumn>
        <TableHeaderColumn dataField='chargedkWh' dataSort>KWH</TableHeaderColumn>
</BootstrapTable>
               </div>
               );
   }
   
}