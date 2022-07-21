
import React from "react";
import{Routes, Route} from "react-router-dom";
import CustomerView from "../pages/admin/customerView";
import Driver from "../pages/admin/driverView";
import CustomerSignUp from "../pages/Customer/CustomersSignUp";
import image2 from "../assets/img/image2.jpg";
import CarView from "../pages/Customer/CustomerCarView";
import Order from "../pages/Customer/order";
import Layout from "../pages/layout";
import CustomerHome from "../pages/Home/CustomerHomePage";
import Login from "../pages/common/signIn";
import SignIn from "../pages/common/signIn";
import AdminLog from "../pages/admin/AdminLoging";
import FileUpload from "../pages/common/FileUpload";


function App() {
  return (

     //<CustomerView/>
     //<CustomerSignUp/>
     //<CarView/>
    // <Order/>

      //<Driver/>

      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<CustomerHome/>}/>
              {/*<Route index element={<Driver/>}/>*/}
              <Route path="customerView" element={<CustomerView/>}/>
              <Route path="order" element={<Order/>}/>
              <Route path="customerSignUp" element={<CustomerSignUp/>}/>
              <Route path="carView" element={<CarView/>}/>
              <Route path="driver" element={<Driver/>}/>
              <Route path="CustomerHome" element={<CustomerHome/>}/>
              <Route path="signIn" element={<SignIn/>}/>
              <Route path="adminLog" element={<AdminLog/>}/>
              <Route path="fileUpload" element={<FileUpload/>}/>


          </Route>




      </Routes>



  );
}

export default App;
