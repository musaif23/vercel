import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iemp } from "../../Iemp";
import { Employeeservices } from "../../../services/Empservice";

export const getAllEmployeeAction: any = createAsyncThunk(
  "Employee/getAllEmployeeAction",
  async (payload: {}, { rejectWithValue }): Promise<Iemp[] | any> => {
    try {
      let res = await Employeeservices.getAllEmployee();
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const getEmployeeById: any = createAsyncThunk(
  "Employee/getEmployeeById",
  async (payload: { Id: any }, { rejectWithValue }): Promise<Iemp | any> => {
    const { Id } = payload;
    try {
      let res = await Employeeservices.getEmployeeById(Id);
      console.log("res", res.data);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const createEmployeeAction: any = createAsyncThunk(
  "Employee/createEmployeeAction",
  async (payload: { obj: Iemp }, { rejectWithValue }): Promise<Iemp | any> => {
    const { obj } = payload;
    console.log("con", obj);
    try {
      let res = await Employeeservices.createEmployee(obj);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const updateEmployeeByIdAction: any = createAsyncThunk(
  "Employee/updateEmployeeByIdAction",
  async (
    payload: { Id: string; Body: Iemp },
    { rejectWithValue }
  ): Promise<Iemp | any> => {
    const { Id, Body } = payload;
    try {
      let res = await Employeeservices.updateEmployeeById(Id, Body);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const DeleteEmployeeByIdAction: any = createAsyncThunk(
  "Employee/DeleteEmployeeByIdAction",
  async (payload: { Id: string }, { rejectWithValue }): Promise<Iemp | any> => {
    const { Id } = payload;
    try {
      let res = await Employeeservices.DeleteEmployeeById(Id);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);
