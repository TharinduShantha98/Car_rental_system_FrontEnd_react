import axios from "axios";


class CarServices  {
    carSave =  async (data) =>{
        const promise = new Promise((resolve, reject) => {

            axios.post('http://localhost:8080/rental_system_war/api/car/upload/image',
                data,{
                headers:{
                    'content-type':'multipart/form-data'
                }
                })
                .then((res)=>{
                    return  resolve(res)
                })
                .catch((er)=>{
                    return resolve(er)
                })

        })


        return await promise
    }

}


export default new CarServices();