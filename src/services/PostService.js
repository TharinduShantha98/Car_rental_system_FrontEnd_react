import axios from "axios";



class PostService {
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

    
}

export default new PostService();