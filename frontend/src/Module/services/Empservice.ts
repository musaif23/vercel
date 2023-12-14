import axios from "axios";
import { Iemp } from "../model/Iemp";

export class Employeeservices {
  private static serverUrl: string = "http://localhost:3001";

  public static getAllEmployee = (): Promise<{ data: Iemp[] }> => {
    const data = `${this.serverUrl}/users`;

    return axios.get(data);
  };

  public static getEmployeeById = (Id: string): Promise<{ data: Iemp }> => {
    const data = `${this.serverUrl}/users/edit/${Id}`;
    return axios.get(data);
  };

  public static createEmployee = (obj: Iemp): Promise<{ data: Iemp }> => {
    const data = `${this.serverUrl}/users/post`;
    return axios.post(data, obj);
  };

  public static updateEmployeeById = (
    Id: string,
    Body: Iemp
  ): Promise<{ data: Iemp }> => {
    const data = `${this.serverUrl}/users/update/${Id}`;
    return axios.put(data, Body);
  };

  public static DeleteEmployeeById = (Id: string): Promise<{ data: Iemp }> => {
    const data = `${this.serverUrl}/users/delete/${Id}`;
    return axios.delete(data);
  };
}
