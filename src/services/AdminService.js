import axios from "axios"

class AdminServices {

    carSave =  async (data)=>{
        const promise =  new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/rental_system_war/api/admin",data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(er);
                })



        })




    }



}

export default new AdminServices();