import React from "react";
import CourseService from "../services/CourseService";

export default function CourseNavSpec({ courseId }) {
  const [courseName, setCourseName] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CourseService.getCourseById(courseId);
        setCourseName(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className="main--header">
      <h1>Course Management - {courseName.courseName}</h1>
    </header>
  );
}
