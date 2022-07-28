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
import {Link} from "react-router-dom";
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs';
// ES2015 module syntax
import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartLegend,
} from "@progress/kendo-react-charts";
import "hammerjs";
import CircularProgress from '@material-ui/core/CircularProgress';



class AdminHome extends Component{

    constructor(props) {
        super(props);


        this.state = {
           // data: data[2017],



        };
    }






    render() {
        const series = [
            {
                category: "BMW",
                value: 0.2545,
            },
            {
                category: "Middle range vehicle",
                value: 0.1552,
            },
            {
                category: "luxury range vehicle",
                value: 0.4059,
            },
            {
                category: "Traveling bus",
                value: 0.0911,
            },
            {
                category: "VAN",
                value: 0.0933,
            },
        ];

        const seriesData = [35,66,20, 40, 45, 30, 50];
        const categories = ["sun","Mon", "Tue", "Wed", "Thu", "Fri",'sta'];
        let {classes} = this.props;
       // const { data: chartData } = this.state;

        const labelContent = (props) => {
            let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
                style: "percent",
                minimumFractionDigits: 2,
            });
            return `${props.dataItem.category} years old: ${formatedNumber}`;
        };

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
                        <div className={classes. constraint_main2_chart}>
                            <Chart className={classes. constraint_main2_chart_chart} >
                                <ChartValueAxis  >
                                    <ChartValueAxisItem title={{
                                        text: "total"
                                    }} min={0} max={100} />
                                </ChartValueAxis>
                                <ChartCategoryAxis >
                                    <ChartCategoryAxisItem categories={categories} />
                                </ChartCategoryAxis>
                                <ChartSeries >
                                    <ChartSeriesItem data={seriesData} type="line" />
                                </ChartSeries>
                            </Chart>;



                        </div>





                        <div className={classes. constraint_main2_div2}>
                            <div className={classes. constraint_main2_div2_div1}>

                                   <div className={classes. constraint_main2_div2_div1_div}>
                                       <DirectionsCarIcon style={{fontSize:"45px",
                                           color:"#e0c930"
                                       }}/>
                                       <Typography
                                           variant="h6"
                                           gutterBottom
                                           style={{fontWeight:'bold'}}


                                       >
                                           <Link to={"/carAdd"} style={{textDecoration:'none',
                                               color:'black'}}>
                                           Car Add
                                           </Link>
                                       </Typography>

                                   </div>






                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <PeopleIcon style={{fontSize:"45px",
                                        color:"#e0c930"
                                    }}/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}


                                    >

                                        <Link to={"/customerView"} style={{textDecoration:'none',
                                            color:'black'}}>
                                        Customer view

                                        </Link>
                                    </Typography>
                                </div >

                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <ShoppingCartIcon style={{fontSize:"45px",
                                        color:"#e0c930"
                                    }}/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}


                                    >

                                        <Link to={"/AdminOrder"} style={{textDecoration:'none',
                                            color:'black'}}>
                                       Order check
                                        </Link>
                                    </Typography>
                                </div>
                                <div className={classes. constraint_main2_div2_div1_div}>
                                    <RadioButtonUncheckedIcon style={{fontSize:"45px",
                                        color:"#e0c930"
                                    }}/>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{fontWeight:'bold'}}
                                    >

                                        <Link to={"/driver"} style={{textDecoration:'none',
                                         color:'black'}}>
                                        Driver view
                                        </Link>
                                    </Typography>
                                </div>
                            </div>


                        </div>






                </div>

                <div className={classes.constraint_main3}>
                        <div className={classes.constraint_main3_div1}>
                            <Chart style={{width:"100%",
                                    height:"100%",

                            }}>
                                <ChartTitle text="Company vehicle status" />
                                <ChartLegend position="bottom" />
                                <ChartSeries>
                                    <ChartSeriesItem
                                        type="pie"
                                        data={series}
                                        field="value"
                                        categoryField="category"
                                        labels={{
                                            visible: true,
                                            content: labelContent,
                                        }}
                                    />
                                </ChartSeries>
                            </Chart>


                        </div>


                        <div className={classes.constraint_main3_div2}>
                            <div className={classes.constraint_main3_div2_div1}>




                            </div>

                            <div className={classes.constraint_main3_div2_div2}>

                            </div>


                        </div>

                </div>


            </div>


        );
    }


}

export default withStyles(styleSheet)(AdminHome)