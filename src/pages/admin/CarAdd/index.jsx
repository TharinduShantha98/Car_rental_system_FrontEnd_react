import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import SaveIcon from '@material-ui/icons/Save';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import {DataGrid} from "@mui/x-data-grid";
import {ValidatorForm} from "react-material-ui-form-validator";
class CarAdd extends Component{

    constructor(props) {
        super(props);


        this.state={
            formData:{
                carId:'CA-101',
                type:'',
                numberOfPassengers:0,
                transmissionType:'',
                color:'',
                registrationNum:'',
                priceForExrKM:'',
                freeMileage:'',
                MonthlyRate:0,
                DailyRate:0,
                frontView:'frontView',
                backView:'backView',
                sideView:'sideView',
                interiorView:'interiorView',
                frontViewImg: null,
                backViewImg:null,
                sideViewImg:null,
                interiorViewImg:null,


            }



        }
    }












    render() {
        const columns = [
            { field: 'CarId', headerName: 'CarId', width: 70 },
            { field: 'carType', headerName: 'carType', width: 100 },
            { field: 'Transmission Type', headerName: 'Transmission Type', width: 100 },
            { field: 'Number of pasenager', headerName: 'Number of pasenager', width: 100 },
            { field: 'color', headerName: 'color', width: 100 },
            { field: 'registration num', headerName: 'registration num', width: 100 },
            { field: 'fuel Type ', headerName: 'fuel Type', width: 100 },
            { field: 'free mileage', headerName: 'free mileage', width: 100 },
            { field: 'price of exr km', headerName: 'price of exr km', width: 100 },
            { field: 'daily rate', headerName: 'daily rate', width: 100 },
            { field: 'Monthly rate', headerName: 'Monthly rate', width: 100 },

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
                                Car Add
                           </Typography>
                       </div>

                       <div className={classes.container_div_div1_div2}>
                            <div className={classes.container_div_div1_div2_div1}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="carType"
                                    label="Car Type"
                                    name="CarType"
                                   // autoComplete="carType"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.type = e.target.value
                                        this.setState(formData)
                                    }}



                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="numberOfPassenger"
                                    label="Number of passenger"
                                    name="numberOfPassenger"
                                  //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.numberOfPassengers = e.target.value
                                        this.setState(formData)
                                    }}
                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="registration num"
                                    label="registration num"
                                    name="registration num"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.transmissionType = e.target.value
                                        this.setState(formData)
                                    }}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Free mileage"
                                    label="Free mileage"
                                    name="Free mileage"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.freeMileage = e.target.value
                                        this.setState(formData)
                                    }}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Daily rate"
                                    label="Daily rate"
                                    name="Daily rate"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.DailyRate = e.target.value
                                        this.setState(formData)
                                    }}




                                />

                            </div>
                            <div  className={classes.container_div_div1_div2_div2}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="transmission type"
                                    name="transmission type"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.transmissionType = e.target.value
                                        this.setState(formData)
                                    }}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="color"
                                    label="color"
                                    name="color"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.color = e.target.value
                                        this.setState(formData)
                                    }}
                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Fuel type"
                                    label="Fuel type"
                                    name="Fuel type"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}


                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Price for exr Km"
                                    label="Price for exr Kme"
                                    name="Price for exr Km"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.priceForExrKM = e.target.value
                                        this.setState(formData)
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Monthly rate"
                                    label="Monthly rate"
                                    name="Monthly rate"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.MonthlyRate = e.target.value
                                        this.setState(formData)
                                    }}

                                />


                            </div>


                       </div>

                       <div className={classes.container_div_div1_div3}>

                           <div className={classes.container_div_div1_div2_div2}>
                               <label >Font view</label>
                              <TextField
                                  id="sideView"
                                  label=""
                                  type={'file'}
                                  fullWidth
                                  variant="outlined"
                                  accept={"image/png,image/jpeg"}
                                  onChange={(e)=>{
                                      let formData = this.state.formData
                                      formData.frontView = e.target.files[0]
                                      this.setState(formData);

                                  }}
                              />
                               <label>Side view </label>
                              <TextField
                                  id="standard-basic"
                                  label=""
                                  type={'file'}
                                  fullWidth
                                  variant="outlined"
                                  onChange={(e)=>{
                                      let formData = this.state.formData
                                      formData.sideView = e.target.files[0]
                                      this.setState(formData);

                                  }}
                              />
                           </div>

                           <div className={classes.container_div_div1_div2_div1}>


                               <label>back view  </label>
                               <TextField
                                   id="standard-basic"
                                   label=""
                                   type={'file'}
                                   fullWidth
                                   variant="outlined"
                                   onChange={(e)=>{
                                       let formData = this.state.formData
                                       formData.backView = e.target.files[0]
                                       this.setState(formData);

                                   }}


                               />
                               <label>Interior</label>
                               <TextField
                                   id="standard-basic"
                                   label=""
                                   type={'file'}
                                   fullWidth
                                   variant="outlined"
                                   onChange={(e)=>{
                                       let formData = this.state.formData
                                       formData.interiorView = e.target.files[0]
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
                                    type={'submit'}


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


                   </div>



               </div>

            </ValidatorForm>






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



           </div>



       )
    }

}

export  default withStyles(styleSheet)(CarAdd)