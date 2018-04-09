

/*
 * unchanged -> outdated
 */
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Center from 'react-center';

const carData =[
    {

        _id: "5821f387e29f610f41c645a3",

        vendor: "VW",

        model: "E-Golf",

        mileage: 6034,

        __v: 0,

        available: true,

        battery: 0,

        charging: false,

        chargedkWh: 0

    },
    {

        _id: "5821f387e29f610f41c645a3",

        vendor: "Audi",

        model: "A3 e-tron",

        mileage: 29670,

        __v: 0,

        available: true,

        battery: 0,

        charging: false,

        chargedkWh: 0

    },
    {

        _id: "5821f387e29f610f41c645a3",

        vendor: "Tesla",

        model: "Model 3",

        mileage: 106000,

        __v: 0,

        available: true,

        battery: 0,

        charging: false,

        chargedkWh: 0

    },
    {

        _id: "5821f387e29f610f41c645a3",

        vendor: "Audi",

        model: "A3 e-tron",

        mileage: 23345,

        __v: 0,

        available: true,

        battery: 0,

        charging: false,

        chargedkWh: 0

    },
    {

        _id: "5821f387e29f610f41c645a3",

        vendor: "Renault",

        model: "Zoe",

        mileage: 223670,

        __v: 0,

        available: true,

        battery: 0,

        charging: false,

        chargedkWh: 0

    },
];

const items = [];
for (let i = 0; i < carData.length; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={carData[i].model}/>);
}

const styles = {
    space: {
        padding: 20,
    },
    header:{
        paddingTop:50,
    }

};

class CarExport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 10};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        return (
            <MuiThemeProvider>
                <Center>
                    <div style={styles.header}>
                        <a> Bitte wählen Sie das Fahrzeug für den Datenexport</a>
                        <Center>
                            <div>
                                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                                    {items}
                                </DropDownMenu>
                            </div>
                        </Center>
                        <Center>
                        <div>
                            <RaisedButton label="Export" primary={true}/>
                        </div>
                        </Center>
                    </div>
                </Center>
            </MuiThemeProvider>
        );
    }
}

export default CarExport;
