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
        backgroundColor:'pink'


    }




}