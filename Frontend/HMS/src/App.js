/* Importing all components */
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OwnerView from "./Components/Owner/OwnerView";
import AddManager from "./Components/Owner/AddManager";
import UpdateManager from "./Components/Owner/UpdateManager";
import ViewManager from "./Components/Owner/ViewManager";
import Home from "./Components/Main/Home";
import AddStaff from "./Components/Manager/Staff/AddStaff";
import ManagerView from "./Components/Manager/ManagerView";
import UpdateStaff from "./Components/Manager/Staff/UpdateStaff";
import ViewStaff from "./Components/Manager/Staff/ViewStaff";
import AddInventory from "./Components/Manager/Inventory/AddInventory";
import UpdateInventory from "./Components/Manager/Inventory/UpdateInventory";
import ViewInventory from "./Components/Manager/Inventory/ViewInventory";
import AddRoom from "./Components/Manager/Room/AddRoom";
import UpdateRoom from "./Components/Manager/Room/UpdateRoom";
import ViewRoom from "./Components/Manager/Room/ViewRoom";
import ReceptionView from "./Components/Guest/ReceptionView";
import AddGuest from "./Components/Guest/AddGuest";
import UpdateGuest from "./Components/Guest/UpdateGuest";
import ViewGuest from "./Components/Guest/ViewGuest";
import Login from "./Components/Main/Login";
import Register from "./Components/Main/Register";
import CheckOutView from "./Components/Guest/CheckOutView";
import OwnerRoute from "./Components/Main/OwnerRoute";
import ManagerRoute from "./Components/Main/ManagerRoute";
import StaffRoute from "./Components/Main/StaffRoute";
import CheckOutGuest from "./Components/Guest/CheckOutGuest";
import ViewGuestLog from "./Components/Guest/ViewGuestLog";
import CheckIn from "./Components/Guest/CheckIn";
import CheckOut from "./Components/Guest/CheckOut";
import OwnerHome from "./Components/Owner/OwnerHome";
import StaffView from "./Components/Manager/Staff/StaffView";
import RoomView from "./Components/Manager/Room/RoomView";
import InventoryView from "./Components/Manager/Inventory/InventoryView";
import Paypal from "./Components/Payment/Paypal";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import SuggestionBox from "./Components/Main/SuggestionBox";

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner/>}>       
      <Router>        
        {/* Header component */}
        <Header />
        <div className="container">
          <Switch>
            {/* Global routes */}
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" component={Login} />
            <StaffRoute path="/paypal" component={Paypal} />
            <Route path="/suggest" component={SuggestionBox}/>
            

            {/* Owner routes */}
            <OwnerRoute path="/owner" component={OwnerHome} />
            <OwnerRoute path="/ownerView" component={OwnerView} />
            <OwnerRoute path="/addUser" component={Register} />

            <OwnerRoute path="/addManager" component={AddManager} />
            <OwnerRoute
              path="/editManager/:managerId"
              component={UpdateManager}
            />
            <OwnerRoute
              path="/viewManager/:managerId"
              component={ViewManager}
            />

            {/* Manager routes */}
            <ManagerRoute path="/manager" component={ManagerView} />

            {/* Staff Based */}
            <ManagerRoute path="/staffView" component={StaffView} />
            <ManagerRoute path="/addStaff" component={AddStaff} />
            <ManagerRoute path="/editStaff/:staffId" component={UpdateStaff} />
            <ManagerRoute path="/viewStaff/:staffId" component={ViewStaff} />

            {/* Inventory Based */}
            <ManagerRoute path="/inventoryView" component={InventoryView} />
            <ManagerRoute path="/addInventory" component={AddInventory} />
            <ManagerRoute
              path="/editInventory/:inventoryId"
              component={UpdateInventory}
            />
            <ManagerRoute
              path="/viewInventory/:inventoryId"
              component={ViewInventory}
            />

            {/* room Based */}
            <ManagerRoute path="/roomView" component={RoomView} />
            <ManagerRoute path="/addRoom" component={AddRoom} />
            <ManagerRoute path="/editRoom/:roomId" component={UpdateRoom} />
            <ManagerRoute path="/viewRoom/:roomId" component={ViewRoom} />

            {/* Staff Routes */}
            <StaffRoute path="/reception" component={ReceptionView} />

            <StaffRoute path="/checkIn" component={CheckIn} />
            <StaffRoute path="/checkOut" component={CheckOut} />
            <StaffRoute path="/checkOutLog" component={ViewGuestLog} />

            <StaffRoute
              path="/addGuest/:roomId/:roomType/:roomPrice"
              component={AddGuest}
            />
            <StaffRoute path="/editGuest/:guestId" component={UpdateGuest} />
            <StaffRoute path="/viewGuest/:guestId" component={ViewGuest} />
            <StaffRoute
              path="/checkOutGuest/:guestId/:room/:date"
              component={CheckOutGuest}
            />
            <StaffRoute path="/checkOutView" component={CheckOutView} />
          </Switch>
        </div>
        {/* Footer Component */}
        <Footer />
      </Router>          
      </Suspense>
    </div>
  );
}

export default App;
