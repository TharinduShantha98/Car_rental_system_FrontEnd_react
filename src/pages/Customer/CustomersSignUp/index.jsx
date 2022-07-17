import React, {Component} from "react";
import {render} from "react-dom";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

class CustomerSignUp  extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        let {classes} = this.props;

        return(
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} lg={7} sm={7} md={7} xm={6} className={classes.logo_container}>

                </Grid>


                <Grid item xs={12} lg={5} sm={5} md={5} xm={6} className={classes.form_container}>


                </Grid>



            </Grid>


        )


    }

}


export default withStyles (styleSheet)(CustomerSignUp)