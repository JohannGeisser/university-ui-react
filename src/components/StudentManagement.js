import React from "react";
import StudentNavbar from "./StudentNavbar";
import Forms from "./Forms";
import Query from "./Query";
import List from "./List";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";

export default function StudentManagement() {
  const [studentList, setStudentList] = React.useState([]);
  const [studentIdQuery, setStudentIdQuery] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudents();
        setStudentList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function updateValue(event) {
    const { value } = event.target;
    setStudentIdQuery(value);
  }

  function updateList(student) {
    setStudentList((prevStudentList) => {
      return [...prevStudentList, student];
    });
  }

  return (
    <>
      <StudentNavbar />
      <List students={studentList} />
      {studentList ? (
        <Query handleChange={updateValue} studentId={studentIdQuery} />
      ) : null}
      <Forms updateList={updateList} />
      <div>
        <button onClick={() => navigate("/")} className="rounded--back">
          Back
        </button>
      </div>
    </>
  );
}
