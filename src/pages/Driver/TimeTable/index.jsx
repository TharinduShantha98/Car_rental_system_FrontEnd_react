import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";

// import Paper from '@mui/material/Paper';
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//     Scheduler,
//     DayView,
//     Appointments,
// } from '@devexpress/dx-react-scheduler-material-ui';


// import { ViewState } from '@devexpress/dx-react-scheduler';
// import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
// import { DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';
// import { TodayButton } from '@devexpress/dx-react-scheduler-material-ui';

import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../TimeTable/demo-data/month-appointments';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import maina from '../../../assets/img/customer/maina.jpg'
import gota from  '../../../assets/img/customer/gota.jpg'
import rani from  '../../../assets/img/customer/rani.jpg'
import customer1 from  '../../../assets/img/customer/p.png'




class DriverTime extends Component{
    constructor(props) {
        super(props);



        this.state = {
            data: appointments,
        };


    }







    render() {
        let {classes} = this.props;
        const { data } = this.state;


        return(

            <div className={classes.constraint}>

                <div className={classes.constraint_div1}>

                    <div className={classes.constraint_div1_div1}>
                        <Typography variant="h4" gutterBottom
                        style={{color: "#4697d5"}}

                        >
                            Driver Details
                        </Typography>
                        
                        <LibraryBooksIcon
                            style={{color: "#4697d5"}}

                        />

                    </div>




                    <div  className={classes.constraint_div1_div2}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <Typography variant="h6" gutterBottom>
                                Customer & root details
                            </Typography>


                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src= {'../../../assets/img/customer/maina.jpg'}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AirPort "
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Mr Gotabaya
                                            </Typography>
                                            {" —  from: kalaton madamulana waluwa "}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <Divider variant="inset" component="li" />


                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AirPort"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Mr mahinada
                                            </Typography>
                                            {" — from: kalaton madamulana waluwa"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AirPort"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Mr Ranil
                                            </Typography>
                                            {' — from:-----------------------------------'}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {" — Wish I could come, but I'm out of town this…"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>



                    </div>











                </div>
                <div className={classes.constraint_div2}>
                    <Paper className={classes.constraint_div2_paper}>
                        <Scheduler
                            data={data}
                        >
                            <ViewState
                                defaultCurrentDate="2018-07-27"
                            />
                            <MonthView />
                            <Toolbar />
                            <DateNavigator />
                            <TodayButton />
                            <Appointments />
                        </Scheduler>
                    </Paper>


                </div>






            </div>


        )
    }


}

export default withStyles(styleSheet)(DriverTime)





