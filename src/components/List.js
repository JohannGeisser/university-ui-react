import React from "react";
import { useNavigate } from "react-router-dom";

export default function List(props) {
  const navigate = useNavigate();

  const studentElements = props.students.map((student) => (
    <li
      key={student.studentId}
      className="link--student"
      onClick={() => navigate(`/editStudent/${student.studentId}`)}
    >
      {student.firstName + " " + student.lastName}
    </li>
  ));

  return (
    <div>
      <h3>Student List</h3>
      <ol>{studentElements}</ol>
    </div>
  );
}
