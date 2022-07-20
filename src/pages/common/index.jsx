import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';

import GDSEButton from "../../components/common/Button";
import {Link} from "react-router-dom";


class  NavBar extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        let {classes} = this.props;


        return (

                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            {/*<Typography variant="h6" className={classes.title}>*/}
                            {/*    News*/}
                            {/*</Typography>*/}


                            <Link to="order">
                                <Button>home</Button>
                            </Link>

                            <Button>About</Button>

                            <Button>Service</Button>

                            <Link to="carView">
                                <Button>CarView</Button>
                            </Link>


                            <Button>Orders</Button>
                            <Button>Login</Button>


                        </Toolbar>
                    </AppBar>
                </div>






        )


    }


}
export default withStyles(styleSheet)(NavBar)
