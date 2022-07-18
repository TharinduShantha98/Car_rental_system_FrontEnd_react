import {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

class CarView extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        let {classes} = this.props;


        return (
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={3} className={classes.container_carContainer}>

                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>

        )

    }

}

export default withStyles(styleSheet)(CarView)

