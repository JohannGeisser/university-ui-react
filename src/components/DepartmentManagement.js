import React from "react";
import DepartmentNavbar from "./DepartmentNavbar";
import DepartmentList from "./DepartmentList";
import DepartmentForm from "./DepartmentForm";
import DepartmentService from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";

const DepartmentManagement = () => {
  const [departmentList, setDepartmentList] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DepartmentService.getDepartments();
        setDepartmentList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DepartmentNavbar />
      <DepartmentList departments={departmentList} />
      <DepartmentForm />
      <div>
        <button onClick={() => navigate("/")} className="rounded--back">
          Back
        </button>
      </div>
    </div>
  );
};

export default DepartmentManagement;
