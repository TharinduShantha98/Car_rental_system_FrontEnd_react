import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";


class  CustomerView extends Component{
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


export  default withStyles (styleSheet)(CustomerView)


