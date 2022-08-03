import {hover} from "@testing-library/user-event/dist/hover";
import backGround from "../../../assets/img/cars/dashbord2.png";

export const styleSheet= {

    container:{
       // width:'100vw',
        height:'240vh',
    //    backgroundColor:'#d2b08e',
        // backgroundSize: 'cover',
        //filter: 'brightness(20%)',
        //brightness: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'column',







    },

    container_main1:{
        width:'100%',
        height:'60vh',
    //    backgroundColor:'#63472b',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',







    },


    container_main2:{
        width:'100%',
        height:'60vh',
   //     backgroundColor:'#63322b',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',







    },

    container_main3:{
        width:'100%',
        height:'60vh',
     //   backgroundColor:'#2b5e63',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',







    },

    container_main4:{
        width:'100%',
        height:'60vh',
    //    backgroundColor:'#42632b',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',






    },
    root: {
        maxWidth: 345,
        width:'20%',
        height:'98%',
    },
    linkStyle:{
        // listStyle: 'none'
        textDecoration:'none',
        color:'#f8f5f5'
    },
    root2_cardMedia:{
        height:'45%',
        width:'100%',

    },














    container_carContainer:{
        height: '30%',

        backgroundColor:'#fcfcfc',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    container_carContainer_grid:{
        height:"100%",
        width:'20%',
      //  backgroundColor:"#d07417",

    },






    container_carContainer_grid_img:{
        height:"100%",
        width:"100%",
    },


    container_carContainer_grid_button:{
       // position:'relative',
        left:'20%',

    },

    // container_carContainer_grid_hover:hover{









}