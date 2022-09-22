import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../services/CourseService";
import StudentService from "../services/StudentService";
import CourseNavSpec from "./CourseNavSpec";

const CourseEnrollment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [studentList, setStudentList] = React.useState([]);

  const [completeStudentList, setCompleteStudentList] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentByCourseId(id);
        const responseAll = await StudentService.getStudentNotEnrolled(id);
        setStudentList(response.data);
        setCompleteStudentList(responseAll.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const studentArr = studentList.map((student) => {
    return (
      <li key={student.studentId}>
        {student.firstName + " " + student.lastName}
        <button
          onClick={() => removeStudent(student)}
          className="rounded--remove"
        >
          Remove
        </button>
      </li>
    );
  });

  const enrollStudent = (student) => {
    CourseService.enrollStudent(id, student)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeStudent = (student) => {
    CourseService.removeStudent(id, student)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCourse = () => {
    if (window.confirm("Are you sure you wish to delete this course?")) {
      CourseService.deleteCourse(id)
        .then((response) => {
          console.log(response);
          navigate("/courses");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <CourseNavSpec courseId={id} />
      <h3>Enrolled Students</h3>
      <ol>{studentArr}</ol>
      <h3>Enroll Students</h3>
      <div>
        <ol>
          {completeStudentList.map((student) => {
            return (
              <div>
                <li key={student.studentId}>
                  {student.firstName + " " + student.lastName}
                  <button
                    onClick={() => enrollStudent(student)}
                    className="rounded--enroll"
                  >
                    Enroll
                  </button>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
      <div>
        <button onClick={() => navigate("/courses")} className="rounded--back">
          Back
        </button>
        <button onClick={deleteCourse} className="rounded--back">
          Delete Course
        </button>
      </div>
    </div>
  );
};

export default CourseEnrollment;
