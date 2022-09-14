import React from "react";
import StudentNavbar from "./components/StudentNavbar";
import Forms from "./components/Forms";
import Query from "./components/Query";
import List from "./components/List";
import StudentService from "./services/StudentService";
import UpdateStudent from "./components/UpdateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [studentList, setStudentList] = React.useState([]);
  const [studentIdQuery, setStudentIdQuery] = React.useState(0);

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UpdateStudent />}></Route>
          <Route path="/editStudent/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
