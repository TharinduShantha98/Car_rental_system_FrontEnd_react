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
import PostService from "../../../services/PostService";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


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
            }


        }



    }


    handleSubmit =async ()=>{

        console.log('save button click');
        console.log(this.state.formData)


        let formData =  this.state.formData;
        let response = await PostService.createPost(formData);

        // if(response.status === 200){
        //     console.log("successFully");
        //
        // }else{
        //     console.log("not successFully");
        // }




    }




    render() {

        const columns = [
            { field: 'driverId', headerName: 'driverId', width: 70 },
            { field: 'FirstName', headerName: 'FirstName', width: 120 },
            { field: 'lastName1', headerName: 'lastName', width: 120 },
            { field: 'age1', headerName: 'age', width: 120 },
            { field: 'Id num', headerName: 'Id num', width: 130 },
            { field: 'license num', headerName: 'license num', width: 130 },


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
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.driverId = e.target.value
                                        this.setState(formData);
                                    }}



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

                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.lastName = e.target.value
                                        this.setState(formData);
                                    }}


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
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.contactNum = e.target.value
                                        this.setState(formData);
                                    }}


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
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.firstName = e.target.value
                                        this.setState(formData);
                                    }}
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
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.age = e.target.value
                                        this.setState(formData);
                                    }}

                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="license num"
                                    label="license num"
                                    name="license num"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.licenseId = e.target.value
                                        this.setState(formData);
                                    }}

                                />


                            </div>


                        </div>

                        <div className={classes.container_div_div1_div4}>
                            <div className={classes.container_div_div1_div4_div1}>
                                <TextField
                                    id="outlined-basic"
                                    label="searchCar"
                                    variant="outlined"
                                    size={"small"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>

                            <div className={classes.container_div_div1_div4_div2}>
                                <Button
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    type={"submit"}
                                    // onClick={()=>{
                                    //     console.log("add driver ------")
                                    // }}


                                >
                                    add car
                                </Button>
                            </div>
                            <div className={classes.container_div_div1_div4_div3}>
                                <Button variant="contained"
                                        color="primary"
                                        startIcon={<SystemUpdateAltIcon/>}
                                >
                                    update
                                </Button>
                            </div>
                            <div className={classes.container_div_div1_div4_div4}>
                                <Button variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon/>}
                                >
                                    delete
                                </Button>

                            </div>
                        </div>






                        <div className={classes.container_div_div1_div3}>

                           {/* <div className={classes.container_div_div1_div2_div2}>
                                <label >Font view</label>
                                <TextField
                                    id="standard-basic"
                                    label="" type={'file'}
                                    fullWidth
                                    variant="outlined"
                                />
                                <label>Side view </label>
                                <TextField
                                    id="standard-basic"
                                    label=""
                                    type={'file'}
                                    fullWidth
                                    variant="outlined"
                                />
                            </div>

                            <div className={classes.container_div_div1_div2_div1}>


                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>



                                <label>back view  </label>
                                <TextField
                                    id="standard-basic"
                                    label=""
                                    type={'file'}
                                    fullWidth
                                    variant="outlined" />
                                <label>Interior</label>
                                <TextField
                                    id="standard-basic"
                                    label=""
                                    type={'file'}
                                    fullWidth
                                    variant="outlined"
                                />
                            </div>*/}

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