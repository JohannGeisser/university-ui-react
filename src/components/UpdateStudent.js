import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";
import StudentNavbar from "./StudentNavbar";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = React.useState({
    id: id,
    firstName: "",
    lastName: "",
  });

  const [editable, setEditable] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        console.log(response.data);
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function editStudent(event) {
    event.preventDefault();
    setEditable((prevState) => !prevState);
  }

  function updateValue(event) {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  }

  function saveEdit(event) {
    event.preventDefault();
    StudentService.editStudent(id, student)
      .then((response) => {
        console.log(response);
        setEditable(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteStudent(event) {
    event.preventDefault();
    StudentService.deleteStudent(id)
      .then((response) => {
        console.log(response);
        navigate("/students");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <StudentNavbar />
      <div className="card">
        <img src="../profile.png" alt="John" />
        <h1>{student.firstName + " " + student.lastName}</h1>
        <p className="title">ID {id}</p>
        <p>Catholic University</p>
        <p>
          <button className="button--update" onClick={editStudent}>
            Edit
          </button>{" "}
        </p>
        {editable && (
          <div>
            <div className="input--form">
              <label className="label--form">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={student.firstName}
                onChange={updateValue}
              ></input>
            </div>
            <div>
              <label className="label--form">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={student.lastName}
                onChange={updateValue}
              ></input>
            </div>
            <button onClick={saveEdit} className="upload--button">
              Save
            </button>
          </div>
        )}
        <p>
          <button className="button--update" onClick={deleteStudent}>
            Delete
          </button>
        </p>
        <p>
          <button
            className="button--update"
            onClick={() => navigate("/students")}
          >
            Back
          </button>
        </p>
      </div>
    </div>
  );
};

export default UpdateStudent;
