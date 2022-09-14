import React from "react";

export default function List(props) {
  const studentElements = props.students.map((student) => (
    <li key={student.studentId}>
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
