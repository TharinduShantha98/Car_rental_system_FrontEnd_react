import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import DeleteIcon from '@mui/icons-material/Delete';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';





class  CustomerView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return(

            <div className={classes.container}>
                   <DeleteIcon/>
                   <DeleteIcon color="success"/>
                   <LocalTaxiIcon color={'success'} fontSize='large'/>


            </div>

        )
    }
}


export  default withStyles (styleSheet)(CustomerView)


