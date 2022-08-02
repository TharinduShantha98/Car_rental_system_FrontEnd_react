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
import {DataGrid,GridToolbar} from "@mui/x-data-grid";
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
import OrderService from "../../../services/OrderService";
import {drawDOM, drawing} from "@progress/kendo-drawing";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';// Import css
import CarServices from "../../../services/CarServices";
import AdminService from "../../../services/AdminService";
import DriverService from "../../../services/DriverService";
import RefreshIcon from '@material-ui/icons/Refresh';

class AdminOrderView extends Component{

    constructor(props) {
        super(props);


        this.state = {
            position: [
                // { label: 'D-100'},
                // { label: 'D-101' },
                // { label: 'D-102' },

            ],

            formData:{

                rentalId:"R-100",
                rentalDate:"",
                returnDate:"",
                totalPayment:"Airport",
                damagePayment:"",
                status:"pending",
                customer:{
                    customerId:"",
                    firstName:"",
                    address:"",
                    email:"",
                    NICNumber:"",
                    drivingLicNum:"",
                    contactNum:"",
                    password:"",
                    licenseImg1:"",
                    NICImg:""
                },
                driver:{
                    driverId:"",
                    firstName:"",
                    lastName:"",
                    age:"",
                    contactNum:"",
                    licenseId:"",
                    status:"",
                },
                car:{
                    carId:"",
                    type:"",
                    numberOfPassengers:"",
                    transmissionType:"",
                    color:"",
                    registrationNum:"",
                    priceForExrKM:"",
                    freeMileage:"",
                    MonthlyRate:"",
                    DailyRate:"",
                    frontView:"",
                    backView:"",
                    sideView:"",
                    interiorView:""
                },
                admin:{
                    adminId:"",
                    firstName:"",
                    lastName:"",
                    position:"",
                    email:"",
                    contactNum:""
                }

            },





            availableDriver:[],






            data:[],

            selectRowOrderId:"",

            selectRowOrderObject:"",



        }
    }

// get all orders
    getAllOrders = async ()=>{
        let res = await OrderService.getAllOrders();
        console.log(res);
       // let data1 = this.state.data1;

        if(res.data.code === 200){
            //console.log(res.data.data);
            this.setState({

                data: res.data.data
            })

        }


    }



// after order table row click, get orderId  and find relative order object using orderId
    findSelectOrderObject = async  ()=>{

        for(let i =0; i < this.state.data.length;i++){
            if(this.state.data[i].orderId === this.state.selectRowOrderId){
                this.setState({selectRowOrderObject:this.state.data[i]});

            }
        }

    }

// update order  after admin check
    updateOrder = async ()=>{
            let selectRowOrderObject = this.state.selectRowOrderObject;
            selectRowOrderObject.status = "success"
            this.setState(selectRowOrderObject);
            let response = await OrderService.updateOrder(this.state.selectRowOrderObject);
            console.log(response.data);

    }

// get car detail and set state
    getCarDetails = async ()=>{
        if(this.state.selectRowOrderObject != null){

            let params = {
                id:this.state.selectRowOrderObject.orderDetails[0].carId
            }

            let response = await CarServices.searchCar(params)
            console.log(response.data);

            let formData = this.state.formData;
            formData.car = response.data.data
            this.setState(formData);


        }
    }

// get available drives

    getAvailableDrives =  async ()=>{
        let position1 = this.state.position;
        position1 = [];
        this.setState({position:position1})

        let  response  = await DriverService.availableDrives();
       //console.log(response);
        let data  = response.data.data;

        let position = this.state.position;
        for(let i =0; i < data.length; i++){
            position.push(
                 { label: data[i]},

            )


        }

        this.setState({position:position})




    }

    //set autoComplete









    componentDidMount() {

        this.getAllOrders().then(r => {

        })



        let length = this.state.availableDriver.length;
        console.log(length);


    }


    render() {

        const columns = [
            { field: 'orderId', headerName: 'orderId', width: 140,},
            { field: 'startingDate', headerName: 'starting Date', width: 150 },
            { field: 'endingDate', headerName: 'Ending Date', width: 150 },
            { field: 'review', headerName: 'Review', width: 150 },
            { field: 'status', headerName: 'status', width: 150 },
            { field: 'totalPrice', headerName: 'totalPrice', width: 150 },
            { field: 'customerId', headerName: 'customer Id', width: 150 },
            { field: 'CarId', headerName: 'car Id', width: 150 },

        ];

        const rows = [];

        for (let i=0; i < this.state.data.length;i++){



            rows.push({ id:i,
                orderId:this.state.data[i].orderId,
                startingDate:this.state.data[i].requiredDate,
                endingDate:this.state.data[i].returnDate,
                review:this.state.data[i].review,
                status:this.state.data[i].status,
                totalPrice:this.state.data[i].totalPrice,
                customerId:this.state.data[i].customer.customerId,
                CarId:this.state.data[i].orderDetails[0].carId,

            })


        }



        // const rows = [
        //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        // ];


        const columns2 = [
            { field: 'rentalID', headerName: 'rental Id', width: 140 ,},
            { field: 'orderId', headerName: 'order Id', width: 120 },
            { field: 'startingDate2', headerName: 'starting Date', width: 140 },
            { field: 'endingDate2', headerName: 'Ending Date', width: 140 },
            { field: 'driverId', headerName: 'DriverId', width: 120 },
            { field: 'status', headerName: 'status', width: 140 },
            { field: 'damagePayment', headerName: 'damagePayment', width: 140 },
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
                                rowsPerPageOptions={[10]}
                                checkboxSelection
                                components={{Toolbar: GridToolbar}}
                                onRowClick={(e)=>{
                                    console.log("ahhh harii harii ")
                                    console.log(e.row.orderId)
                                    this.setState({selectRowOrderId:e.row.orderId})


                                }}


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

                            onClick={()=>{
                                confirmAlert({
                                    title: 'Update & Rental to submit',
                                    message: 'Are you sure to do this.',
                                    buttons: [
                                        {
                                            label: 'Yes',
                                            onClick: () => {
                                                this.findSelectOrderObject().then(r => {
                                                    console.log(this.state.selectRowOrderObject);
                                                    this.updateOrder().then(r => {
                                                        this.getCarDetails().then(r => {

                                                        })

                                                    })

                                                });




                                            }
                                        },
                                        {
                                            label: 'No',
                                            onClick: () => alert('Click No')
                                        }
                                    ]
                                });


                            }}



                    >
                        Conform Order
                    </Button>

                    <Button variant="contained"
                            color="primary"
                            startIcon={<PeopleAltIcon/>}


                            onClick={()=>{
                                console.log(this.state.formData.car.carId)



                            }}

                    >
                        Customer Page
                    </Button>



                    <Button variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon/>}
                            onClick={()=>{
                                confirmAlert({
                                    title: 'Confirm to submit',
                                    message: 'Are you sure to do this.',
                                    buttons: [
                                        {
                                            label: 'Yes',
                                            onClick: () => alert('Click Yes')
                                        },
                                        {
                                            label: 'No',
                                            onClick: () => alert('Click No')
                                        }
                                    ]
                                });
                            }}
                    >
                        Wrong Order
                    </Button>







                </div>


                <div className={classes.container_main5}  >
                    <div className={classes.container_main5_div1}>
                        <Typography
                            variant="h3"
                            style={{color:"#000",
                                fontWeight:"30px"
                            }}

                        >Rental View</Typography>

                        <div className={classes.container_main5_div1_div1} >
                            <TextField
                                id="outlined-basic"
                                label="Advance Payment"
                                variant="outlined"
                                size={"small"}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MoneyIcon />
                                        </InputAdornment>
                                    ),
                                }}

                                style={
                                    { width: '80%',
                                        marginTop:'2%'
                                    }
                                }
                            />



                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.position}
                               // sx={{ width: 100 }}
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

                                popupIcon={<RefreshIcon
                                    onClick={()=>{
                                        console.log("hello machan");
                                        this.getAvailableDrives().then(r => {
                                            console.log(this.state.position.length)

                                        })
                                    }}


                                />}
                                style={
                                    { width: '80%',
                                        marginTop:'2%'
                                    }
                                }

                            />

                            <Button
                                variant="contained"
                                color="primary"
                                style={
                                    { width: '80%',
                                        marginTop:'2%'
                                    }
                                }


                            >
                                update Rental

                            </Button>




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
                                components={{Toolbar: GridToolbar}}
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

