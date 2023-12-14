import { useEffect, useState } from "react";
import { Iemp } from "../model/Iemp";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as actions from "../../Module/model/Redux/Employee/employee.action";
import { Employeeservices } from "../services/Empservice";
import { AnyCnameRecord } from "dns";

let Putemployee: React.FC = () => {
  let { Id } = useParams();

  let navigate = useNavigate();

  const [state, setState] = useState<Iemp>({} as Iemp);

  let dataById = (Id: any) => {
    if (Id) {
      Employeeservices.getEmployeeById(Id)
        .then((res: any) => {
          setState(res.data[0]);
        })
        .catch((err: any) => console.log(err));
    }
  };

  console.log("dhdhd", state);

  useEffect(() => {
    dataById(Id);
  }, []);

  //const {updateEmp}=state;
  //let st:Iemp=state.updateEmp;

  let submit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  let update = (Id: any) => {
    Employeeservices.updateEmployeeById(Id, state);
    navigate("/");
  };

  return (
    <>
      <div>
        <h1 className="form-h1">Update Employee</h1>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          beatae ipsa voluptas quasi cupiditate omnis nemo exercitationem rem
          doloremque. Est ex quos, necessitatibus vitae eos alias architecto
          incidunt tempore assumenda libero repellendus soluta aspernatur
          officia dolor laborum, doloremque veniam voluptates.
        </small>
      </div>
      <div className="form-div">
        <div>
          <div>
            <label>First Name</label>
            <br />
            <input
              name={"name"}
              type="text"
              value={state.name}
              onChange={(e) => {
                submit(e);
              }}
            />
          </div>
          <br />

          <div>
            <label>Last Name</label>
            <br />
            <input
              name={"number"}
              type="text"
              value={state.number}
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
              value={state.email}
              onChange={(e) => {
                submit(e);
              }}
            />
          </div>
          <br />
        </div>
        <div className="btn-div">
          <input
            type="submit"
            className="btn btn-success"
            onClick={() => {
              update(Id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Putemployee;
