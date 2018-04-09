
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FreeBusyTable from './freebusytable';
import Center from 'react-center';

const styles = {
    space: {
        padding: 50,
    },
    header: {
        paddingTop: 50,
    },

};

/*
 * Todo: Data from DB instead of static Data
 */
const carData = [
    {

        _id: "5821f387e29f610f41c645a3",

        vendor: "VW",

        model: "E-Golf",

        mileage: 6034,

        licenseNumber:"F-FH-1233",

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

        licenseNumber:"F-FH-736",

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

        licenseNumber:"F-FH-890",

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

        licenseNumber:"F-FH-8",

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

        licenseNumber:"F-FH-1",

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

class FreeBusy extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.space}>
                    <a>Wählen sie ihr Datum und das Fahrzeug um eine Übersicht der Verfügbarkeit der Fahrzeuge zu
                        erhalten</a>
                    <Center>
                    <div style={styles.space}>
                        <div>
                            <DatePicker hintText="Datum wählen" mode="landscape"/>
                        </div>
                        <div style={styles.header}>
                            <div>
                            <a>Wählen Sie ein Fahrzeug aus der Liste</a>
                            </div>
                            <SelectField
                                onChange={this.handleChange}
                                maxHeight={200}
                            >
                                {items}
                            </SelectField>
                        </div>

                    </div>
                    </Center>
                    <FreeBusyTable/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default FreeBusy;
