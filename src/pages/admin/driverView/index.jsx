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
                    <Grid item lg={4} sm={6} md={4} xm={6}  className={classes.driverFrom}>
                        <form>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </form>

                    </Grid>

                    <Grid item lg={8} sm={6} md={4} xm={6} className={classes.description} >

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