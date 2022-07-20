import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Reveal from "semantic-ui-react/dist/commonjs/elements/Reveal";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
//import 'semantic-ui-css/semantic.min.css'
import dasBord from "../../../assets/img/cars/desktop.jpg";
import image4 from "../../../assets/img/image4.jpg";
import Typography from "@material-ui/core/Typography";

class CustomerHome extends Component{
    constructor(props) {
        super(props);

    }






    render() {
        let {classes} = this.props;




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
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>


              </div>

          </div>

        )
    }


}

export default withStyles(styleSheet)(CustomerHome)