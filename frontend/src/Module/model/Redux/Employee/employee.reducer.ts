import { Iemp } from "../../Iemp";
import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import * as employeeAction from "../Employee/employee.action";
export let employeeFeatureKey="FeatureKey";

export interface initialState{
    employees:Iemp[],
    employee:Iemp
}

let State ={
    employees:[] as Iemp[],
    employee:{} as Iemp
}

export let employeeSlice = createSlice({
    name : "employeeSlice",
    initialState : State,
    reducers:{},
    extraReducers:(bulder)=>{
        bulder.addCase(employeeAction.getAllEmployeeAction.fulfilled,(state,action)=>{
            state.employees=action.payload;
        })
        
        bulder.addCase(employeeAction.getEmployeeById.fulfilled,(state,action)=>{
            state.employee=action.payload;
        })
    


        bulder.addCase(employeeAction.createEmployeeAction.fulfilled,(state,action)=>{
            state.employee=action.payload;
        })
    
        bulder.addCase(employeeAction.updateEmployeeByIdAction.fulfilled,(state,action)=>{
            state.employee=action.payload;
        })


        
        bulder.addCase(employeeAction.DeleteEmployeeByIdAction.fulfilled,(state,action)=>{
            state.employee={} as Iemp;
        })
    
    
    
    }
})


