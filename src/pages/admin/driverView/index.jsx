import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import TextField from "@material-ui/core/TextField";
import GDSEButton from "../../../components/common/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
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


class Driver extends Component{


    constructor(props) {
        super(props);
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
        // function createData(id, first, last, age,contact,licean) {
        //     return { id,first, last, age, contact,licean };
        // }
        //
        // const rows = [
        //     createData('D-100', 'lalith', 'mudali', 24, '0784567812','B0987654321'),
        //     createData('D-101', 'lalith', 'mudali', 24, '0784567812','B0987654321'),
        //     createData('D-102', 'lalith', 'mudali', 24, '0784567812','B0987654321'),
        //     createData('D-103', 'lalith', 'mudali', 24, '0784567812','B0987654321'),
        //     // createData('D-103', 'lalith', 'mudali', 24, '0784567812','B0987654321'),
        // ];
        
        
        
        return(

            <div className={classes.container}>

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
                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="ID num"
                                    label="ID num"
                                    name="ID num"
                                    //  autoComplete="email"
                                    variant="outlined"

                                    size={'small'}
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
                                <Button variant="contained" startIcon={<SaveIcon />}  >
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



            </div>


            /* <div className={classes.container}>
                 <Grid container spacing={0} className={classes.driver_container}>
                     <Grid item lg={4} sm={6} md={4} xm={6}  className={classes.driverFrom_container}>

                         <form className={classes.driverFrom} >
                             <Typography variant="h5">DRIVER FROM</Typography>
                             <TextField id="outlined-basic" label="Driver Id " placeholder='id' variant="outlined"
                                        size="small" className={classes.textFlied} />
                             <TextField id="outlined-basic" label="first name " placeholder='firstName' variant="outlined"
                                        size="small" className={classes.textFlied} />
                             <TextField id="outlined-basic" label="last name" placeholder='lastName' variant="outlined"
                                        size="small" className={classes.textFlied} />
                             <TextField id="outlined-basic" label="age" placeholder='age' variant="outlined"
                                        size="small" className={classes.textFlied} />
                             <TextField id="outlined-basic" label="contact num" placeholder='contact num' variant="outlined"
                                        size="small" className={classes.textFlied} />
                             <TextField id="outlined-basic" label="license num" placeholder='license num' variant="outlined"
                                        size="small" className={classes.textFlied} />


                             <GDSEButton
                                  label='Add Driver'
                                  onClick={()=>{

                                      console.log('login button click..!')

                                  }}
                                  className={classes.from_button}
                                  color="primary"
                              >
                              </GDSEButton>

                             <GDSEButton
                                 label='Update Driver '
                                 onClick={()=>{

                                     console.log('login button click..!')

                                 }}
                                 className={classes.from_button}
                                 color="primary"
                             >
                             </GDSEButton>

                             <GDSEButton
                                 label='Delete Driver'
                                 onClick={()=>{

                                     console.log('login button click..!')

                                 }}
                                 className={classes.from_button}
                                 color="primary"

                             >
                             </GDSEButton>



                         </form>
                     </Grid>

                     <Grid item lg={8} sm={6} md={8} xm={6} className={classes.description} >

                         <Grid item lg={12} sm={12} md={12} xm={12}  className={classes.description_logo} >
                             <div className={classes.description_logo_inner}>
                                 <Typography variant="h3">RELAXED DRIVERS </Typography>
                                 <Typography variant="h5">Hertz Brookfield car rental PVT</Typography>
                                 <div>
                                     <TextField id="outlined-basic" label="serachDriver" variant="outlined" size={'small'} />
                                     <GDSEButton
                                         label='AddTimeTable'
                                         onClick={()=>{

                                             console.log('login button click..!')

                                         }}
                                         className={classes.from_button_search}
                                         color="secondery"

                                     >
                                     </GDSEButton>
                                 </div>
                             </div>





                         </Grid>
                         <Grid item lg={12} sm={12} md={12} xm={12} className={classes.table_container_root}  >
                             <TableContainer component={Paper} className={classes.table_container} >
                                 <Table className={classes.table} aria-label="simple table" >
                                     <TableHead>
                                         <TableRow>
                                             <TableCell>DriverId</TableCell>
                                             <TableCell align="right">firstName</TableCell>
                                             <TableCell align="right">lastName</TableCell>
                                             <TableCell align="right">age</TableCell>
                                             <TableCell align="right">contact num</TableCell>
                                             <TableCell align="right">license num</TableCell>
                                         </TableRow>
                                     </TableHead>
                                     <TableBody>
                                         {rows.map((row) => (
                                             <TableRow key={row.id}>
                                                 <TableCell component="th" scope="row">
                                                     {row.id}
                                                 </TableCell>
                                                 <TableCell align="right">{row.first}</TableCell>
                                                 <TableCell align="right">{row.last}</TableCell>
                                                 <TableCell align="right">{row.age}</TableCell>
                                                 <TableCell align="right">{row.contact}</TableCell>
                                                 <TableCell align="right">{row.licean}</TableCell>
                                             </TableRow>
                                         ))}
                                     </TableBody>
                                 </Table>
                             </TableContainer>
                         </Grid>

                     </Grid>


                 </Grid>


             </div>*/


        )
    }

}

export  default withStyles (styleSheet)(Driver)