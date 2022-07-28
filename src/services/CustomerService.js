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

}

export default new CustomerService();