import React from "react";
import StudentService from "../services/StudentService";

export default function Forms({ updateList }) {
  const [student, setStudent] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  }

  function clearFields() {
    setStudent({
      firstName: "",
      lastName: "",
    });
  }

  function saveStudent(event) {
    event.preventDefault();
    StudentService.saveStudent(student)
      .then((response) => {
        updateList(student);
        clearFields();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <h3>Student Form</h3>
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h4>Add New Student</h4>
        </div>
        <div className="input--form">
          <label className="label--form">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="input--form">
          <label className="label--form">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveStudent}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
