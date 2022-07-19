
import React from "react";
import{Routes, Route} from "react-router-dom";
import CustomerView from "../pages/admin/customerView";
import Driver from "../pages/admin/driverView";
import CustomerSignUp from "../pages/Customer/CustomersSignUp";
import image2 from "../assets/img/image2.jpg";
import CarView from "../pages/Customer/CustomerCarView";
import Order from "../pages/Customer/order";


function App() {
  return (

     //<CustomerView/>
     //<CustomerSignUp/>
     //<CarView/>
    // <Order/>

      //<Driver/>
      <Routes>
        <Route exact path='driver' element={<Driver/>}/>
        <Route path='customerView' element={<CustomerView/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='customerSignUp' element={<CustomerSignUp/>}/>

      </Routes>



  );
}

export default App;
