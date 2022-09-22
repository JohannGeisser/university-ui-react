import React from "react";
import DepartmentService from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";

const DepartmentList = ({ departments }) => {
  const navigate = useNavigate();

  const departmentArray = departments.map((department) => {
    const id = department.departmentId;
    return (
      <div className="dep">
        <li
          key={department.departmentId}
          onClick={() => navigate(`/departments/${id}`)}
        >
          {department.depName}
        </li>
        <button
          className="dep--rem"
          onClick={() => {
            deleteDepartment(id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  const deleteDepartment = (id) => {
    DepartmentService.deleteDepartment(id)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Department List</h3>
      <ol>{departmentArray}</ol>
    </div>
  );
};

export default DepartmentList;
