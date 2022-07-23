import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@mui/material/Autocomplete";
import MoneyIcon from '@material-ui/icons/Money';

class AdminOrderView extends Component{

    constructor(props) {
        super(props);


        this.state = {
            position: [
                { label: 'D-100'},
                { label: 'D-101' },
                { label: 'D-102' },

            ]
        }
    }




    render() {

        const columns = [
            { field: 'orderOd', headerName: 'orderId', width: 140 },
            { field: 'startingDate', headerName: 'starting Date', width: 150 },
            { field: 'endingDate', headerName: 'Ending Date', width: 150 },
            { field: 'review', headerName: 'Review', width: 150 },
            { field: 'status', headerName: 'status', width: 150 },
            { field: 'totalPrice', headerName: 'totalPrice', width: 150 },
            { field: 'customer Id', headerName: 'customer Id', width: 150 },

        ];


        const rows = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
            { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
            { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
            { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
            { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
            { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ];


        const columns2 = [
            { field: 'rentalID', headerName: 'rentalId', width: 140 },
            { field: 'orderId', headerName: 'orderId', width: 120 },
            { field: 'startingDate2', headerName: 'starting Date', width: 140 },
            { field: 'endingDate2', headerName: 'Ending Date', width: 140 },
            { field: 'endingTime', headerName: 'Ending time', width: 140 },
            { field: 'driverId', headerName: 'DriverId', width: 120 },
            { field: 'fullPayment', headerName: 'Full payment', width: 140 },

        ];


        const rows2 = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
            { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
            { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
            { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
            { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
            { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ];
















        let {classes} = this.props;

        const StyledBadge = withStyles((theme) => ({
            badge: {
                right: -3,
                top: 13,
                border: `2px solid ${theme.palette.background.paper}`,
                padding: '0 4px',
            },
        }))(Badge);




        return (
            <div className={classes.container}>
                <div className={classes.container_main1}>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={12} color="secondary">
                            <EmailIcon />
                        </StyledBadge>
                    </IconButton>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={12} color="secondary">
                            <MessageIcon />
                        </StyledBadge>
                    </IconButton>


                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={12} color="secondary">
                            <WhatsAppIcon />
                        </StyledBadge>
                    </IconButton>



                </div>


                <div className={classes.container_main2}>

                    <Typography
                        variant="h5"
                        // style={{
                        //     left:"12%",
                        //     position:'relative',
                        //     top:'20%',
                        // }}
                    >
                        Order Details
                    </Typography>
                </div>

                <div  className={classes.container_main3}>
                    <div className={classes.container_div2_div1}>
                        <div style={{ height: '100%', width: '100%', border:'2px solid black' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={7}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>

                    </div>

                </div>

                <div className={classes.container_main4}>
                    <TextField
                        id="outlined-basic"
                        label="searchOrderId"
                        variant="outlined"
                        size={"small"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />




                    <Button variant="contained"
                            color="secondary"
                            startIcon={<CheckIcon/>}
                            style={
                                {backgroundColor: '#345e17',
                                //marginLeft:'10%',
                                }}

                    >
                        Conform Order
                    </Button>

                    <Button variant="contained"
                            color="primary"
                            startIcon={<PeopleAltIcon/>}

                    >
                        Customer Page
                    </Button>



                    <Button variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon/>}
                            // style={
                            //     {
                            //         marginLeft:'10%',
                            //     }}
                    >
                        Wrong Order
                    </Button>







                </div>


                <div className={classes.container_main5}  >
                    <div className={classes.container_main5_div1}>
                        <Typography variant="h5">Rental View</Typography>

                        <div className={classes.container_main5_div1_div1} >
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.position}
                                sx={{ width: 100 }}
                                renderInput={(params) => <TextField {...params}
                                                                    label="Driver add "
                                                                    variant="outlined"
                                                                    size={"small"}

                                />}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                onChange={(e, value) => {
                                    console.log(value.label);
                                }}
                                size="small"
                                //variant="outlined"


                                style={
                                    { width: '100%',
                                        marginTop:'2%'
                                    }
                                }
                            />


                        </div>





                    </div>



                    <div className={classes.container_main5_div2}>
                        <div style={{ height: '100%', width: '100%', border:'2px solid black' }}>
                            <DataGrid
                                rows={rows2}
                                columns={columns2}
                                pageSize={7}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>
                    </div >


                    <div className={classes.container_main5_div3}>
                        <div className={classes.container_main5_div3_div1}>
                            <TextField
                                id="outlined-basic"
                                label="Order Balance"
                                variant="outlined"
                                size={"small"}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MoneyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />


                        </div>

                        <div className={classes.container_main5_div3_div2}>
                            <Button variant="contained"
                                    color="secondary"
                                    startIcon={<CheckIcon/>}
                                    style={
                                        {backgroundColor: '#345e17',
                                            //marginLeft:'10%',
                                        }}

                            >
                                Happy Order
                            </Button>


                        </div>


                    </div>
                </div>






            </div>
        )
    }
}

export default withStyles(styleSheet)(AdminOrderView)

