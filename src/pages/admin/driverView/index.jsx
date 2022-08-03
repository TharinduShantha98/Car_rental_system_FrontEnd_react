import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import {colors} from "@material-ui/core";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import {DataGrid} from "@mui/x-data-grid";
import PostService from "../../../services/DriverService";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DriverService from "../../../services/DriverService";
import ClearIcon from '@material-ui/icons/Clear';


class Driver extends Component{


    constructor(props) {
        super(props);


        this.state ={
            formData:{
                driverId:'',
                firstName:'',
                lastName:'',
                age:'',
                contactNum:'',
                licenseId:'',
                status:'available'
            },

            data: [],
            driverId:'',


            btnId: 'save',

            nextId:"",


        }

    }


    handleSubmit =async ()=>{

       // console.log('save button click');
       // console.log(this.state.formData);

         console.log(this.state.btnId);


             let formData =  this.state.formData;
             let response = await DriverService.createPost(formData);
             if(response.data.code === 200){
                 console.log("successFully");
                 //await this.loadDriver();
                 alert("successFully add")

                window.location.reload();
             }else{
                 console.log("not successFully");
                 alert("not successFully add")
             }













    }


    loadDriver = async ()=>{
        let res = await DriverService.fetchDriver();
        console.log(res.data);
        if(res.data.code === 200){
             console.log(res.data.data);
             this.setState({
                 data: res.data.data

             });
        }else{
            console.log("wrong")
        }

    }


    searchDriver = async (searchId)=>{
        let params = {
            id: searchId,

        }

        let res = await DriverService.searchDriver(params);
        let searchDriver = res.data.data;


        let formData = this.state.formData
        formData.driverId = searchDriver.driverId;
        formData.firstName = searchDriver.firstName;
        formData.lastName= searchDriver.lastName;
        formData.contactNum = searchDriver.contactNum;
        formData.age=searchDriver.age;
        formData.licenseId = searchDriver.licenseId;
        formData.status = searchDriver.status;

        this.setState({formData:formData});


        // console.log(res.data.data);
        // console.log("hello");
        // console.log( this.state.formData)

    }


        updateDriver = async (data)=>{

        let res  = await DriverService.updateDriver(data);
        console.log(res);
        if(res.status === 200){
            console.log("success")
            alert("update successfully")
            window.location.reload();
        }else{
            console.log("not success")
            alert("not successFully");

        }


    }


    deleteDriver = async (driverId)=>{
        let params = {
            id: driverId
        }

        let res = await DriverService.deleteCustomer(params)

        if(res.data.code === 200){
            alert("delete successfully");
        }else{
            alert("not successfully ");

        }


        console.log(res);

    }

    getNextId =  async ()=>{

          let res = await DriverService.nextId();
          console.log(res.data.data);

          let formData  = this.state.formData
        formData.driverId = res.data.data;
          this.setState(formData);

    }














    cleartextField = ()=>{
        this.setState({
            formData:{
                driverId:'',
                firstName:'',
                lastName:'',
                age:'',
                contactNum:'',
                licenseId:'',
                status:'available'
            }
        })
    }




    componentDidMount() {
        this.loadDriver().then(r => {

        });


        this.getNextId().then(r => {

        })

    }


    render() {

        const columns = [
            { field: 'driverId', headerName: 'driverId', width: 70 },
            { field: 'firstName', headerName: 'FirstName', width: 120 },
            { field: 'lastName', headerName: 'lastName', width: 120 },
            { field: 'age', headerName: 'age', width: 120 },
            { field: 'contactNum', headerName: 'Id num', width: 130 },
            { field: 'licenseId', headerName: 'license num', width: 130 },


        ];

       // console.log(this.state.data[0]);
       // console.log(this.state.data.length);
       // console.log(this.state.tableDataArray[0])


        const rows = [];

        for(let i=0; i < this.state.data.length;i++){
                rows.push( { id: i,
                    driverId:this.state.data[i].driverId,
                    firstName: this.state.data[i].firstName,
                    lastName: this.state.data[i].lastName,
                    age: this.state.data[i].age,
                    contactNum:this.state.data[i].contactNum,
                    licenseId:this.state.data[i].licenseId})
        }


        let {classes} = this.props;

        return(

            <div className={classes.container}>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                <div className={classes.container_div}>

                    <div className={classes.container_div_div1}>

                        <div className={classes.container_div_div1_div1}>
                            <DriveEtaIcon color={"success"}  className={classes.container_div1_icon}/>
                            <Typography component="h1" variant="h5">
                               Driver Add
                            </Typography>
                        </div>

                        <div className={classes.container_div_div1_div2}>
                            <div className={classes.container_div_div1_div2_div1}>
                                <TextField
                                    margin="normal"
                                    required

                                    fullWidth
                                    id="driverId"
                                    label="driverId"
                                    name="driverId"
                                    // autoComplete="carType"
                                    variant="outlined"
                                    size={'small'}

                                    value={this.state.formData.driverId}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.driverId = e.target.value
                                        this.setState(formData);
                                    }}
                                   // validators={['required', 'isEmail']}
                                  //  errorMessages={['this field is required', 'email is not valid']}



                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="LastName"
                                    label="LastName"
                                    name="LastName"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.lastName}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.lastName = e.target.value
                                        this.setState(formData);
                                    }}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}


                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Contact Num"
                                    label="Contact Num"
                                    name="Contact Num"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.contactNum}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.contactNum = e.target.value
                                        this.setState(formData);
                                    }}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}


                                />



                            </div>
                            <div  className={classes.container_div_div1_div2_div2}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="firstName"
                                    name="firstName"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.firstName}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.firstName = e.target.value
                                        this.setState(formData);
                                    }}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="age"
                                    label="age"
                                    name="age"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.age}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.age = e.target.value
                                        this.setState(formData);
                                    }}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}

                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="licenseNum"
                                    label="license num"
                                    name="license num"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}

                                    value={this.state.formData.licenseId}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.licenseId = e.target.value
                                        this.setState(formData);
                                    }}
                                    // validators={['required', 'isEmail']}
                                    // errorMessages={['this field is required', 'email is not valid']}
                                    //style={{width:"100%"}}



                                />

                            </div>


                        </div>

                        <div className={classes.container_div_div1_div4}>
                            <div className={classes.container_div_div1_div4_div1}>
                                <TextField
                                    id="outlined-basic"
                                    label="searchDriver"
                                    variant="outlined"
                                    size={"small"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e)=>{

                                    }}
                                    onKeyPress={(ev)=>{
                                        if(ev.key === "Enter"){
                                            this.setState({driverId:ev.target.value})
                                            this.searchDriver(ev.target.value)
                                                .then(r => {

                                            });

                                        }

                                    }}
                                />
                            </div>

                            <div className={classes.container_div_div1_div4_div2}>
                                <Button
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    type={"submit"}
                                    id={this.state.btnId}
                                >
                                    save
                                </Button>
                            </div>
                            <div className={classes.container_div_div1_div4_div3}>
                                <Button variant="contained"
                                        color="primary"
                                        startIcon={<SystemUpdateAltIcon/>}
                                        onClick={()=>{
                                            let formData = this.state.formData;
                                            this.updateDriver(formData).then(r => {

                                            });

                                        }}
                                >
                                    update
                                </Button>
                            </div>
                            <div className={classes.container_div_div1_div4_div4}>
                                <Button variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon/>}
                                        onClick={()=>{
                                            let driverId =  this.state.driverId;
                                            this.deleteDriver(driverId).then(r => {

                                            })
                                        }}
                                >
                                    delete
                                </Button>

                            </div>
                            <div className={classes.container_div_div1_div4_div5}>
                                <Button variant="contained"
                                        color=""
                                        startIcon={<ClearIcon/>}
                                        style={{backgroundColor:"#846e1d"}}
                                        onClick={()=>{
                                            this.cleartextField();
                                        }}

                                >
                                    clear
                                </Button>

                            </div>
                        </div>






                        <div className={classes.container_div_div1_div3}>
                        </div>




                    </div>



                </div>

                <div className={classes.container_div2}>

                    <div className={classes.container_div2_div1}>
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




                </div>
                </ValidatorForm>

            </div>





        )
    }

}

export  default withStyles (styleSheet)(Driver)