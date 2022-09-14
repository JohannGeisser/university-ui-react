import React from "react";
import StudentService from "../services/StudentService";

export default function Query(props) {
  const { studentId, handleChange } = props;
  const [studentName, setStudentName] = React.useState("");
  //const [searchedStudentId, setSearchedStudentId] = React.useState();

  async function searchStudent() {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentById(studentId);
        console.log(response.data);
        const student = response.data;
        if (student.studentId.toString() === studentId.toString()) {
          setStudentName(student.firstName);
          //setSearchedStudentId(student.studentId);
        }
      } catch (error) {
        setStudentName("");
        alert("Student not found");
        console.log(error);
      }
    };
    fetchData();
  }

  return (
    <div>
      <h3>Search a Student</h3>
      <input type="text" placeholder="Student ID" onChange={handleChange} />
      <button onClick={searchStudent}>Search</button>
      {studentName && <p>{studentName}</p>}
    </div>
  );
}
