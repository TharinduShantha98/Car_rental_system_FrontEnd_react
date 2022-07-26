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

class CustomerSignUp  extends Component{

    constructor(props) {
        super(props);
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

                                        size={'small'}
                                    />
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
                                        size={'small'}
                                    />
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
                                        size={'small'}
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
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon/>
                                                </InputAdornment>
                                            ),
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
                                        >
                                            LOGIN ACCOUNT
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