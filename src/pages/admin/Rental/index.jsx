import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";

class Rental extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        let {classes} = this.props;



        return(

            <div className={classes.container}>




            </div>



        )
    }

}

export default withStyles(styleSheet)(Rental)