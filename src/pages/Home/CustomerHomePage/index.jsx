import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Reveal from "semantic-ui-react/dist/commonjs/elements/Reveal";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
//import 'semantic-ui-css/semantic.min.css'
import image2 from "../../../assets/img/image2.jpg";
import image4 from "../../../assets/img/image4.jpg";

class CustomerHome extends Component{
    constructor(props) {
        super(props);

    }






    render() {
        let {classes} = this.props;




        return (
          <div className={classes.container}>

              <div className={classes.container_part1}>


              </div>

          </div>

        )
    }


}

export default withStyles(styleSheet)(CustomerHome)