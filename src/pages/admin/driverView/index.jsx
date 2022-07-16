import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import TextField from "@material-ui/core/TextField";


class Driver extends Component{


    constructor(props) {
        super(props);
    }




    render() {
        let {classes} = this.props;
        return(

            <div className={classes.container}>
                <Grid container spacing={0} className={classes.driver_container}>
                    <Grid item lg={4} sm={6} md={4} xm={6}  className={classes.driverFrom_container}>
                        <form className={classes.driverFrom}>
                            <TextField id="outlined-basic" label="Driver Id " placeholder='id' variant="outlined"
                                       size="small" className={classes.textFlied} />
                            <TextField id="outlined-basic" label="first name " placeholder='firstName' variant="outlined"
                                       size="small" className={classes.textFlied} />
                            <TextField id="outlined-basic" label="last name" placeholder='lastName' variant="outlined"
                                       size="small" className={classes.textFlied} />
                            <TextField id="outlined-basic" label="age" placeholder='age' variant="outlined"
                                       size="small" className={classes.textFlied} />
                            <TextField id="outlined-basic" label="contact num" placeholder='contact num' variant="outlined"
                                       size="small" className={classes.textFlied} />
                            <TextField id="outlined-basic" label="license num" placeholder='license num' variant="outlined"
                                       size="small" className={classes.textFlied} />
                        </form>
                    </Grid>

                    <Grid item lg={8} sm={6} md={8} xm={6} className={classes.description} >

                        <Grid item lg={12} sm={12} md={12} xm={12}  className={classes.description_logo} >
                        </Grid>
                        <Grid item lg={12} sm={12} md={12} xm={12}  className={classes.table}  >
                        </Grid>

                    </Grid>


                </Grid>


            </div>


        )
    }

}

export  default withStyles (styleSheet)(Driver)