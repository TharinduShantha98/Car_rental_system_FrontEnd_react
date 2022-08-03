import axios from "axios"


class OrderService{

    saveOrder = async (data)=>{


        let promise = new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/rental_system_war/api/order",data)
                .then((res)=>{
                    return resolve(res)

                })
                .catch((err)=>{
                    return resolve(err)
                })

        })

        return  await promise;


    }

    getLastOrderId = async ()=>{
        let promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/order/lastOrderId")
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve(err)
                })



        })


        return  await promise;


    }


    getAllOrders = async ()=>{
        let promise =  new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/order")
                .then((res)=>{
                  return resolve(res);

                })
                .catch((err)=>{
                    return resolve(err);

                })

        })



        return  await promise;



    }


    updateOrder = async (data)=>{
        let promise = new Promise((resolve, reject) => {

            axios.put("http://localhost:8080/rental_system_war/api/order",data)
                .then((res)=>{
                    return resolve(res)

                })
                .catch((err)=>{
                    return resolve(err)

                })

        })

        return await promise



    }

    uploadBankClip =  async (data) =>{
        let promise = new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/rental_system_war/api/order/upload/image",
                data,
                {
                 headers:{
                     'content-type':'multipart/form-data'
                 }

                })
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

export default new OrderService();
