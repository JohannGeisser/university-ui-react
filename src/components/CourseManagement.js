import React from "react";
import CourseNavbar from "./CourseNavbar";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";
import CourseService from "../services/CourseService";
import DepartmentService from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";

const CourseManagement = () => {
  const [courseList, setCourseList] = React.useState([]);
  const [departmentList, setDepartmentList] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await CourseService.getCourses();
        const departmentResponse = await DepartmentService.getDepartments();
        setCourseList(courseResponse.data);
        setDepartmentList(departmentResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CourseNavbar />
      <CourseList courses={courseList} />
      <CourseForm departments={departmentList} />
      <div>
        <button onClick={() => navigate("/")} className="rounded--back">
          Back
        </button>
      </div>
    </div>
  );
};

export default CourseManagement;
