import { useState } from "react";
import { Iemp } from "../model/Iemp";
import { Link, useNavigate } from "react-router-dom";
import { Employeeservices } from "../services/Empservice";
import { useDispatch } from "react-redux";
import { createEmployeeAction } from "../model/Redux/Employee/employee.action";

let Postemployee: React.FC = () => {
  let dispatch = useDispatch();

  let [state, setstate] = useState<Iemp>({} as Iemp);
  console.log(state);

  let navigate = useNavigate();

  let submit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  let form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createEmployeeAction({ obj: state }));
    navigate("/");
  };

  return (
    <>
      <div>
        <h1 className="form-h1">Create Employee</h1>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          beatae ipsa voluptas quasi cupiditate omnis nemo exercitationem rem
          doloremque. Est ex quos, necessitatibus vitae eos alias architecto
          incidunt tempore assumenda libero repellendus soluta aspernatur
          officia dolor laborum, doloremque veniam voluptates.
        </small>
      </div>
      <div className="form-div">
        <form
          onSubmit={(e) => {
            form(e);
          }}
        >
          <div>
            <label>First Name</label>
            <br />
            <input
              name={"name"}
              type="text"
              onChange={(e) => {
                submit(e);
              }}
            />
          </div>
          <br />

          <div>
            <label>Number</label>
            <br />
            <input
              name={"number"}
              type="number"
              onChange={(e) => {
                submit(e);
              }}
            />
          </div>
          <br />

          <div>
            <label>Email</label>
            <br />
            <input
              name={"email"}
              type="email"
              onChange={(e) => {
                submit(e);
              }}
            />
          </div>
          <br />
          <input type="submit" className="btn btn-success" />
          <input type="reset" className="btn btn-warning" />
        </form>
      </div>
    </>
  );
};

export default Postemployee;
