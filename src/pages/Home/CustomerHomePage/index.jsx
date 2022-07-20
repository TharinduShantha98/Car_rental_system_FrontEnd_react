import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import dasBord from "../../../assets/img/cars/desktop.jpg";
import dasBord1 from "../../../assets/img/cars/alphardnew.jpg";
import dasBord2 from "../../../assets/img/cars/businessclasstamplate.jpg";
import dasBord3 from "../../../assets/img/cars/premionw.jpg";
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
                      <Typography variant="h6">Enjoy the efficient and specialized services of
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


              <div className={classes.container_part2_div3}>
                    <div className={classes.container_part2_div3_div1}>
                        <Typography variant="h3">Our business class vehicle</Typography>
                    </div>

                    <div  className={classes.container_part2_div3_div2}>
                        <img src={dasBord1}/>
                        <img src={dasBord2}/>
                        <img src={dasBord3}/>


                    </div>
              </div>

              <div className={classes.container_part2_div4}>
                  <p  className={classes.container_part2_div4_p}>
                      A big thank you to Casons-Rent-A-Car for the beyond satisfactory help
                      with my trip planning and airport drop and pick up! The moment I landed<br/>
                      in BIA I was greeted with smiles – Sri Lanka the nation that forever
                      smiles. I visited Sri Lanka with my fiancé and we were transported to
                      the lively beach town of Unuwatuna, a slow but comfortable drive.<br/>
                      The Unuwatuna bay beach was breathtaking at sunset and makes you feel
                      like you’re in Hawaii but it’s a dozen times cheaper! Plenty of cafés,
                      curios, hotels, lodgings and restaurants galore the streets suitable for<br/>
                      everyone and anyone. We decided to settle at the Lavendish Beach Resort,
                      on our first day we enjoyed a small but happening party by a cafe on
                      the beach! Sri Lanka loves to party!! We loved every part of our trip
                      and it’s all thanks to Casons for organising everything and total ease
                      of mind!
                  </p>
              </div>

              <div className={classes.container_part2_div5}>
                  <div className={classes.container_part2_div5_div1}>
                      <Typography variant="h6">Service</Typography>
                      <ol>
                          <li>Weddings & VIP Hires</li>
                          <li>Breakdown Services</li>
                          <li>Corporate Rental</li>
                          <li>Self Drive Rental</li>
                          <li>Chauffeur Driven & Tours</li>
                          <li>Airport Tansfers</li>
                          <li>Limousine Services</li>
                      </ol>

                  </div>
                  <div className={classes.container_part2_div5_div1}>
                      <Typography variant="h6">Contact Us</Typography>
                      <ol>
                          <li>176/1 galle road</li>
                          <li>aluthgama</li>
                          <li>sri lanka</li>
                          <li>Hotline</li>
                          <li>+94 34 4555666</li>
                          <li>+94 34 4555666</li>
                          <li>Fax</li>
                          <li>+94 34 4555666</li>
                          <li>Email:</li>
                          <li>info@HertzBrookfield.gmail.com</li>
                      </ol>
                  </div>
                  <div className={classes.container_part2_div5_div1}>
                      <Typography variant="h6">Vehicle Fleet</Typography>
                      <ol>
                          <li>Cars</li>
                          <li>SUVs</li>
                          <li>Vans & Busses</li>
                          <li>Utility Vehicles & Lorries</li>
                          <li>Chauffeur Driven & Tours</li>
                          <li>Motorbikes</li>
                          <li>Tuk Tuks</li>
                      </ol>
                  </div>



              </div>



          </div>

        )
    }


}

export default withStyles(styleSheet)(CustomerHome)