import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import 'date-fns'
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PaymentIcon from "@material-ui/icons/Payment";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import profile from "../../../assets/img/profile/profile1.jpg";
import Autocomplete from "@mui/material/Autocomplete";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import MessageIcon from '@material-ui/icons/Message';
import AdjustIcon from '@material-ui/icons/Adjust';
import history from "../../../history";
import CarServices from "../../../services/CarServices";
import CustomerService from "../../../services/CustomerService";
import AdminService from "../../../services/AdminService";
import {ValidatorForm} from "react-material-ui-form-validator";
import orderService from "../../../services/OrderService";
import OrderService from "../../../services/OrderService";
import {confirmAlert} from "react-confirm-alert";



class Order extends Component{



    constructor(props) {
        super(props);

        this.state = {

            selectedDate: new Date("2022-07-20T12:00:00"),
            setSelectedDate: new Date("2022-07-20T12:00:00"),

            position: [
                { label: 'AirPort'},
                { label: 'Trip' },
                { label: 'Wedding' },
                { label: 'self driving' },
                { label: 'add driver' },

            ],

            carId: "",
            customerId:"",


            formData:{

                orderId:"",
                requiredDate:"",
                returnDate:"",
                review:"Airport",
                totalPrice:"",
                status:"pending",
                downPaymentClip:"clip",
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
                admin:{
                    adminId:"",
                    firstName:"",
                    lastName:"",
                    position:"",
                    email:"",
                    contactNum:"",
                    password:""
                },
                orderDetails:[{
                    orderId:"",
                    carId:"",
                    requiredDate:"",
                    returnDate:"",
                    price:""
                }],

            },


            type:"",
            transmissionType:"",
            monthlyRate:"",
            dailyRate:"",
            color:"",
            passengers:"3",
            luggage:"3",
            airCondition:"available",

            todayDate:"",


            formData2:{
                orderId:"",
                downPaymentClip:"",
            }


        }




    }



    componentDidMount() {
        let item = localStorage.getItem("carId");
        let item2 = localStorage.getItem("customerId");
       //console.log(item);
       //console.log(item2);
        let carId;
        carId = item;
        this.setState({carId:carId});

        let customerId = item2;
        this.setState({customerId:customerId});



        this.getCustomerObject(customerId).then(r => {

        })
        this.getAvailableAdmin().then(r=>{

        })

        this.getCarObject(carId).then(r => {

        })

        this.todayDate();


        this.getOrderLastId().then(r => {

        })


    }

    getCustomerObject  = async (customerId)=>{
        let params =  {
            id:customerId
        }

        let response  = await CustomerService.searchCustomer(params);
        console.log(response.data.data);

        let formData  = this.state.formData
        formData.customer.customerId =  response.data.data.customerId;
        formData.customer.address = response.data.data.address;
        formData.customer.contactNum = response.data.data.contactNum;
        formData.customer.drivingLicNum = response.data.data.drivingLicNum;
        formData.customer.email = response.data.data.email;
        formData.customer.firstName = response.data.data.firstName;
        formData.customer.licenseImg1 = response.data.data.licenseImg1;
        formData.customer.NICImg = response.data.data.nicimg;
        formData.customer.nicnumber = response.data.data.NICImg;
        formData.customer.password = response.data.data.password;

        this.setState(formData)

    }

    imageUpload = async ()=>{
        let formData = new FormData();
        formData.append("orderId", this.state.formData.orderId );
        formData.append("bankClip",this.state.formData2.downPaymentClip);

        let response  = await OrderService.uploadBankClip(formData);




    }






    getAvailableAdmin =  async ()=>{

        let params = {
            id:"A-100"

        }

        let response = await  AdminService.searchAdmin(params)
        console.log(response.data.data);

        let formData  = this.state.formData;
        formData.admin.adminId = response.data.data.adminId;
        formData.admin.contactNum = response.data.data.contactNum;
        formData.admin.email = response.data.data.email;
        formData.admin.firstName = response.data.data.firstName;
        formData.admin.lastName = response.data.data.lastName;
        formData.admin.password = response.data.data.password;
        formData.admin.position = response.data.data.position;

        this.setState(formData);

    };



    getCarObject = async (carId)=>{
        let params ={
            id: carId
        }


        let response = await CarServices.searchCar(params);
        console.log(response.data.data);

        let formData = this.state.formData;
        formData.orderDetails[0].carId = response.data.data.carId;
        formData.orderDetails[0].price = response.data.data.dailyRate;




        this.setState(formData);

        this.setState({type:response.data.data.type})
        this.setState({transmissionType:response.data.data.transmissionType})
        this.setState({monthlyRate:response.data.data.monthlyRate})
        this.setState({dailyRate:response.data.data.dailyRate})
        this.setState({color:response.data.data.color})






    }

    getOrderLastId = async ()=>{

       let response  =  await  OrderService.getLastOrderId();
      // console.log(response.data.data)
       let formData = this.state.formData;
       formData.orderId =  response.data.data;
       formData.orderDetails[0].orderId = response.data.data;
       this.setState(formData);





    }





    todayDate=  ()=>{
        let today = new Date();

        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log(date);
        this.setState({todayDate:date});





    }





    printCarId = ()=>{
        console.log(this.state.carId);
        console.log(this.state.formData.customer.address);
        console.log(this.state.formData.admin.email);
        console.log(this.state.formData.orderId);
        console.log(this.state.formData.orderDetails.orderId);
        console.log(this.state.formData.orderDetails[0].returnDate)


        this.todayDate();



    }


    handleDateChange= (date) =>{
        this.state.setSelectedDate(date);

    }


    handleSubmit = async ()=>{

        this.calculateTotalPrice();


        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure put order  ',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () =>{
                        let formData = this.state.formData;
                        let response = await orderService.saveOrder(formData);
                        console.log(response);
                        if(response.data.code === 200){
                            await this.imageUpload();
                            alert("success place order");


                        }

                    }

                },
                {
                    label: 'No',
                    onClick: () => { alert("reject place order");}
                }
            ]
        });








    }


    calculateTotalPrice = ()=>{

        //calculate total price;

        let startingDate  =  new Date(this.state.formData.requiredDate);
        let returnDate =  new Date(this.state.formData.returnDate);
        let difference_in_time =  returnDate.getTime() - startingDate.getTime();
        let difference_in_date =  difference_in_time /(1000* 3600*24);
        console.log(difference_in_date);


        let dailyRate =  parseFloat(this.state.dailyRate);
        let totalPayment =  difference_in_date * dailyRate;

        console.log(totalPayment);

        let formData = this.state.formData;
        formData.totalPrice =totalPayment;
        this.setState(formData);

       //formData.totalPrice = totalPayment;






    }




    render() {
        let {classes} = this.props;


        return(
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >



            <div className={classes.container}>

                <div className={classes.container_main1}>

                    <div className={classes.container_main1_div1}>

                        <div >
                            <Typography variant="h6" gutterBottom   >
                                Specification
                            </Typography>
                        </div>


                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.type}
                            fullWidth
                            id="carType"
                            label="cartType"
                            name="carType"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />


                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.passengers}
                            fullWidth
                            id="passenger"
                            label="passenger"
                            name="passenger"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />

                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.transmissionType}
                            fullWidth
                            id="transmissionType"
                            label="transmissionType"
                            name="transmissionType"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />


                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.luggage}
                            fullWidth
                            id="luggage"
                            label="luggage"
                            name="luggage"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />


                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.airCondition}
                            fullWidth
                            id="airCondition"
                            label="airCondition"
                            name="airCondition"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />

                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.dailyRate}
                            fullWidth
                            id="dailyRate"
                            label="dailyRate"
                            name="dailyRate"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />

                        <TextField
                            margin="normal"
                            disabled={true}
                            required
                            value={this.state.monthlyRate}
                            fullWidth
                            id="MonthlyRate"
                            label="MonthlyRate"
                            name="MonthlyRate"
                            //  autoComplete="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                        />



                    </div>


                    <div className={classes.container_main1_div2}>
                        <div >
                            <Typography variant="h6" gutterBottom   >
                                Booking Car
                            </Typography>

                        </div>
                        <div>
                            <TextField
                                margin="normal"
                                required
                                value={this.state.formData.customer.firstName}
                                fullWidth
                                id="Your name"
                                label="Your name"
                                name="Your name"
                                //  autoComplete="email"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                size={'small'}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={this.state.formData.customer.contactNum}
                                id="contact number"
                                label="contact number"
                                name="contact number"
                                //  autoComplete="email"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIphoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                size={'small'}
                            />



                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Email"
                                label="Email"
                                name="Email"
                                value={this.state.formData.customer.email}
                                //  autoComplete="email"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                size={'small'}
                            />


                            <TextField
                                id="date"
                                label="Starting Date"
                                type="date"
                                fullWidth
                                required
                                defaultValue={this.state.todayDate}
                                className={classes.textField}
                                variant="outlined"
                                size={'small'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e)=>{
                                    console.log(e.target.value);
                                    console.log(typeof e.target.value);
                                    let formData  = this.state.formData;
                                    formData.requiredDate = e.target.value;
                                    formData.orderDetails[0].requiredDate = e.target.value;
                                    this.setState(formData);


                                }}



                            />


                            <TextField
                                id="date"
                                label="Ending Date"
                                type="date"
                                fullWidth
                                required
                                defaultValue=""
                                className={classes.textField}
                                variant="outlined"
                                size={'small'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e)=>{
                                    console.log(e.target.value);
                                    console.log(typeof e.target.value);
                                    let formData  = this.state.formData;
                                    formData.returnDate = e.target.value;
                                    formData.orderDetails[0].returnDate = e.target.value;
                                    this.setState(formData);


                                }}



                            />

                            <Typography variant="body2" gutterBottom   >
                                downPayment clip
                            </Typography>

                            <TextField
                                id="downPayment"
                                label=""
                                type={'file'}
                                fullWidth
                                variant="outlined"
                                accept={"image/png,image/jpeg"}
                                size={"small"}
                                style={{marginTop:"1px",marginBottom:'8px'}}
                                onChange={(e)=>{
                                    let formData = this.state.formData2
                                    formData.downPaymentClip = e.target.files[0]
                                    this.setState(formData);

                                }}


                            />

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"

                                options={this.state.position}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params}
                                                                    label="Option"
                                                                    variant="outlined"
                                                                    size={"small"}

                                />}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                onChange={(e, value) => {
                                    console.log(value.label);
                                    let formData  = this.state.formData;
                                    formData.review = value.label;
                                    this.setState(formData);



                                }}
                                size="small"
                                //variant="outlined"


                                style={{ width: '100%' }}
                            />


                           {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="conform password"
                                label="Conform Password"
                                type="password"
                                id="conform password"
                                variant="outlined"
                                autoComplete="current-password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon/>
                                        </InputAdornment>
                                    ),
                                }}
                                size={'small'}
                            />*/}
                        </div>

                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color={'primary'}
                                startIcon={<AirportShuttleIcon/>}
                                style={{marginTop:"10px"}}


                            >
                                place Order
                            </Button>

                            <Button
                                //type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color={'secondary'}
                                startIcon={<MessageIcon/>}
                                onClick={()=>{
                                    this.printCarId();
                                    this.calculateTotalPrice();
                                }}

                                style={{marginTop:"10px"}}


                            >
                                SEND MESSAGE
                            </Button>


                        </div>



                    </div>







                </div>


                <div className={classes.container_main2}>
                    <div className={classes.container_main2_div1}>

                    </div>


                </div>


            </div>


            </ValidatorForm>



        )
    }


}


export default withStyles(styleSheet)(Order)