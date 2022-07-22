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

class CustomerSignUp  extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        let {classes} = this.props;

        return(
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









              {/*  <Grid item xs={12} lg={6} sm={6} md={6} xm={6} className={classes.logo_container}>
                    <div className={classes.logo_container_div}>
                        <Typography variant="h3" className={classes. logo_container_div_h3}>Hertz Brookfield car rental PVT</Typography>
                        <Typography variant="h6" className={classes. logo_container_div_h3}>INPUT YOUR DETAIL FOR SIGN UP</Typography>
                        <GDSEButton
                            label='Login'
                            onClick={()=>{

                                console.log('login button click..!')

                            }}
                            className={classes. logo_container_div_button}


                        >
                        </GDSEButton>

                    </div>


                </Grid>
                <Grid item xs={12} lg={6} sm={6} md={6} xm={6} className={classes.form_container}>

                    <Grid   item xs={7} lg={7} sm={7} md={7} xm={7}  className={classes.form_container_grid}>

                        <Grid   item xs={12} lg={12} sm={12} md={12} xm={12}   className={classes.form_container_grid_grid} >

                            <form className={classes.form_container_grid_grid_form} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" label="Your name" variant="outlined"  size="small"
                                           inputProps={{ style: { fontFamily: 'nunito', color: 'white'}}}
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="address" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="telPhone number" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="drivenLicense number" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="Email address" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="password" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>


                                <GDSEButton
                                    label='SIGN UP'
                                    onClick={()=>{

                                        console.log('login button click..!')

                                    }}
                                    className={classes.form_container_grid_grid_button}


                                >
                                </GDSEButton>
                            </form>

                        </Grid>






                    </Grid>




                </Grid>*/}






            </Grid>


        )


    }

}


export default withStyles (styleSheet)(CustomerSignUp)