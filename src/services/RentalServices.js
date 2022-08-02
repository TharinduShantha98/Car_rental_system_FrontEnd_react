import axios from "axios"

class RentalServices {

    rentalPost = async (data)=>{

        const  promise = new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/rental_system_war/api/rental",data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                    return resolve(err);
            })



        })


        return  await promise;



    }


    getAllRental =async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/rental")
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)

                })

        })


        return await promise



    }


    nextRentalId = async ()=>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/rental/nextRentalId")
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err);
                })



        })


        return await promise;



    }

    searchRental =  async (params)=>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/rental/search",{params:params})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)

                })




        })


        return await  promise;


    }

    updateRental = async (data)=>{
        const promise = new Promise((resolve, reject) => {
            axios.put("http://localhost:8080/rental_system_war/api/rental",data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })



        })


        return await promise;


    }





}

export default new RentalServices();




