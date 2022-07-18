import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import car1 from "../../../assets/img/cars/car1.jpg";

class CarView extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        let {classes} = this.props;


        return (
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} lg={12} sm={12} md={12} xm={12}
                      className={classes.container_carContainer}>

                    <Grid  className={classes.container_carContainer_grid}>
                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>
                </Grid>
                <Grid item xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_carContainer}>
                    <Grid  className={classes.container_carContainer_grid}>
                            <p>super</p>
                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>
                            <p>hello</p>
                    </Grid>



                </Grid>
                <Grid item xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_carContainer}>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car1} alt={"ca1.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>

                    </Grid>
                </Grid>
                {/*<Grid item xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_carContainer}>*/}

                {/*</Grid>*/}
            </Grid>

        )

    }

}

export default withStyles(styleSheet)(CarView)

