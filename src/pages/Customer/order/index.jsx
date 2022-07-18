import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";


class Order extends Component{
    constructor(props) {
        super(props);
    }





    render() {
        let {classes} = this.props;



        return(
            <Grid  container spacing={3} className={classes.container}>
                <Grid iitem xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_main}>
                    <div className={classes.container_main_carImage} >
                        <p>hello</p>
                    </div>

                    <div className={classes.container_main_description} >
                        <p>hello</p>
                    </div>

                    <div  className={classes.container_main_form}>
                        <p>hello</p>
                    </div>

                </Grid>

            </Grid>





        )
    }


}


export default withStyles(styleSheet)(Order)