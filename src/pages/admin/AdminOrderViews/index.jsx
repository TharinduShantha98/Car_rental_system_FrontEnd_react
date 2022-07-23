import React, {Component} from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

class AdminOrderView extends Component{

    constructor(props) {
        super(props);
    }




    render() {

        const columns = [
            { field: 'orderOd', headerName: 'orderId', width: 140 },
            { field: 'startingDate', headerName: 'starting Date', width: 150 },
            { field: 'endingDate', headerName: 'Ending Date', width: 150 },
            { field: 'review', headerName: 'Review', width: 150 },
            { field: 'status', headerName: 'status', width: 150 },
            { field: 'totalPrice', headerName: 'totalPrice', width: 150 },
            { field: 'customer Id', headerName: 'customer Id', width: 150 },

        ];


        const rows = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
            { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
            { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
            { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
            { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
            { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ];

















        let {classes} = this.props;

        const StyledBadge = withStyles((theme) => ({
            badge: {
                right: -3,
                top: 13,
                border: `2px solid ${theme.palette.background.paper}`,
                padding: '0 4px',
            },
        }))(Badge);




        return (
            <div className={classes.container}>
                <div className={classes.container_main1}>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={12} color="secondary">
                            <EmailIcon />
                        </StyledBadge>
                    </IconButton>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={12} color="secondary">
                            <MessageIcon />
                        </StyledBadge>
                    </IconButton>


                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={12} color="secondary">
                            <WhatsAppIcon />
                        </StyledBadge>
                    </IconButton>



                </div>


                <div className={classes.container_main2}>

                    <Typography
                        variant="h5"
                        // style={{
                        //     left:"12%",
                        //     position:'relative',
                        //     top:'20%',
                        // }}
                    >
                        Order Details
                    </Typography>
                </div>

                <div  className={classes.container_main3}>
                    <div className={classes.container_div2_div1}>
                        <div style={{ height: '100%', width: '100%', border:'2px solid black' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={7}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>

                    </div>

                </div>

                <div className={classes.container_main4}>
                    <Button variant="contained"
                            color="secondary"
                            startIcon={<CheckIcon/>}
                            style={
                                {backgroundColor: '#345e17',
                                //marginLeft:'10%',
                                }}

                    >
                        Conform Order
                    </Button>

                    <Button variant="contained"
                            color="primary"
                            startIcon={<PeopleAltIcon/>}

                    >
                        Customer Page
                    </Button>



                    <Button variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon/>}
                            // style={
                            //     {
                            //         marginLeft:'10%',
                            //     }}
                    >
                        Wrong Order
                    </Button>




                </div>


                <div className={classes.container_main5}  >
                    <div>

                    </div>



                </div>




            </div>
        )
    }
}

export default withStyles(styleSheet)(AdminOrderView)

