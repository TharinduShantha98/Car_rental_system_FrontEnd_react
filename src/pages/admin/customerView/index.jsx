import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import DeleteIcon from '@mui/icons-material/Delete';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Typography from "@material-ui/core/Typography";
import { DataGrid } from '@mui/x-data-grid';
import user from '../../../assets/img/cars/user.jpg';
import license from '../../../assets/img/cars/license.jpg';






class  CustomerView extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        let {classes} = this.props;

        const columns = [
            { field: 'id', headerName: 'CusId', width: 70 },
            { field: 'firstName', headerName: 'UserName', width: 100 },
            { field: 'lastName', headerName: 'Address', width: 100 },
            { field: 'contactNum', headerName: 'Contact num', width: 100 },
            { field: 'NICNumber', headerName: 'NIC number', width: 100 },
            { field: 'NIC number', headerName: 'NIC number', width: 100 },
            { field: 'Email ', headerName: 'Email', width: 160 },
            { field: 'password', headerName: 'PassWord', width: 100 },

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







        return(

            <div className={classes.container}>

                <div className={classes.container_div}>
                    <div className={classes.container_div_div1}>
                        <Typography component="h1" variant="h5"  style={{
                            fontSize:'30px',
                            // fontWeight:'bold',
                            color:'#0c1308',

                        }}>
                           All customer view
                        </Typography>
                    </div>
                    <div  className={classes.container_div_div2} >
                        <div className={classes.container_div_div2_div1}>

                            <div style={{ height: 400, width: '100%', border:'2px solid black' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>




                        </div>
                        <div className={classes.container_div_div2_div2}>
                                <div className={classes.container_div_div2_div2_div1}>
                                        <img width={'100%'} height={'100%'} src={user}/>
                                </div>
                                <div className={classes.container_div_div2_div2_div2}>
                                        <img  width={'100%'} height={'100%'} src={license}/>
                                </div>

                        </div>
                    </div>

                </div>

            </div>

        )
    }
}


export  default withStyles (styleSheet)(CustomerView)


