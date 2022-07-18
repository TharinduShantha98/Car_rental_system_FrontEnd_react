import  image2 from "../../../assets/img/image2.jpg"
export const styleSheet ={


    container:{
        width:'100vw',
        height:'100vh',
        //backgroundColor:'#383634',
      //backgroundImage: "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')"
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
        filter: 'brightness(20%)',
        //brightness: '50%',

    },
    logo_container:{
      height: '100vh',
      backgroundColor:'black'


    },





    form_container:{
        height: '100vh',
        backgroundColor:'pink',



    },
    form_container_grid:{

        height: '70%',
        backgroundColor: '#c98744',
        position: 'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:'15%',





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
        backgroundColor:"#70a525",
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },



    form_container_grid_grid_textFiled:{
        marginTop:'3%!important',

    },
    form_container_grid_grid_button:{
        marginTop:'3%!important',
        width: '70%',
        backgroundColor:"#eac249"

    },







}