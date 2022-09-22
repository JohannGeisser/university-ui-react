import React from "react";
import { useNavigate } from "react-router-dom";

const CourseList = ({ courses }) => {
  const navigate = useNavigate();

  const courseArray = courses.map((course) => {
    return (
      <li
        key={course.courseId}
        className="link--student"
        onClick={() => navigate(`/enrollment/${course.courseId}`)}
      >
        {course.courseName}
      </li>
    );
  });

  return (
    <div>
      <h3>Course List</h3>
      <ol>{courseArray}</ol>
    </div>
  );
};

export default CourseList;
