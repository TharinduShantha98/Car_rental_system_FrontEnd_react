import React, {Component} from "react";
import {render} from "react-dom";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import GDSEButton from "../../../components/common/Button";

class CustomerSignUp  extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        let {classes} = this.props;

        return(
            <Grid container spacing={3} className={classes.container}>

                <Grid item xs={12} lg={6} sm={6} md={6} xm={6} className={classes.logo_container}>
                    <div>


                    </div>


                </Grid>
                <Grid item xs={12} lg={6} sm={6} md={6} xm={6} className={classes.form_container}>

                    <Grid   item xs={7} lg={7} sm={7} md={7} xm={7}  className={classes.form_container_grid}>

                        <Grid   item xs={12} lg={12} sm={12} md={12} xm={12}   className={classes.form_container_grid_grid} >

                            <form className={classes.form_container_grid_grid_form} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" label="Your name" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="address" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="telPhone number" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="drivenLicense number" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="Email address" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>
                                <TextField id="outlined-basic" label="password" variant="outlined"  size="small"
                                           className={classes.form_container_grid_grid_textFiled}/>


                                <GDSEButton
                                    label='SIGN UP'
                                    onClick={()=>{

                                        console.log('login button click..!')

                                    }}
                                    className={classes.form_container_grid_grid_button}


                                >
                                </GDSEButton>
                            </form>

                        </Grid>






                    </Grid>




                </Grid>






            </Grid>


        )


    }

}


export default withStyles (styleSheet)(CustomerSignUp)