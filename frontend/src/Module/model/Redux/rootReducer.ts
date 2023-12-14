import { combineReducers } from "@reduxjs/toolkit";
import * as empReducer from "../Redux/Employee/employee.reducer"

let rootReducer:any=combineReducers({
    [empReducer.employeeFeatureKey]:empReducer.employeeSlice.reducer
});

export default rootReducer;