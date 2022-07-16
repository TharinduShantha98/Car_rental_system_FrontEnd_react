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


class Driver extends Component{


    constructor(props) {
        super(props);
    }
    
    
    




    render() {
        let {classes} = this.props;
        function createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
        }

        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
        
        
        
        return(

            <div className={classes.container}>
                <Grid container spacing={0} className={classes.driver_container}>
                    <Grid item lg={4} sm={6} md={4} xm={6}  className={classes.driverFrom_container}>
                        <form className={classes.driverFrom}>

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
                        </Grid>
                        <Grid item lg={12} sm={12} md={12} xm={12}  className={classes.table}  >
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>DriverId</TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right">firstName</TableCell>
                                            <TableCell align="right">lastName</TableCell>
                                            <TableCell align="right">age</TableCell>
                                            <TableCell align="right">contact num</TableCell>
                                            <TableCell align="right">license num</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                    </Grid>


                </Grid>


            </div>


        )
    }

}

export  default withStyles (styleSheet)(Driver)