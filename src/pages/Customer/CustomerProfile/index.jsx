import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import profile from "../../../assets/img/profile/profile1.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from "@material-ui/core/InputAdornment";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PaymentIcon from '@material-ui/icons/Payment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import SearchIcon from "@material-ui/icons/Search";

class CustomerProfile extends Component{
        constructor(props) {
            super(props);
        }


        render() {
            let {classes} = this.props;
            return(
                <div className={classes.container} >
                    <div className={classes.container_main1}>
                        <div className={classes.container_main1_div1}>

                            <img src={profile}
                                     className={classes.container_main1_div1_img}/>

                            <Button variant="outlined"
                                    color="primary"
                                    size={"small"}
                            >
                                Update
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


                            <div>


                            </div>




                        </div>
                        <div className={classes.container_main1_div2_div1}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color={'primary'}
                            >
                                Update Account
                            </Button>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color={'secondary'}
                            >
                               Delete Account
                            </Button>


                        </div>


                    </div>

                    <div className={classes.container_main2}>

                    </div>




                </div>


            )
        }





}
export default withStyles(styleSheet)(CustomerProfile)