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
import {Form} from "semantic-ui-react";
import CarServices from "../../../services/CarServices";
class CarAdd extends Component{

    constructor(props) {
        super(props);


        this.state={
            formData:{
                carId:'',
                type:'',
                numberOfPassengers:'',
                transmissionType:'',
                color:'',
                registrationNum:'',
                priceForExrKM:'',
                freeMileage:'',
                MonthlyRate:'',
                DailyRate:'',
                frontView:'frontView',
                backView:'backView',
                sideView:'sideView',
                interiorView:'interiorView',
                frontViewImg: null,
                backViewImg:null,
                sideViewImg:null,
                interiorViewImg:null,


            },
            data:[],

            carId:'',





        }
    }


    handleSubmit = async ()=>{

        let form_data  =  new FormData();

        form_data.append('carId', this.state.formData.carId);
        form_data.append('type', this.state.formData.type);
        form_data.append('numberOfPassengers', this.state.formData.numberOfPassengers);
        form_data.append('transmissionType', this.state.formData.transmissionType);
        form_data.append('registrationNum', this.state.formData.registrationNum);
        form_data.append('color', this.state.formData.color);
        form_data.append('priceForExrKM', this.state.formData.priceForExrKM);
        form_data.append('freeMileage', this.state.formData.freeMileage);
        form_data.append('MonthlyRate', this.state.formData.MonthlyRate);
        form_data.append('DailyRate', this.state.formData.DailyRate);
        form_data.append('frontView', this.state.formData.frontView);
        form_data.append('backView', this.state.formData.backView);
        form_data.append('sideView', this.state.formData.sideView);
        form_data.append('front', this.state.formData.frontViewImg);
        form_data.append('back', this.state.formData.backViewImg);
        form_data.append('side', this.state.formData.sideViewImg);
        form_data.append('interior', this.state.formData.interiorViewImg);



        let promise = await CarServices.carSave(form_data);
        console.log(promise);
        if(promise.status === 200){
            console.log("success");
            alert("success full add car ")
            window.location.reload();
        }else{
            console.log("not success");
            alert("not success please try again ")
            window.location.reload();
        }
    }


    getAllCars = async ()=>{
       let res =  await  CarServices.getAllCar();

       console.log(res.data.data);
       if(res.data.code === 200){
           this.setState({data: res.data.data})
       }else{
           console.log("not success");

       }

    }


    searchCar = async (searchId)=>{

        let params = {
            id:searchId
        }

        let res  =  await CarServices.searchCar(params)
        console.log(res)

        console.log(res.data.data)
        if(res.data.code === 200){

            // const searchCar  = res.date.data;

            // console.log(searchCar.carId);
            let formData = this.state.formData;
            formData.carId = res.data.data.carId;
            formData.type = res.data.data.type;
            formData.numberOfPassengers = res.data.data.numberOfPassengers;
            formData.transmissionType = res.data.data.transmissionType;
            formData.color = res.data.data.color;
            formData.registrationNum = res.data.data.registrationNum;
            formData.freeMileage = res.data.data.freeMileage;
            formData.MonthlyRate = res.data.data.monthlyRate;
            formData.DailyRate = res.data.data.dailyRate;
            formData.frontView = res.data.data.frontView;
            formData.backView = res.data.data.backView;
            formData.sideView = res.data.data.sideView;
            formData.interiorView = res.data.data.interiorView;



            this.setState({formData:formData})

            console.log(this.state.formData.type);
            console.log(this.state.formData.MonthlyRate);
            console.log(this.state.formData.DailyRate);

            alert("success full search");


        }else{
            alert("not found ");

        }


    }


    deleteCar = async (carId)=>{
        let params = {
            id: carId
        }

        let res = await CarServices.deleteCar(params)

        if(res.data.code === 200){
            console.log("success");
            alert("delete success full");
            window.location.reload();

        }else{
            console.log("not success");
            alert("delete not success full");

        }

    }










    componentDidMount() {
        this.getAllCars().then(r => {


        });
    }


    render() {
        const columns = [
            { field: 'CarId', headerName: 'CarId', width: 80 },
            { field: 'carType', headerName: 'carType', width: 120 },
            { field: 'TransmissionType', headerName: 'Transmission Type', width: 120 },
            { field: 'numberOfPassengers', headerName: 'number Of passengers', width: 120 },
            { field: 'color', headerName: 'color', width: 120 },
            { field: 'registrationNum', headerName: 'registration num', width: 150 },
            { field: 'freeMileage', headerName: 'free mileage', width: 150 },
            { field: 'priceOfExKm', headerName: 'price of exr km', width: 120 },
            { field: 'dailyRate', headerName: 'daily rate', width: 120 },
            { field: 'MonthlyRate', headerName: 'Monthly rate', width: 120 },

        ];

        const rows = [];
        for(let i =0; i <this.state.data.length; i++){
            let car = this.state.data[i];

            rows.push({ id: i,
                CarId:car.carId,
                carType: car.type,
                TransmissionType: car.transmissionType,
                numberOfPassengers:car.numberOfPassengers,
                color:car.color,
                registrationNum:car.registrationNum,
                freeMileage:car.freeMileage,
                priceOfExKm:car.priceForExrKM,
                dailyRate:car.dailyRate,
                MonthlyRate:car.monthlyRate,

            })



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
                                Car Add
                           </Typography>
                       </div>

                       <div className={classes.container_div_div1_div2}>
                            <div className={classes.container_div_div1_div2_div1}>


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="carId"
                                    label="carId"
                                    name="carId"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.carId}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.carId = e.target.value
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
                                    value={this.state.formData.numberOfPassengers}
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
                                    value={this.state.formData.registrationNum}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.registrationNum = e.target.value
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
                                    value={this.state.formData.freeMileage}
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

                                    value={this.state.formData.DailyRate}
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
                                    value={this.state.formData.transmissionType}
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
                                    value={this.state.formData.color}
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
                                    id="car_Type"
                                    label="Car Type"
                                    name="Car_Type"
                                    // autoComplete="carType"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.type}
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
                                    id="Price for exr Km"
                                    label="Price for exr Kme"
                                    name="Price for exr Km"
                                    //  autoComplete="email"
                                    variant="outlined"
                                    size={'small'}
                                    value={this.state.formData.priceForExrKM}
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
                                    id="MonthlyRate"
                                    label="Monthly rate"
                                    name="Monthly rate"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
                                    value={this.state.formData.MonthlyRate}



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
                                      formData.frontViewImg = e.target.files[0]
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
                                      formData.sideViewImg = e.target.files[0]
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
                                       formData.backViewImg = e.target.files[0]
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
                                       formData.interiorViewImg = e.target.files[0]
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

                                    onKeyPress={(ev)=>{

                                        if(ev.key === "Enter"){
                                            this.setState({carId:ev.target.value});
                                            this.searchCar(ev.target.value).then(r =>{

                                            })


                                        }
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

                                        onClick={()=>{
                                            let carId = this.state.carId;
                                            console.log(carId);
                                            this.deleteCar(carId).then(r => {

                                            })

                                        }}


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