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
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@mui/material/Autocomplete";
import MoneyIcon from '@material-ui/icons/Money';
import OrderService from "../../../services/OrderService";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import CarServices from "../../../services/CarServices";
import AdminService from "../../../services/AdminService";
import DriverService from "../../../services/DriverService";
import RefreshIcon from '@material-ui/icons/Refresh';
import CustomerService from "../../../services/CustomerService";
import {ValidatorForm} from "react-material-ui-form-validator";
import RentalServices from "../../../services/RentalServices";

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

                rentalId:"",
                orderId:"",
                rentalDate:"",
                returnDate:"",
                totalPayment:"",
                damagePayment:"0",
                downPayment:"0",
                status:"pending",
                driverId:"NON SELECT",
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

            adminId:"A-100",

            allRental:[],

            searchRental:"",


            rentalDriverId:"",

            rentalDownPayment:"",

            balance:"",

            damagePayment:"",



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
            console.log(this.state.selectRowOrderObject);
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

    // get customer detail and set state

    getCustomerDetails =  async ()=>{
        if(this.state.selectRowOrderObject != null){
            let params = {
                id:this.state.selectRowOrderObject.customer.customerId

            }
            let response  =  await CustomerService.searchCustomer(params);


            let formData = this.state.formData;
            formData.customer = response.data.data;
            this.setState(formData);

        }

    }

    setOtherDataset = async ()=>{
        if(this.state.selectRowOrderObject != null){
           let formData =  this.state.formData;
           formData.returnDate =  this.state.selectRowOrderObject.returnDate;
           formData.rentalDate =  this.state.selectRowOrderObject.requiredDate;
           formData.totalPayment = this.state.selectRowOrderObject.totalPrice;
           formData.orderId = this.state.selectRowOrderObject.orderId;

            this.setState(formData);



        }



    }




    //getAdminDetail and set state
    getAdminDetail =  async ()=>{
        if (this.state.adminId != null) {
            let params ={
                id: this.state.adminId
            }

            let response  = await AdminService.searchAdmin(params);
            let formData  = this.state.formData;
            formData.admin = response.data.data;
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



    postRentalTable = async ()=>{

        let formData = this.state.formData;

         let response = await RentalServices.rentalPost(formData);


         console.log(response);



    }


    getAllRentals = async ()=>{

        let response = await  RentalServices.getAllRental();
        console.log(response);
        if(response.data.code === 200){
           let allRental =  this.state.allRental;
           allRental = response.data.data
           this.setState({allRental: allRental})
        }




    }

    getNextRentalId = async ()=>{
        let response  =  await RentalServices.nextRentalId();

        if(response.data.code  === 200){
            let formData = this.state.formData;
            formData.rentalId =  response.data.data;
            this.setState(formData)


        }





    }



    searchRental = async (rentalId)=>{

        let params= {
                id:rentalId
        }

        let response  = await RentalServices.searchRental(params);
       // console.log(response);
        if(response.data.code === 200){
            let searchRental = this.state.searchRental
            searchRental = response.data.data;
            this.setState({searchRental:searchRental});


        }

    }



    updateRentalFirst = async ()=>{

        let response  =  await RentalServices.updateRental(this.state.searchRental);

        if(response.data.code === 200){
            alert("update Driver and DownPayment in rental success");
        }else{
            alert("Not success");
        }

    }



    shouldPayment  = async ()=>{
        let searchRental =  await  this.state.searchRental;

        console.log(searchRental);

        let balance = this.state.balance;
        let fullPayment = parseFloat(searchRental.totalPayment)
        let downPayment  = parseFloat(searchRental.downPayment)
        console.log(fullPayment);

        balance = fullPayment - downPayment
        console.log(balance)
        this.setState({balance: balance});



    }





    componentDidMount() {
        this.getAllOrders().then(r => {

        })
        this.getAllRentals().then(r => {


        })

        this.getNextRentalId().then(r => {

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

            console.log(i)


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


        const columns2 = [
            { field: 'rentalID', headerName: 'rental Id', width: 80 ,},
            { field: 'orderId', headerName: 'order Id', width: 80 },
            { field: 'customerId', headerName: 'customerId', width: 80 },
            { field: 'carId', headerName: 'car Id', width: 80 },
            { field: 'AdminId', headerName: 'admin Id', width: 80 },
            { field: 'startingDate2', headerName: 'starting Date', width: 100 },
            { field: 'endingDate2', headerName: 'Ending Date', width: 100 },
            { field: 'driverId', headerName: 'DriverId', width: 100 },
            { field: 'status', headerName: 'status', width: 100 },
            { field: 'downPayment', headerName: 'down payment', width: 100 },
            { field: 'damagePayment', headerName: 'damagePayment', width: 100 },
            { field: 'fullPayment', headerName: 'Full payment', width: 100 },


        ];



        const rows2 = [];

        for(let i=0; i < this.state.allRental.length; i++){

            console.log(this.state.allRental[0].rentalId)
            rows2.push(

                { id: i,
                  //  rentalID: "R-100",
                   rentalID: this.state.allRental[i].rentalId,
                    orderId: this.state.allRental[i].orderId,
                    startingDate2: this.state.allRental[i].rentalDate,
                    endingDate2: this.state.allRental[i].returnDate,
                    fullPayment: this.state.allRental[i].totalPayment,
                    damagePayment: this.state.allRental[i].damagePayment,
                    downPayment: this.state.allRental[i].downPayment,
                    driverId: this.state.allRental[i].driverId,
                    status: this.state.allRental[i].status,
                    customerId: this.state.allRental[i].customer.customerId,
                    carId: this.state.allRental[i].car.carId,
                    AdminId: this.state.allRental[i].admin.adminId,


                },

            )



        }


















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

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >



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

                    <Typography variant="h6"
                        style={{margin:"1%"}}

                    >AdminId</Typography>
                    <Typography variant="h6"
                                style={{margin:"1%"}}

                    >
                        {this.state.adminId}
                    </Typography>



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
                                    message: 'Are you sure update  this order Id  '+ this.state.selectRowOrderId,
                                    buttons: [
                                        {
                                            label: 'Yes',
                                            onClick: () => {
                                                this.findSelectOrderObject().then(r => {
                                                    console.log(this.state.selectRowOrderObject);
                                                    this.updateOrder().then(r => {
                                                        this.getCarDetails().then(r => {
                                                            this.getCustomerDetails().then(r => {
                                                                this.getAdminDetail().then(r => {
                                                                    this.setOtherDataset().then(r => {
                                                                        this.postRentalTable().then(r => {
                                                                            this.getAllRentals().then(r => {

                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })

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
                                console.log(this.state.allRental[0].rentalId)



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
                                    message: 'Are you sure to do this orderId ',
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
                                label="Down Payment"
                                variant="outlined"
                                size={"small"}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MoneyIcon />
                                        </InputAdornment>
                                    ),
                                }}


                                onChange={(e)=>{
                                    let searchRental = this.state.searchRental;
                                    searchRental.downPayment = e.target.value;
                                    this.setState(searchRental);

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
                                    let searchRental = this.state.searchRental;
                                    searchRental.driverId = value.label;
                                    this.setState(searchRental);



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

                                onClick={()=>{
                                    this.updateRentalFirst().then(r => {

                                    });
                                }}


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
                                onRowClick={(e)=>{
                                    console.log("ahhh harii harii ")
                                    console.log(e);
                                    confirmAlert({
                                        title: 'Confirm to submit',
                                        message: 'Are you sure update this RentalId '+  e.row.rentalID,
                                        buttons: [
                                            {
                                                label: 'Yes',
                                                onClick: () =>{
                                                    // console.log("ahhh harii harii ")
                                                    // console.log(e);
                                                    // console.log(e.row.orderId)

                                                    this.searchRental(e.row.rentalID).then(r => {
                                                         this.shouldPayment().then(r => {

                                                        });

                                                    })









                                                }

                                            },
                                            {
                                                label: 'No',
                                                onClick: () => {}
                                            }
                                        ]
                                    });



                                    //this.setState({selectRowOrderId:e.row.orderId})


                                }}
                            />
                        </div>
                    </div >


                    <div className={classes.container_main5_div3}>
                        <div className={classes.container_main5_div3_div1}>

                            <TextField
                                id="outlined-basic"
                                label="damage "
                                variant="outlined"
                                size={"small"}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MoneyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e)=>{
                                    let damagePayment  =  this.state.damagePayment;
                                    this.setState({damagePayment: e.target.value})





                                }}




                            />
                            <TextField
                                id="outlined-basic"
                                label="Order Balance"
                                disabled
                                value={this.state.balance}
                                variant="outlined"
                                size={"small"}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RefreshIcon
                                            onClick={()=>{
                                                this.shouldPayment().then(r => {

                                                })
                                            }}


                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />


                        </div>

                        <div className={classes.container_main5_div3_div2}>
                            <Button variant="contained"
                                    color="secondary"
                                    startIcon={<CheckIcon/>}

                                    onClick={()=>{
                                        const searchRental = this.state.searchRental;
                                        let totalPayment = parseFloat(searchRental.totalPayment)
                                        let damagePayment = parseFloat(this.state.damagePayment)
                                        searchRental.totalPayment = totalPayment+ damagePayment;
                                        searchRental.damagePayment = this.state.damagePayment;
                                        searchRental.status= "success";
                                        this.setState(searchRental);
                                        this.updateRentalFirst().then(r => {
                                            this.getAllRentals().then(r => {

                                            })

                                        })
                                    }}
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

            </ValidatorForm>
        )
    }
}

export default withStyles(styleSheet)(AdminOrderView)

