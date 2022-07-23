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
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
import SettingsIcon from '@material-ui/icons/Settings';

import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Icon from '@material-ui/core/Icon';
import green from "@material-ui/core/colors/green";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MessageIcon from "@material-ui/icons/Message";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import car4 from "../../../assets/img/cars/car4.jpg";
import {Link} from "react-router-dom";

class CustomerHome extends Component{
    constructor(props) {
        super(props);


        this.state = {
            position: [
                { label: 'AirPort'},
                { label: 'Trip' },
                { label: 'Wedding' },

            ]
        }

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

              <div className={classes.container_part2_div4}>
                 <div className={classes.container_part2_div4_form}>
                     <TextField
                         id="date"
                         label="Starting Date"
                         type="date"
                         fullWidth
                         defaultValue="2022-07-23"
                         className={classes.textField}
                         variant="outlined"
                         size={'small'}
                         InputLabelProps={{
                             shrink: true,
                         }}
                     />

                     <TextField
                         id="date"
                         label="Ending Date"
                         type="date"
                         fullWidth
                         defaultValue="2022-07-23"
                         className={classes.textField}
                         variant="outlined"
                         size={'small'}
                         InputLabelProps={{
                             shrink: true,
                         }}
                     />

                     <Autocomplete
                         disablePortal
                         id="combo-box-demo"
                         options={this.state.position}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params}
                                                             label="Option"
                                                             variant="outlined"
                                                             size={"small"}

                         />}
                         getOptionLabel={
                             (option) => option.label
                         }
                         onChange={(e, value) => {
                             console.log(value.label);
                         }}
                         size="small"
                         //variant="outlined"


                         style={
                             { width: '100%',
                                marginTop:'2%'
                             }
                         }
                     />


                     <div className={classes.btn}>
                         <Button
                             type="submit"
                             fullWidth
                             variant="contained"
                             sx={{ mt: 3, mb: 2 }}
                             color={'primary'}
                             startIcon={<MessageIcon/>}
                         >
                             Car Filters
                         </Button>
                     </div>




                 </div>



              </div>


              <div className={classes.container_part2_div3}>
                  <div className={classes.container_part2_div3_div1}>
                      <Typography variant="h3">Our Available business class vehicle</Typography>
                  </div>

                  <div  className={classes.container_part2_div3_div2}>
                     {/* <img src={dasBord1}/>
                      <img src={dasBord2}/>
                      <img src={dasBord3}/>*/}


                      <Card className={classes.root2}>
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                  alt="Contemplative Reptile"
                                  height="140"
                                  image={car4}
                                  title="Contemplative Reptile"
                                  className={classes.root2_cardMedia}
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                      General Cars
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

                              <Link to="/carView" className={classes.linkStyle} >
                                  <Button
                                      size="small"
                                      color="primary"
                                      variant="contained"
                                      fullWidth
                                      startIcon={<LocalTaxiIcon/>}
                                  >
                                      View cars
                                  </Button>

                              </Link>


                          </CardActions>
                      </Card>
                      <Card className={classes.root2}>
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                  alt="Contemplative Reptile"
                                  height="140"
                                  image={dasBord3}
                                  title="Contemplative Reptile"
                                  className={classes.root2_cardMedia}
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                      Premium Cars
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
                              <Link to="/carView" className={classes.linkStyle} >
                                  <Button
                                      size="small"
                                      color="primary"
                                      variant="contained"
                                      fullWidth
                                      startIcon={<LocalTaxiIcon/>}
                                  >
                                      View cars
                                  </Button>

                              </Link>
                          </CardActions>
                      </Card>

                      <Card className={classes.root2}>
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                  alt="Contemplative Reptile"
                                  height="140"
                                  image={dasBord2}
                                  title="Contemplative Reptile"
                                  className={classes.root2_cardMedia}
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                      Luxury Cars
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




                              <Link to="carView" className={classes.linkStyle} >
                                  <Button
                                      size="small"
                                      color="primary"
                                      variant="contained"
                                      fullWidth
                                      startIcon={<LocalTaxiIcon/>}
                                  >
                                      View cars
                                  </Button>

                              </Link>
                          </CardActions>
                      </Card>

                  </div>
              </div>

            {/*  <div className={classes.container_bachGroundImg}>

              </div>*/}





              <div className={classes.container_part2}>
                  <div className={classes.container_part2_div}>
                      <Typography variant="h6">Enjoy the efficient and specialized services of
                          Casons Rent a Car Sri Lanka's leading rent-a-car company </Typography>
                  </div>


                  <div className={classes.container_part2_div2}  >
                      <Card className={classes.root}>
                          <CardContent className={classes.root_card}>
                              <DriveEtaIcon className={classes.icon}/>
                              <Typography className={classes.pos} color="textSecondary">
                                  Over 200 Vehicle
                              </Typography>
                              <Typography variant="body2" component="p" className={classes.pos2} >
                                  4WD Jeeps, 50 Vans, 200 Cars,
                                  Double Cabs, Luxury Coaches,
                                  Lorries etc
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>


                      <Card className={classes.root}>
                          <CardContent className={classes.root_card}>
                              <PersonIcon className={classes.icon}/>
                              <Typography className={classes.pos} color="textSecondary">
                                  Our Strength
                              </Typography>
                              <Typography variant="body2" component="p" className={classes.pos2} >
                                  30 In-house Operational Staff,18 Automobile and 90
                                  permanent Drivers from every part of the Island
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>



                      <Card className={classes.root}>
                          <CardContent className={classes.root_card}>
                              <StarIcon className={classes.icon}/>
                              <Typography className={classes.pos} color="textSecondary">
                                  Insurance
                              </Typography>
                              <Typography variant="body2" component="p" className={classes.pos2} >
                                  Comprehensive Insurance available for
                                  all our vehicles including Passengers
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>


                      <Card className={classes.root}>
                          <CardContent className={classes.root_card}>
                              <SettingsIcon className={classes.icon}/>
                              <Typography className={classes.pos} color="textSecondary">
                                  24/7 Breakdown Service
                              </Typography>
                              <Typography variant="body2" component="p" className={classes.pos2} >
                                  24 hrs Island wide backup services
                                  with affiliated Garages and Mobile units
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>

                  </div>
              </div>








              <div className={classes.container_part2_div5}>
                  <div className={classes.container_part2_div5_div1}>
                      <Typography variant="h6" >Service</Typography>
                      <ol className={classes.listStyle}>
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
                      <ol className={classes.listStyle}>
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
                      <ol className={classes.listStyle}>
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