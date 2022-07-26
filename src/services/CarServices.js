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


    getAllCar = async ()=>{
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/rental_system_war/api/car')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)

                })




        })
        return  await  promise;

    }



    searchCar =  async (params)=>{
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/rental_system_war/api/car/search',{params:params})
                .then((res)=>{

                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })


        })

        return  await promise;

    }


    deleteCar = async (param) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('http://localhost:8080/rental_system_war/api/car',{params:param})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return  resolve(err)
                })





        })

    return await promise


    }







}


export default new CarServices();