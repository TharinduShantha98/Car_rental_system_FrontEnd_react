import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Autocomplete from "@mui/material/Autocomplete";
import {Link} from "react-router-dom";


import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {ValidatorForm} from "react-material-ui-form-validator";

class AdminLog extends Component{
    constructor(props) {
        super(props);

        this.state={

            position: [
                { label: 'Owner'},
                { label: 'Manager' },
                { label: 'ITAdmin' },

            ],


            formData:{
                adminId:'',
                firstName:'',
                lastName:'',
                position:'',
                email:'',
                contactNum:'',
                password:'',

            },

            conformPassword:'',


        }

    }


    handleSubmit = async ()=>{








    }










    render() {

        let {classes} = this.props;



        return (

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >


            <div className={classes.container}>




                <div className={classes.container_div1}>
                    <div  className={classes.container_div1_div1} >
                        <AccountCircleIcon color={"success"}  className={classes.container_div1_icon}/>
                        <Typography component="h1" variant="h5">
                           Admin  Log in
                        </Typography>

                    </div>
                    <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <div className={classes.container_div1_div2}>
                            <div className={classes.container_div1_div2_div1}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="firstName"
                                    label="first Name"
                                    id="firstName"
                                    variant="outlined"
                                    autoFocus
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.firstName = e.target.value;
                                        this.setState(formData);


                                    }}


                                />
                            </div>

                            <div className={classes.container_div1_div2_div2}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="lastName"
                                    label="last Name"
                                    id="lastName"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.lastName = e.target.value;
                                        this.setState(formData);


                                    }}

                                />


                            </div>

                        </div>


                        <div>
                            {/*<Typography variant="h5">fav movie </Typography>*/}
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.position}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Option" variant="outlined" size={"small"} />}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                onChange={(e, value) => {
                                    console.log(value.label);
                                }}
                                size="small"
                                //variant="outlined"
                                style={{ width: '100%' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="contactNum"
                                label="contact Num"
                                id="contactNum"
                                variant="outlined"
                                size={'small'}
                                onChange={(e)=>{
                                    let formData = this.state.formData
                                    formData.contactNum = e.target.value;
                                    this.setState(formData);


                                }}
                            />


                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                size={'small'}
                                onChange={(e)=>{
                                    let formData = this.state.formData
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
                                size={'small'}
                                onChange={(e)=>{
                                    let formData = this.state.formData
                                    formData.password = e.target.value;
                                    this.setState(formData);


                                }}
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
                                size={'small'}
                                onChange={(e)=>{
                                    let conformPassword = this.state.conformPassword;
                                    conformPassword = e.target.value;
                                    this.setState(conformPassword);


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
                                color={'primary'}
                            >
                                Sign In
                            </Button>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color={'secondary'}
                            >
                                <Link to={"/adminHome"}>
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


                        </div>



                    </Box>













                </div>

            </div>
            </ValidatorForm>
        );
    }


}

export default withStyles(styleSheet)(AdminLog)


