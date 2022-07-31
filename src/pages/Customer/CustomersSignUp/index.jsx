import React, {Component} from "react";
import {render} from "react-dom";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import GDSEButton from "../../../components/common/Button";
import profile from "../../../assets/img/profile/profile1.jpg";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PaymentIcon from "@material-ui/icons/Payment";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import {ValidatorForm} from "react-material-ui-form-validator";
import {Link} from "react-router-dom";
import profile1 from "../../../assets/img/profile/profile1.jpg";
import person from "../../../assets/img/customer/p.png";
import CustomerService from "../../../services/CustomerService";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import history from "../../../history";



class CustomerSignUp  extends Component{

    constructor(props) {
        super(props);


        this.state = {
            formData:{
                customerId:"",
                firstName:"",
                address:"",
                email:"",
                NICNumber:"",
                drivingLicNum:"",
                contactNum:"",
                password:"",
                licenseImg1:"image111",
                NICImg:"image222",
                image2:null,
                image3:null,

            },
            conformPassWord:"",

            cat:"tomCat",
            cat1:"tomCat1",
            cat2:"tomCat2"





        }


    }


    navigateToLoginWithData= ()=>{
        localStorage.setItem("helloWorld",this.state.cat);
        localStorage.setItem("helloWorld1",this.state.cat1);
        localStorage.setItem("helloWorld2",this.state.cat2);
        history.push({
            pathname:"/signIn",

        })



    }



    handleSubmit = async ()=>{


        let form_data  = new FormData();
        form_data.append('customerId', this.state.formData.customerId);
        form_data.append('firstName', this.state.formData.firstName);
        form_data.append('address', this.state.formData.address);
        form_data.append('email', this.state.formData.email);
        form_data.append('NICNumber', this.state.formData.NICNumber);
        form_data.append('drivingLicNum', this.state.formData.drivingLicNum);
        form_data.append('contactNum', this.state.formData.contactNum);
        form_data.append('password', this.state.formData.password);
        form_data.append('licenseImg1', this.state.formData.licenseImg1);
        form_data.append('NICImg', this.state.formData.NICImg);
        form_data.append('image2', this.state.formData.image2);
        form_data.append('image3', this.state.formData.image3);


       let password  =  this.state.formData.password;
       let conformPassWord = this.state.conformPassWord;

       if(password === conformPassWord){
           let response  = await CustomerService.saveCustomer(form_data);
           console.log(response);

       }else{

       }


    }


    getLastId = async ()=>{
        let response = await  CustomerService.getLastId();
        console.log(response.data.data);
        let formData  = this.state.formData
        formData.customerId =  response.data.data
        this.setState(formData);







    }

    componentDidMount() {
        this.getLastId().then(r => {

        });

    }


    render() {
        let {classes} = this.props;

        return(
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >

                <Grid  className={classes.container}>


                    <div className={classes.container_div1}>

                        <div className={classes.container_main1}>
                                <div className={classes.container_main1_div1}>

                                    <img src={profile}
                                         className={classes.container_main1_div1_img}/>

                                    <Button variant="outlined"
                                            color="primary"
                                            size={"small"}
                                    >
                                        Add Image
                                    </Button>


                                </div>



                                <div className={classes.container_main1_div2}>
                                    <TextField
                                        margin="normal"
                                        required
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
                                        onChange={(e)=>{
                                            let formData  =  this.state.formData
                                            formData.firstName =  e.target.value;
                                            this.setState(formData);

                                        }}




                                        size={'small'}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="address"
                                        label="address"
                                        name="address"
                                        //  autoComplete="email"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={(e)=>{
                                            let formData  =  this.state.formData
                                            formData.address =  e.target.value;
                                            this.setState(formData);

                                        }}

                                        size={'small'}
                                    />

                                    <div className={classes.file}>

                                        <div className={classes.file_div1}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
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
                                                onChange={(e)=>{
                                                    let formData  =  this.state.formData
                                                    formData.contactNum =  e.target.value;
                                                    this.setState(formData);

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
                                                //  autoComplete="email"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onChange={(e)=>{
                                                    let formData  =  this.state.formData
                                                    formData.email =  e.target.value;
                                                    this.setState(formData);

                                                }}
                                                size={'small'}
                                            />


                                            <label >profile Img</label>
                                            <TextField
                                                id="NicImg"
                                                label=""
                                                type={'file'}
                                                fullWidth
                                                variant="outlined"
                                                accept={"image/png,image/jpeg"}
                                                onChange={(e)=>{
                                                    let formData = this.state.formData
                                                    formData.image2 = e.target.files[0]
                                                    this.setState(formData);

                                                }}
                                            />


                                        </div>



                                        <div className={classes.file_div2}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="license number"
                                                label="license number"
                                                name="license number"
                                                //  autoComplete="email"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PaymentIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onChange={(e)=>{
                                                    let formData  =  this.state.formData
                                                    formData.drivingLicNum =  e.target.value;
                                                    this.setState(formData);

                                                }}
                                                size={'small'}
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="NIC number"
                                                label="NIC number"
                                                name="NIC number"
                                                //  autoComplete="email"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <RecentActorsIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onChange={(e)=>{
                                                    let formData  =  this.state.formData
                                                    formData.NICNumber =  e.target.value;
                                                    this.setState(formData);

                                                }}
                                                size={'small'}
                                            />



                                            <label >License Img</label>
                                            <TextField
                                                id="license Img"
                                                label=""
                                                type={'file'}
                                                fullWidth
                                                variant="outlined"
                                                accept={"image/png,image/jpeg"}
                                                onChange={(e)=>{
                                                    let formData = this.state.formData
                                                    formData.image3 = e.target.files[0]
                                                    this.setState(formData);

                                                }}
                                            />



                                        </div>

                                    </div>


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        variant="outlined"
                                        autoComplete="current-password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon/>
                                                </InputAdornment>
                                            ),
                                        }}

                                        onChange={(e)=>{
                                            let formData  =  this.state.formData
                                            formData.password =  e.target.value;
                                            this.setState(formData);

                                        }}
                                        size={'small'}
                                    />
                                    <TextField
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
                                        onChange={(e)=>{
                                            let conformPassWord  =  this.state.conformPasWsord
                                            conformPassWord =  e.target.value;
                                            this.setState({conformPassWord:conformPassWord});

                                        }}

                                        size={'small'}
                                    />

                                    <div className={classes.button}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            color={'primary'}
                                        >
                                            SIGN IN ACCOUNT
                                        </Button>

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            color={'secondary'}
                                            onClick={()=>{

                                                this.navigateToLoginWithData();


                                            }}

                                        >

                                            <Link to={"/signIn"}>
                                                LOGIN ACCOUNT
                                            </Link>

                                        </Button>


                                    </div>



                                    <div>





                                    </div>

                                </div>
                            </div>

                    </div>


                     <div className={classes.container_div2}>
                        {/*<div className={classes.container_div2_div}>*/}
                        {/*    <Typography variant="h5">WELCOME</Typography>*/}
                        {/*    <Button*/}
                        {/*        type="submit"*/}
                        {/*        fullWidth*/}
                        {/*        variant="contained"*/}
                        {/*        sx={{ mt: 3, mb: 2 }}*/}
                        {/*        color={'secondary'}*/}
                        {/*    >*/}
                        {/*        Log In Account*/}
                        {/*    </Button>*/}
                        {/*</div>*/}

                     </div>
















                </Grid>

            </ValidatorForm>
        )


    }

}


export default withStyles (styleSheet)(CustomerSignUp)