import  image2 from "../../../assets/img/image2.jpg"
import  image4 from "../../../assets/img/image4.jpg"
export const styleSheet ={


    container:{
        width:'100vw',
        height:'100vh',
        //backgroundColor:'#383634',
      //backgroundImage: "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')"
        backgroundImage: `url(${image4})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
        //filter: 'brightness(20%)',
        //brightness: '50%',

    },
    logo_container:{
        height: '100vh',
       // backgroundColor:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',



    },
    logo_container_div:{

        position: 'relative',
        width:'90%',
        height:'35%',
        backgroundColor:'#2f2e2d',
        left:'5%',
        opacity:0.7
        // top:'0',
        // left:'0',
        // margin:'auto',
        // right:'0',
        // bottom:'0',
    },
    logo_container_div_h3:{
        color:'#ded9d4',
        fontWeight:'bold',

    },

    logo_container_div_button:{
        width: '20%',
        backgroundColor:"#fdc504 !important",
        color: "black!important",
        left:'5%'


    },
    form_container:{
        height: '100vh',
       // backgroundColor:'pink',




    },
    form_container_grid:{

        height: '70%',
        backgroundColor: '#2f2e2d',
        position: 'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:'15%',
        //opacity:0.7





    },
    form_container_grid_grid:{
       // marginTop:'3%',
        border:"2px solid black",
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'



    },
    form_container_grid_grid_form:{
        width:"90%",
        height:'90%',
        backgroundColor:"#4c4a48",
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        opacity:0.7

    },



    form_container_grid_grid_textFiled:{
        marginTop:'3%!important',
       // border:"2px solid white !important",
        color: "white!important",


    },
    form_container_grid_grid_button:{
        marginTop:'3%!important',
        width: '70%',
        backgroundColor:"#eac249 !important",
        color: "black!important",

    },







}