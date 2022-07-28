import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import DeleteIcon from '@mui/icons-material/Delete';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Typography from "@material-ui/core/Typography";
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import user from '../../../assets/img/cars/user.jpg';
import license from '../../../assets/img/cars/license.jpg';
import CustomerService from "../../../services/CustomerService";





class  CustomerView extends Component{
    constructor(props) {
        super(props);


        this.state={
            data:[],

        }



    }




    getAllCustomer = async()=>{
        let res =  await CustomerService.getAllCustomer();
        console.log(res);


        if(res.data.code === 200 ){
            this.setState({
                data: res.data.data
            })
        }


    }


    componentDidMount() {
        this.getAllCustomer().then(r=>{

        })
    }


    render() {
        let {classes} = this.props;

        const columns = [
            { field: 'customerId', headerName: 'CusId', width: 120 },
            { field: 'firstName', headerName: 'UserName', width: 120 },
            { field: 'contactNum', headerName: 'Contact num', width: 120 },
            { field: 'NICNumber', headerName: 'NIC number', width: 170 },
            { field: 'Email', headerName: 'Email', width: 220 },
            { field: 'password', headerName: 'PassWord', width: 200 },

        ];

        const rows = [];
        for(let i=0; i < this.state.data.length;i++){
           rows.push({ id: i,

               firstName: this.state.data[i].firstName,
               customerId:this.state.data[i].customerId,
               contactNum:this.state.data[i].contactNum,
               NICNumber:this.state.data[i].nicnumber,
               Email:this.state.data[i].email,
               password:this.state.data[i].password,

               lastName: 'Jon', age: 35 },)
        }


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
                                    components={{Toolbar: GridToolbar}}


                                >



                                </DataGrid>
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


