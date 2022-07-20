import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Reveal from "semantic-ui-react/dist/commonjs/elements/Reveal";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
//import 'semantic-ui-css/semantic.min.css'
import dasBord from "../../../assets/img/cars/desktop.jpg";
import image4 from "../../../assets/img/image4.jpg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';


import Icon from '@material-ui/core/Icon';
import green from "@material-ui/core/colors/green";

class CustomerHome extends Component{
    constructor(props) {
        super(props);

    }






    render() {
        let {classes} = this.props;

        const bull = <span className={classes.bullet}>•</span>;

        return (
          <div className={classes.container}>

              <div className={classes.container_part1}>
                  <div className={classes.container_part1_img}>
                        <img src={dasBord}/>
                  </div>
                  <div className={classes.container_part1_des}>
                      <Typography variant="h2" >Hertz Brookfield car rental PVT</Typography>
                      <Typography variant="h4" >VIP'S, VVIP'S DELEGATE AND CELEBRITY TRANSPORT</Typography>
                      <Typography variant="h6">Best car for special occasions VIP,
                          VVIP Delegate and celebrities transfer </Typography>
                  </div>

              </div>

              <div className={classes.container_part2}>
                  <div className={classes.container_part2_div}>
                      <Typography variant="h5">Enjoy the efficient and specialized services of
                          Casons Rent a Car Sri Lanka's leading rent-a-car company </Typography>
                  </div>


                  <div className={classes.container_part2_div2}  >
                      <Card className={classes.root}>
                          <CardContent>
                              <Typography className={classes.pos} color="textSecondary">
                                  adjective
                              </Typography>
                              <Typography variant="body2" component="p">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>


                      <Card className={classes.root}>
                          <CardContent>
                              <Typography className={classes.pos} color="textSecondary">
                                  adjective
                              </Typography>
                              <Typography variant="body2" component="p">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>



                      <Card className={classes.root}>
                          <CardContent>
                              <Typography className={classes.pos} color="textSecondary">
                                  adjective
                              </Typography>
                              <Typography variant="body2" component="p">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>


                      <Card className={classes.root}>
                          <CardContent>
                              <Typography className={classes.pos} color="textSecondary">
                                  adjective
                              </Typography>
                              <Typography variant="body2" component="p">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>

                  </div>
              </div>
          </div>

        )
    }


}

export default withStyles(styleSheet)(CustomerHome)