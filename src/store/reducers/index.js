import { combineReducers } from "redux";
import dashboard from "./dashboard";
import profile from "./profile"


export default combineReducers({
    dashboardState:dashboard,
    profileState:profile
});
