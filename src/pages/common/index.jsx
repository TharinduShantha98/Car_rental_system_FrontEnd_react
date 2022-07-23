import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GDSEButton from "../../components/common/Button";
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import {Link} from "react-router-dom";


class  NavBar extends Component{
    constructor(props) {
        super(props);
    }



    render() {
       let {classes} = this.props;


        return (

                <div  className={classes.container}>
                    <AppBar position="static" className={classes.container_AppBar}>
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            {/*<Typography variant="h6" className={classes.title}>*/}
                            {/*    News*/}
                            {/*</Typography>*/}


                            <Link to="CustomerHome"  className={classes.linkStyle}>
                                <Button>home</Button>
                            </Link>

                            <Button>About</Button>

                            <Button>Service</Button>

                            <Link to="carView" className={classes.linkStyle}>
                                <Button>CarView</Button>
                            </Link>

                            <Link to="order" className={classes.linkStyle}>
                                <Button>Orders</Button>
                            </Link>
                            <Link to={"customerSignUp"} className={classes.linkStyle}>
                                <Button>Login</Button>
                            </Link>

                            <Link to={"driver"} className={classes.linkStyle}>
                                <Button>Driver</Button>
                            </Link>

                            <Link to={"customerView"} className={classes.linkStyle}>
                                <Button>cusView</Button>
                            </Link>

                            <Link to={"signIn"} className={classes.linkStyle}>
                                <Button>signIn</Button>
                            </Link>

                            <Link to={"adminLog"} className={classes.linkStyle}>
                                <Button>adminLog</Button>
                            </Link>

                            <Link to={"carAdd"} className={classes.linkStyle}>
                                <Button>carAdd</Button>
                            </Link>

                            <Link to={"profile"} className={classes.linkStyle}>
                                <Button>profile</Button>
                            </Link>

                            <Link to={"rental"} className={classes.linkStyle}>
                                <Button>Rental</Button>
                            </Link>

                            <Link to={"AdminOrder"} className={classes.linkStyle}>
                                <Button>AdminOrderView</Button>
                            </Link>

                        </Toolbar>
                    </AppBar>

                    <div className={classes.container_div} >

                        <div className={classes.container_div_div1}>
                            <div className={classes.container_div_div1_div1} >
                                <Typography variant="h6">NO- 176/1 Galle Road Aluthgama</Typography>
                                <Typography variant="h7"

                                > TEL NO +94 34 555 1212</Typography>
                                <Typography variant="h7">TEL NO +94 34 555 1313</Typography>

                            </div>
                            <div className={classes.container_div_div1_div2}>
                                <FacebookIcon  className={classes.iconStyle} />
                                <TwitterIcon className={classes.iconStyle}/>
                                <InstagramIcon className={classes.iconStyle}/>
                                <WhatsAppIcon className={classes.iconStyle}/>
                                <EmailIcon className={classes.iconStyle}/>
                            </div>
                        </div>

                        <div className={classes.container_div_div2}>



                        </div>


                    </div>






                </div>






        )


    }


}
export default withStyles(styleSheet)(NavBar)
