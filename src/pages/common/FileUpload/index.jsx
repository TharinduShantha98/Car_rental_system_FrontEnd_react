import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Typography from "@material-ui/core/Typography";

class FileUpload extends Component{

    constructor(props) {
        super(props);
    }


    render() {

        let {classes} = this.props;
       return(
           <div className={classes.container}>

               <div className={classes.container_div}>

                   <div className={classes.container_div_div1}>

                       <div className={classes.container_div_div1_div1}>
                           <DriveEtaIcon color={"success"}  className={classes.container_div1_icon}/>
                           <Typography component="h1" variant="h5">
                                Car Add
                           </Typography>
                       </div>

                       <div className={classes.container_div_div1_div2}>
                            <div className={classes.container_div_div1_div2_div1}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="carType"
                                    label="Car Type"
                                    name="CarType"
                                   // autoComplete="carType"
                                    variant="outlined"

                                    size={'small'}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="numberOfPassenger"
                                    label="Number of passenger"
                                    name="numberOfPassenger"
                                  //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="registration num"
                                    label="registration num"
                                    name="registration num"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Free mileage"
                                    label="Free mileage"
                                    name="Free mileage"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Daily rate"
                                    label="Daily rate"
                                    name="Daily rate"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />

                            </div>
                            <div  className={classes.container_div_div1_div2_div2}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="transmission type"
                                    name="transmission type"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="color"
                                    label="color"
                                    name="color"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Fuel type"
                                    label="Fuel type"
                                    name="Fuel type"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Price for exr Km"
                                    label="Price for exr Kme"
                                    name="Price for exr Km"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Monthly rate"
                                    label="Monthly rate"
                                    name="Monthly rate"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                />


                            </div>


                       </div>

                       <div className={classes.container_div_div1_div3}>

                           <div className={classes.container_div_div1_div2_div2}>
                               <label >Font view</label>
                              <TextField id="standard-basic" label="" type={'file'} fullWidth  variant="outlined" />
                               <label>Side view </label>
                              <TextField id="standard-basic" label="" type={'file'} fullWidth  variant="outlined" />
                           </div>

                           <div className={classes.container_div_div1_div2_div1}>
                               <label>back view  </label>
                               <TextField id="standard-basic" label="" type={'file'} fullWidth  variant="outlined" />
                               <label>Interior</label>
                               <TextField id="standard-basic" label="" type={'file'} fullWidth  variant="outlined"/>
                           </div>


                       </div>


                   </div>



               </div>



           </div>



       )
    }

}

export  default withStyles(styleSheet)(FileUpload)