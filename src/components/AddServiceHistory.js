import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import Alert from '@mui/material/Alert';


const AddServiceHistory = () => {


    const [years, setYears] = useState([]);

    useEffect(() => {
        let startYear = 1990;
        const d = new Date();
        let endYear = d.getFullYear();
        let allYears = [];
        for (let i = startYear; i <= endYear; i++) {
            allYears.push(i);
        }
        setYears(allYears);
    }, []);
    console.log(years);

    const [serviceEntry, setServiceEntry] = useState({
        customerName: "",
        mobile: "",
        carModel: "",
        year: "",
        registrationNumber: "",
        address: "",
        carColor: "",
        serviceRequired: [],
        // dateOfService: date,
        totalAmount: "",
        dailyWash: "",
    });

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    const validateServiceHistory = (event) => {
        event.preventDefault();
        if(serviceEntry) {
            setAlertContent("Entry Saved to Service History");
            setAlert(true);
        }
    }

    const services = [
        "Car Wash",
        "Coating",
        "PPF",
        "Car Interiors",
        "Coloring",
        "Alloy Wheels",
    ];

    const handleServicesChange = (event) => {
        const {
            target: { value },
        } = event;
        setServiceEntry(obj => ({ ...obj, serviceRequired: typeof value === 'string' ? value.split(',') : value }))
    };

    console.log("serviceEntry ", serviceEntry)


    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="p-5 mb-4 bg-white rounded-3">
                                <form>
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="customerName"
                                        type="text"
                                        label="Customer Name"
                                        variant="outlined"
                                        value={serviceEntry.customerName}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, customerName: e.target.value }))}
                                    />
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="mobile"
                                        type="tel"
                                        label="Mobile Number"
                                        variant="outlined"
                                        value={serviceEntry.mobile}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, mobile: e.target.value }))}
                                    />
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="carModel"
                                        type="text"
                                        label="Car Model"
                                        variant="outlined"
                                        value={serviceEntry.carModel}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, carModel: e.target.value }))}
                                    />
                                    <FormControl fullWidth className="mb-3">
                                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={serviceEntry.year}
                                            label="Year"
                                            onChange={(e) => setServiceEntry(obj => ({ ...obj, year: e.target.value }))}
                                        >
                                            {
                                                years.map((year) => {
                                                    return <MenuItem key={year} value={year}>{year}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="registrationNumber"
                                        type="text"
                                        label="Registration Number"
                                        variant="outlined"
                                        value={serviceEntry.registrationNumber}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, registrationNumber: e.target.value }))}
                                    />
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="address"
                                        type="text"
                                        label="Address"
                                        variant="outlined"
                                        value={serviceEntry.address}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, address: e.target.value }))}
                                    />
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="carColor"
                                        type="text"
                                        label="Car Color"
                                        variant="outlined"
                                        value={serviceEntry.carColor}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, carColor: e.target.value }))}
                                    />
                                    <FormControl fullWidth className="mb-3">
                                        <InputLabel id="demo-multiple-name-label">
                                            Service Required
                                        </InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            multiple
                                            value={serviceEntry.serviceRequired}
                                            onChange={handleServicesChange}
                                            input={<OutlinedInput label="Service Required" />}
                                        >
                                            {services.map((service) => (
                                                <MenuItem key={service} value={service}>
                                                    {service}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <LocalizationProvider style={{ width: "100%" }} fullWidth dateAdapter={AdapterDayjs}>
                                        <DatePicker label="Date of Service" className="mb-3" fullWidth />
                                    </LocalizationProvider>
                                    <TextField
                                        className="mb-3"
                                        fullWidth
                                        id="totalAmount"
                                        type="text"
                                        label="Total Amount"
                                        variant="outlined"
                                        value={serviceEntry.totalAmount}
                                        onChange={(e) => setServiceEntry(obj => ({ ...obj, totalAmount: e.target.value }))}
                                    />
                                    <FormControl fullWidth className="mb-3">
                                        <InputLabel id="dailyWash">Daily Wash</InputLabel>
                                        <Select
                                            labelId="dailyWash"
                                            id="dailyWash"
                                            value={serviceEntry.dailyWash}
                                            label="Daily Wash"
                                            onChange={(e) => setServiceEntry(obj => ({ ...obj, dailyWash: e.target.value }))}
                                            >
                                            <MenuItem value={"yes"}>Yes</MenuItem>
                                            <MenuItem value={"no"}>No</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <button onClick={(e) => validateServiceHistory(e)} className="m-auto d-block btn btn-primary btn-lg mb-3">
                                        Submit
                                    </button>
                                    {alert ? <Alert className="alert-position" severity='success'>{alertContent}</Alert> : <></> }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddServiceHistory;
