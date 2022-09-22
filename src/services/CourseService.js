import axios from "axios";

const COURSE_API_BASE_URL = "http://localhost:8080/course";

class CourseService {
  getCourses() {
    return axios.get(COURSE_API_BASE_URL);
  }

  getCourseById(id) {
    return axios.get(COURSE_API_BASE_URL + "/" + id);
  }

  saveCourse(course) {
    return axios.post(COURSE_API_BASE_URL, course);
  }

  deleteCourse(id) {
    return axios.delete(COURSE_API_BASE_URL + "/" + id);
  }

  enrollStudent(id, student) {
    return axios.put(COURSE_API_BASE_URL + "/" + id, student);
  }

  removeStudent(id, student) {
    return axios.put(COURSE_API_BASE_URL + "/remove/" + id, student);
  }

  getCoursesByDepartmentId(id) {
    return axios.get(COURSE_API_BASE_URL + "/dep/" + id);
  }
}

export default new CourseService();
