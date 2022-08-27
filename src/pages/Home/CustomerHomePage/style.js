import backGround from '../../../assets/img/cars/backGroung.jpg'
import image4 from "../../../assets/img/image4.jpg";
import rentCar from '../../../assets/img/cars/rentacar.jpg'
import home2 from '../../../assets/img/profile/2.png'


export  const  styleSheet = {
    container:{
        //width:'100vw',
        height:'400vh',
        display:'flex',
    //    backgroundColor:'#282626',
        flexDirection:'column',

    },
    container_part1:{
       // width:'100vw',
        height:'100vh',
        display:'flex',
      //  backgroundColor:'#e56565',
        flexDirection:'row',
        backgroundImage: `url(${home2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
    container_part1_img:{
        width:'60%',
        height:'100%',
        display:'flex',
       backgroundColor:'#242424',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    container_part1_des:{
        width:'40%',
        height:'100%',
        display:'flex',
      //  backgroundColor:'#ffffff',
        alignItems:'center',
        flexDirection: 'column',
        justifyContent:'center',


    },
    container_part2:{
        //width:'100vw',
        height:'50vh',
        display:'flex',
       // backgroundColor:'#c23838',
        backgroundColor:'#ffffff',
        flexDirection: 'column',
        justifyContent:'center',
        overflow:'hidden',



    },
    container_part2_div:{
        width:'100%',
        height:'20%',
        display:'flex',
        backgroundColor:'#ffffff',
      //  backgroundColor:'#c7d5ec',
       // flexDirection: 'column',
        justifyContent:'center',

    },


    container_part2_div2:{
        width:'100%',
        height:'80%',
        display:'flex',

      //  backgroundColor:'#c7d5ec',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',

    },
    root: {
        //minWidth: 275,
        width:'15%',
        height:'90%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    },
    root_card: {
        //minWidth: 275,
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    },


    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    pos2:{
        textAlign: 'center',

    },
    icon:{
        fontSize:'40px',
        color:"#7b610e !important"

    },


    container_part2_div3:{
       // width:'100vw',
        height:'100vh',
        display:'flex',
        backgroundColor:'#242424',
        flexDirection: 'column',
        justifyContent:'center',

    },


    root2: {
        maxWidth: 345,
        width:'25%',
        height:'95%',
    },

    root2_cardMedia:{
        height:'65%',
        width:'100%',

    },

    roo2_CarActions:{
        height:'70%',

    },
    linkStyle:{
        // listStyle: 'none'
        textDecoration:'none',
        width:'100%',
    },



    container_part2_div3_div1:{
        width:'100%',
        height:'20%',
        display:'flex',
       // backgroundColor:'#386bc2',
        // flexDirection: 'column',
        justifyContent:'center',
        textAlign:"center",
    },
    container_part2_div3_div2:{
        width:'100%',
        height:'80%',
        display:'flex',
       // backgroundColor:'#90adde',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    container_part2_div4:{
        height:'100vh',
        display:'flex',
        backgroundColor:'#242424',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',



    },
    container_imageList:{

        width:"50%",
        height:"100%",
        backgroundColor:"#000"
    },






    container_part2_div4_form:{
        display:'flex',
        width:'80%',
        height:'40%',
    //    backgroundColor:'#bab6b6',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',


    },
    textField: {
        marginTop:'2%!important',

    },
    btn:{
        width:'50%',
        height:"20%",
       // backgroundColor:'#aa5555',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    },




    container_part2_div5:{
        height:'50vh',
        display:'flex',
        backgroundColor:'#fdfdfd',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },

    container_part2_div5_div1:{
        height:'100%',
        width:'20%',
     //   backgroundColor:'#f5eeee',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',


    },
    container_bachGroundImg:{
        width:"100%",
        height:'50vh',
        backgroundImage: `url(${rentCar})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    listStyle:{
        listStyle: 'none'
    },


    texFiled:{

    },
    root3: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

       // backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: "100%",
        height: 612,
        //overflow: 'hidden',
    },























}