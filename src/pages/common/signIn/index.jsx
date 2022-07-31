import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import history from "../../../history";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CustomerService from "../../../services/CustomerService";


class SignIn extends Component{



    constructor(props) {
        super(props);

        this.state = {

            formData:{
                email:"",
                password:"",

            },
            correctLocation:"#"




        }




    }







    getLoginObject = async (email, password)=>{

        let params ={
            email: email,
            password:password

        }



        let response = await  CustomerService.customerLoginObject(params);
        console.log(response);
        let correctLocation =  this.state.correctLocation

        if(response.data.data != null){
            correctLocation = "/carView";
            this.setState({correctLocation:correctLocation})
            console.log(this.state.correctLocation);

        }













    }





    componentDidMount() {

        let item = localStorage.getItem("helloWorld");
        let item1 = localStorage.getItem("helloWorld1");
        let item2 = localStorage.getItem("helloWorld2");

        console.log(item);
        console.log(item1);
        console.log(item2);


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

                <div className={classes.container_div1}>
                    <AccountCircleIcon color={"success"}  className={classes.container_div1_icon}/>
                    <Typography component="h1" variant="h5">
                       Log in
                    </Typography>
                    <Box>
                        <TextValidator
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
                            autoFocus
                            onChange={(e)=>{
                                let formData = this.state.formData;
                                formData.email = e.target.value;
                                this.setState(formData);

                            }}


                        />
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
                            onChange={(e)=>{
                                let formData = this.state.formData;
                                formData.password = e.target.value;
                                this.setState(formData);

                            }}



                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=>{
                                this.getLoginObject(this.state.formData.email,
                                    this.state.formData.password)
                                    .then(r => {


                                    })


                            }}


                        >
                            <Link to={this.state.correctLocation}>
                                Log In
                            </Link>


                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to={"#"} variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={"#"} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>


                </div>

            </div>

            </ValidatorForm>

        )
    }

}

export default withStyles(styleSheet)(SignIn)