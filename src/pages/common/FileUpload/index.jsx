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
} from "@progress/kendo-react-charts";
import "hammerjs";


import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

class ChartFile extends Component{
    constructor(props) {
        super(props);



        this.state = {

            progress: 0
        }

    }


    render() {


        // CommonJS format
        const seriesData = [20, 40, 45, 30, 50];
        const categories = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        let {classes} = this.props;

        const data = [1, 2, 3, 5, 8, 13];

        return(
            <div className={classes.constraint}>

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
                {/*<Calendar/>*/}


            </div>




        )
    }


}

export default withStyles(styleSheet)(ChartFile);
