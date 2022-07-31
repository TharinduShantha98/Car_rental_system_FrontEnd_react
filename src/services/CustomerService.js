import axios from "axios";



class CustomerService {

    getAllCustomer  =  async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/customer")
                .then((res)=>{
                    resolve(res);
                })
                .catch((err)=>{
                    resolve(err);
                })

        })


        return await promise;

    }



    saveCustomer = async (data)=>{
        const promise = new Promise((resolve, reject) => {

            axios.post("http://localhost:8080/rental_system_war/api/customer/upload/image",
                data,{
                headers:{
                    'content-type':'multipart/form-data'
                }
                })
                .then((res)=>{
                    return resolve(res);
                }).catch((err)=>{
                    return resolve(err)
            })

        })

        return await promise;

    }


    getLastId = async()=>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/customer/lastCustomer")
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve(err);
                })


        })


        return await promise;
    }


    customerLoginObject = async (params)=>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/customer/loginObject", {params:params})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err);
                })



        })

        return await promise;


    }


    searchCustomer = async (params)=>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/customer/search", {params:params})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err);
                })



        })

        return await promise;




    }



}

export default new CustomerService();