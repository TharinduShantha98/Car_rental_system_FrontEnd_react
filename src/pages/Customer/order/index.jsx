import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



class Order extends Component{
    datePickerValue;


    constructor(props) {
        super(props);


        this.state = {

            date :'',
        }

    }







    render() {
        let {classes} = this.props;


        return(
            <Grid  container spacing={3} className={classes.container}>
                <Grid iitem xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_main}>
                    <div className={classes.container_main_carImage} >

                    </div>

                    <div className={classes.container_main_description} >

                    </div>

                    <div  className={classes.container_main_form}>
                        <Typography variant="h4" gutterBottom  className={classes.container_main_form_header} >
                            Order
                        </Typography>

                        <div   className={classes.container_main_form_div}>
                            <div  className={classes.container_main_form_div_div1}>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Basic example"
                                        value={this.state.date}
                                        onChange={(newValue) => {
                                           let date  =  this.state.date;
                                           date = newValue.target.value;
                                           this.setState(date);

                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>

                                <TextField id="outlined-basic" label="" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                            </div>

                            <div  className={classes.container_main_form_div_div2}>

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>


                            </div>
                        </div>
                    </div>

                </Grid>

            </Grid>

        )
    }


}


export default withStyles(styleSheet)(Order)