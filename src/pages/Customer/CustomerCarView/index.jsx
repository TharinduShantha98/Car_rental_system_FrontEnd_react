import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import car1 from "../../../assets/img/cars/car1.jpg";
import car2 from "../../../assets/img/cars/car2.jpg";
import car3 from "../../../assets/img/cars/car3.jpg";
import car4 from "../../../assets/img/cars/car4.jpg";
import car5 from "../../../assets/img/cars/car5.jpg";
import car6 from "../../../assets/img/cars/car6.jpg";
import Button from "@material-ui/core/Button";

class CarView extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        let {classes} = this.props;


        return (
            <div className={classes.container}>
                <div className={classes.container_main1}>

                </div>

                <div className={classes.container_main2}>

                </div>

                <div className={classes.container_main3}>

                </div>

                <div className={classes.container_main4}>

                </div>







            </div>







            /*<Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} lg={11} sm={12} md={12} xm={12} className={classes.container_carContainer}>

                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car1} alt={"ca1.png"} className={classes.container_carContainer_grid_img}/>
                       {/!* <Button variant="contained" color="primary" className={classes.container_carContainer_grid_button}>
                            inquiry this
                        </Button>*!/}


                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car2} alt={"ca2.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car3} alt={"ca3.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car4} alt={"ca4.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={11} sm={12} md={12} xm={12} className={classes.container_carContainer}>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car5} alt={"ca5.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car6} alt={"ca6.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>

                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car1} alt={"ca1.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car2} alt={"ca2.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>



                </Grid>
                <Grid item xs={12} lg={11} sm={12} md={12} xm={12} className={classes.container_carContainer}>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car3} alt={"ca3.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car4} alt={"ca4.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car5} alt={"ca5.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                    <Grid  className={classes.container_carContainer_grid}>
                        <img src={car6} alt={"ca6.png"} className={classes.container_carContainer_grid_img}/>
                    </Grid>
                </Grid>
                {/!*<Grid item xs={12} lg={12} sm={12} md={12} xm={12} className={classes.container_carContainer}>*!/}

                {/!*</Grid>*!/}
            </Grid>*/

        )

    }

}

export default withStyles(styleSheet)(CarView)

