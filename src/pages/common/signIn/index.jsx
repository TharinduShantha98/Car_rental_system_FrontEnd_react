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


class SignIn extends Component{
    handleSubmit;


    constructor(props) {
        super(props);
    }




    render() {
        let {classes} = this.props;


        return(
            <div className={classes.container}>

                <div className={classes.container_div1}>
                    <AccountCircleIcon color={"success"}  className={classes.container_div1_icon}/>
                    <Typography component="h1" variant="h5">
                       Log in
                    </Typography>
                    <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
                            autoFocus
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
                        >
                            <Link to={"/carView"}>
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


        )
    }

}

export default withStyles(styleSheet)(SignIn)