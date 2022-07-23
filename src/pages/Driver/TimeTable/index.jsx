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



        // const currentDate = '2018-11-01';
        // const schedulerData = [
        //     { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        //     { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
        //     { startDate: '2018-11-02T09:45', endDate: '2018-11-02T11:00', title: 'Meeting' },
        // ];

        return(

            <div className={classes.constraint}>

                <div className={classes.constraint_div1}>


                </div>


                <Paper>
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

               {/* <Paper>
                    <Scheduler
                        data={schedulerData}
                    >
                        <ViewState
                            currentDate={currentDate}
                        />
                        <DayView
                            startDayHour={9}
                            endDayHour={14}
                        />
                        <Appointments />
                    </Scheduler>
                </Paper>*/}

            </div>


        )
    }


}

export default withStyles(styleSheet)(DriverTime)





