import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//Ecommerce
import Ecommerce from "./ecommerce/reducer";

//Project
import Projects from "./projects/reducer";

// Tasks
import Tasks from "./tasks/reducer";
//Form advanced
import changeNumber from "./formAdvanced/reducer";

//TicketsList
import Tickets from "./tickets/reducer";

// Dashboard Project
import DashboardProject from "./dashboardProject/reducer";

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Projects,
    Ecommerce,
    Tasks,
    changeNumber,
    Tickets,
    DashboardProject,
});

export default rootReducer;