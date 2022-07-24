import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';




class ChartFile extends Component{
    constructor(props) {
        super(props);


        this.state ={
            data: [
                { argument: '1', value: '10' },
                { argument: '2', value: '20' },
                { argument: '3', value: '30' },
            ]
        }
    }


    render() {
        let {classes} = this.props;



        return(
            <div className={classes.constraint}>

                <Paper>
                    <Chart
                        data={this.state.data}
                    >
                        <ArgumentAxis />
                        <ValueAxis />

                        <LineSeries valueField="value" argumentField="argument" />
                    </Chart>
                </Paper>


            </div>
        )
    }


}

export default withStyles(styleSheet)(ChartFile);
