import React from "react";
import DepartmentService from "../services/DepartmentService";

export default function DepartmentForm() {
  const [department, setDepartment] = React.useState({
    departmentId: "",
    depName: "",
  });

  const updateValue = (event) => {
    const { name, value } = event.target;
    setDepartment((prevDep) => ({
      ...prevDep,
      [name]: value,
    }));
  };

  const saveDepartment = (event) => {
    DepartmentService.saveDepartment(department)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <h3>Department Form</h3>
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h4>Add New Department</h4>
        </div>
        <div className="input--form">
          <label className="label--form">Department Name:</label>
          <input
            type="text"
            name="depName"
            value={department.depName}
            onChange={(e) => {
              updateValue(e);
            }}
          ></input>
        </div>
        <div>
          <button className="rounded" onClick={saveDepartment}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
