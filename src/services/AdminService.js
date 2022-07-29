import axios from "axios"

class AdminServices {

    carSave =  async (data)=>{
        const promise =  new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/rental_system_war/api/admin",data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err);
                })



        })


        return await  promise;

    }


    getLastAdminObject = async ()=>{
        const  promise =  new Promise((resolve, reject) => {

            axios.get("http://localhost:8080/rental_system_war/api/admin/lastAdmin")
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })


        })

        return  await  promise;



    }




}

export default new AdminServices();