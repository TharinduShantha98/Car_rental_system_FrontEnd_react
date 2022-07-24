import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import ListIcon from '@material-ui/icons/List';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Badge from "@material-ui/core/Badge";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typography from "@material-ui/core/Typography";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Paper from '@mui/material/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    SplineSeries,
    Legend, LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import {ValueScale, Animation} from '@devexpress/dx-react-chart';
import { sales as data } from '../AdminHomePage/demo-data/data-vizualization'
import {ErrorBoundary} from "@mui/x-data-grid/components/ErrorBoundary";
import makeStyles from "@material-ui/core/styles/makeStyles";



class AdminHome extends Component{

    constructor(props) {
        super(props);


        // this.state = {
        //     data: data[2017],
        // };
    }






    render() {

        let {classes} = this.props;
       // const { data: chartData } = this.state;


        const data = [
            { argument: 1, value: 10 },
            { argument: 2, value: 20 },
            { argument: 3, value: 30 },
        ];



        return(

            <div className={classes.constraint}>
                <div className={classes.constraint_main1} >
                    <Badge badgeContent={2} color="primary" >
                        <ListIcon />
                    </Badge>
                    <Badge badgeContent={4} color="primary">
                        <NotificationImportantIcon />
                    </Badge>


                    <TextField
                        id="outlined-basic"
                        label="search"
                        variant="outlined"
                        size={"small"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}

                        style={{width:'70%'}}

                    />
                    <Badge badgeContent={4} color="primary">
                        <PersonIcon />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        <FacebookIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <TwitterIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <InstagramIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <MailOutlineIcon />
                    </Badge>

                </div>


                <div className={classes. constraint_main2}>
                        <div className={classes. constraint_main2_div1}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                style={{fontWeight:'bold'}}


                            >
                               DashBoard
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              Hi.. tharindu shantha  Welcome back to the DashBoard
                            </Typography>

                            <Typography variant="subtitle2" gutterBottom>
                                check out your past Searches and the content to you have
                                browsed in. View last results.
                            </Typography>



                        </div>


                        <div className={classes. constraint_main2_div2}>
                            <div className={classes. constraint_main2_div2_div1}>
                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <DirectionsCarIcon/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}


                                    >
                                        Car Add
                                    </Typography>

                                </div>

                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <PeopleIcon/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}


                                    >
                                        Customer view
                                    </Typography>
                                </div >

                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <ShoppingCartIcon/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}


                                    >
                                       Order check
                                    </Typography>
                                </div>
                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <RadioButtonUncheckedIcon/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}
                                    >
                                        Driver view
                                    </Typography>
                                </div>
                            </div>


                        </div>



                        <div className={classes. constraint_main2_div3}>






                        </div>


                </div>


            </div>


        );
    }


}

export default withStyles(styleSheet)(AdminHome)