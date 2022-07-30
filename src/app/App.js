
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
import AdminLog from "../pages/admin/AdminSignIn";
import FileUpload from "../pages/admin/CarAdd";
import CarAdd from "../pages/admin/CarAdd";
import CustomerProfile from "../pages/Customer/CustomerProfile";
import Rental from "../pages/admin/Rental";
import AdminOrderView from "../pages/admin/AdminOrderViews";
import DriverTime from "../pages/Driver/TimeTable";
import AdminHome from "../pages/Home/AdminHomePage";
import Chart from "../pages/common/FileUpload";
import ChartFile from "../pages/common/FileUpload";
import AdminSignIn from "../pages/admin/AdminSignIn";


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
              <Route path="adminSignIn" element={<AdminSignIn/>}/>
              <Route path="carAdd" element={<CarAdd/>}/>
              <Route path="profile" element={<CustomerProfile/>}/>
              <Route path="driverTime" element={<DriverTime/>}/>
              <Route path="AdminOrder" element={<AdminOrderView/>}/>
              <Route path="adminHome" element={<AdminHome/>}/>
              <Route path="chart" element={<ChartFile/>}/>


          </Route>


          <Route path="carView" element={<CarView/>}/>

          {/*<Route path="carAdd" element={<CarAdd/>}/>*/}











      </Routes>



  );
}

export default App;
