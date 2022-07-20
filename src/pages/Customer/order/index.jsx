import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import 'date-fns'
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import car1 from "../../../assets/img/cars/car1.jpg";


class Order extends Component{



    constructor(props) {
        super(props);

        this.state = {

            selectedDate: new Date("2022-07-20T12:00:00"),
            setSelectedDate: new Date("2022-07-20T12:00:00")

        }




    }


     handleDateChange= (date) =>{
        this.state.setSelectedDate(date);

    }

//     const[selectedDate, setSelectedDate] = React.useState(
//     new Date("2022-07-20T12:00:00")
// )
//
//     const handleDateChange= (date) =>{
//         setSelectedDate(date);
//
//     }


    render() {
        let {classes} = this.props;


        return(
            <Grid  container spacing={3} className={classes.container}>
                <Grid iitem xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_main}>
                    <div className={classes.container_main_carImage} >
                        {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent='space-around'>
                                <keyBoardDatePicker
                                    disableToolBar
                                    variant= 'inline'
                                    formate='MM/dd/yyy'
                                    margin='normal'
                                    id='date-picker'
                                    label='Date picker'
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    className={classes.container_main_datePiceker}
                                    keyBoardButtonProps = {{
                                        'aria-label':'change date'
                                    }}
                                />


                            </Grid>





                        </MuiPickersUtilsProvider>*/}

                        <Typography variant="h6" gutterBottom  >
                            car
                        </Typography>
                        <img src={car1} alt={"ca1.png"} className={classes.container_carContainer_main_img}/>


                    </div>

                    <div className={classes.container_main_description} >
                        <Typography variant="h6" gutterBottom  >
                            specifications
                        </Typography>
                       <div className={classes.container_main_description_div}>


                           <div className={classes.container_main_description_div_div1}>
                               <Typography variant="h6" gutterBottom  >
                                   Passengers
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   Transmission
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   air condition
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   Fuel type
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   Doors
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   Engine capacity
                               </Typography>

                           </div>

                           <div className={classes.container_main_description_div_div2}>
                               <Typography variant="h6" gutterBottom  >
                                   5
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   auto
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   yes
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   petrol
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   5
                               </Typography>

                               <Typography variant="h6" gutterBottom  >
                                   1500 cc
                               </Typography>


                           </div>

                       </div>
                    </div>

                    <div  className={classes.container_main_form}>
                        <Typography variant="h4" gutterBottom  className={classes.container_main_form_header} >
                            place order
                        </Typography>

                        <div   className={classes.container_main_form_div}>
                            <div  className={classes.container_main_form_div_div1}>


                                <TextField id="outlined-basic" label="fist Name" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Email address" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="address" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Starting date" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>



                            </div>

                            <div  className={classes.container_main_form_div_div2}>

                                <TextField id="outlined-basic" label="Contact num" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="down payment clip" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>


                                <TextField id="outlined-basic" label="Type of service" variant="outlined" size='small'
                                           className={classes.container_main_form_div_textTittle}/>

                                <TextField id="outlined-basic" label="Ending date" variant="outlined" size='small'
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