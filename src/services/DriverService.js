import axios from "axios";



class DriverService {
    createPost =  async (data) =>{
        console.log("form data: " + data);

        const promise = new Promise((resolve, reject)=>{
            axios.post('http://localhost:8080/rental_system_war/api/driver',data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((er)=>{
                    console.log('error: ' + er);
                    return resolve(er)
                })



        })

     return await promise

    }


    fetchDriver = async ()=>{
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/rental_system_war/api/driver')
                .then((res) =>{
                   return resolve(res);

                })
                .catch((err)=>{
                    return resolve(err);

                })


        })

        return  await promise;


    }



    searchDriver = async (params)=>{
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/rental_system_war/api/driver/search',{params:params})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })


        })
        return await promise;

    }


    updateDriver = async (data)=>{
        const promise = new Promise((resolve, reject) => {
            axios.put('http://localhost:8080/rental_system_war/api/driver',data)
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve(err);
                })



        })

        return await promise;

    }


    deleteCustomer = async (param)=>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('http://localhost:8080/rental_system_war/api/driver',{params:param})
                .then((res)=>{
                    return resolve(res)

                })
                .catch((err)=>{
                    return resolve(err)
                })

        })

        return await promise;

    }



    availableDrives = async ()=>{
        const promise = new Promise((resolve, reject) => {

            axios.get("http://localhost:8080/rental_system_war/api/driver/availableDrives")
                .then((res)=>{

                    return resolve(res)

                })
                .catch((err)=>{
                    return resolve(err)
                })



        })


        return await promise;



    }


    nextId = async ()=>{
        const promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/driver/nextId")
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{

                    return resolve(err);
                })


        })

        return await promise;




    }


    
}

export default new DriverService();