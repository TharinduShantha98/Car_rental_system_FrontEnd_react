import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import car1 from "../../../assets/img/cars/car1.jpg";
import car2 from "../../../assets/img/cars/car2.jpg";
import car3 from "../../../assets/img/cars/car3.jpg";
import car4 from "../../../assets/img/cars/car4.jpg";
import car5 from "../../../assets/img/cars/kodiaq_vrs.png";
import car6 from "../../../assets/img/cars/skoda.png";
import car7 from "../../../assets/img/cars/skoda3.png";
import car8 from "../../../assets/img/cars/car6.jpg";
import car9 from "../../../assets/img/cars/car6.jpg";
import car10 from "../../../assets/img/cars/car6.jpg";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';


class CarView extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        let {classes} = this.props;


        return (
            <div className={classes.container}>
                <div className={classes.container_main1}>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car4}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    LKR 10000 Per day
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Hatchback
                                    Manual
                                    Petrol
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Passengers: 2 Adults + 3 Children
                                    Luggage Capacity: 2 Suitcases
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/*<Button size="small" color="primary">*/}
                            {/*    Share*/}
                            {/*</Button>*/}
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<LocalTaxiIcon/>}
                            >
                                Book Online
                            </Button>
                        </CardActions>
                    </Card>


                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    LKR 13000 Per day
                                </Typography>

                                <Typography variant="body1" color="textSecondary" component="p">
                                    Hatchback
                                    Manual
                                    Petrol
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Passengers: 2 Adults + 3 Children
                                    Luggage Capacity: 2 Suitcases
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/*<Button size="small" color="primary">*/}
                            {/*    Share*/}
                            {/*</Button>*/}
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<LocalTaxiIcon/>}
                            >
                                Book Online
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    LKR 10000 Per day
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Hatchback
                                    Manual
                                    Petrol
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Passengers: 2 Adults + 3 Children
                                    Luggage Capacity: 2 Suitcases
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/*<Button size="small" color="primary">*/}
                            {/*    Share*/}
                            {/*</Button>*/}
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<LocalTaxiIcon/>}
                            >
                                Book Online
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car3}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    LKR 15000 Per day
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Hatchback
                                    Manual
                                    Petrol
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Passengers: 2 Adults + 3 Children
                                    Luggage Capacity: 2 Suitcases
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/*<Button size="small" color="primary">*/}
                            {/*    Share*/}
                            {/*</Button>*/}
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<LocalTaxiIcon/>}
                            >
                                Book Online
                            </Button>
                        </CardActions>
                    </Card>
                </div>




                <div className={classes.container_main2}>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car6}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car5}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>


                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={car7}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>


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

