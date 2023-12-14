import { useEffect } from "react";

import { Link } from "react-router-dom";
import * as empReducer from "../model/Redux/Employee/employee.reducer";
import * as empAction from "../model/Redux/Employee/employee.action";
import { AppDispatch, RootState } from "../model/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Employeeservices } from "../services/Empservice";

let Getallemployee: React.FC = () => {
  let empReduxState: empReducer.initialState = useSelector(
    (state: RootState) => {
      return state[empReducer.employeeFeatureKey];
    }
  );

  const dispatch: AppDispatch = useDispatch();

  let dataFromServer = () => {
    dispatch(empAction.getAllEmployeeAction());
  };

  useEffect(() => {
    dataFromServer();
  }, []);

  let deletedata = (Id: any) => {
    Employeeservices.DeleteEmployeeById(Id);
    dataFromServer();
  };

  return (
    <>
      <div>
        <h1 className="emp">Employee List</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, saepe
          officia quam facilis dolorem sed perspiciatis! Nulla porro nobis
          consequatur.
        </span>
      </div>
      <table className="table mt-5 table-dark table-hover">
        <thead>
          <tr className="table-head">
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {empReduxState.employees.map((elem: any, ind: any) => {
            return (
              <tr>
                <th scope="row">{elem._id}</th>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.number}</td>
                <td>
                  <Link
                    to={`/update/${elem._id}`}
                    className={"btn btn-success"}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deletedata(elem._id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Getallemployee;
