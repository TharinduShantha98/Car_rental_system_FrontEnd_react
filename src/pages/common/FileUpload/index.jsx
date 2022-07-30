import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
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




import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {NavLink} from "react-router-dom";



class ChartFile extends Component{
    constructor(props) {
        super(props);



        this.state = {
            progress: 0
        }

    }


    render() {

        // const series = [
        //     {
        //         category: "0-14",
        //         value: 0.2545,
        //     },
        //     {
        //         category: "15-24",
        //         value: 0.1552,
        //     },
        //     {
        //         category: "25-54",
        //         value: 0.4059,
        //     },
        //     {
        //         category: "55-64",
        //         value: 0.0911,
        //     },
        //     {
        //         category: "65+",
        //         value: 0.0933,
        //     },
        // ];


        // CommonJS format
        // const seriesData = [20, 40, 45, 30, 50];
        // const categories = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        // let {classes} = this.props;
        // const data = [1, 2, 3, 5, 8, 13];


        // const labelContent = (props) => {
        //     let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
        //         style: "percent",
        //         minimumFractionDigits: 2,
        //     });
        //     return `${props.dataItem.category} years old: ${formatedNumber}`;
        // };

        let {classes} = this.props;

        return(

            <div className={classes.constraint}>
                <h2>You could save between</h2>
                <h1>{this.props.location.state.value}</h1>
                <NavLink to="/adminSignIn">Use Calculator Again</NavLink>



            </div>




           /* <div className={classes.constraint}>



                <h1>



                </h1>


                <Chart>
                    <ChartValueAxis>
                        <ChartValueAxisItem title={{
                            text: "Miles"
                        }} min={0} max={100} />
                    </ChartValueAxis>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} />
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem data={seriesData} type="line" />
                    </ChartSeries>
                </Chart>;
                {/!*<Calendar/>*!/}



                <Chart>
                    <ChartTitle text="World Population by Broad Age Groups" />
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





            </div>*/




        )
    }


}

export default withStyles(styleSheet)(ChartFile);
