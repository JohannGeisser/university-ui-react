import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/student";

class StudentService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  getStudentById(id) {
    return axios.get(STUDENT_API_BASE_URL + "/" + id);
  }

  saveStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  editStudent(id, student) {
    return axios.put(STUDENT_API_BASE_URL + "/" + id, student);
  }

  deleteStudent(id) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + id);
  }

  getStudentByCourseId(id) {
    return axios.get(STUDENT_API_BASE_URL + "/enrollment/" + id);
  }

  getStudentNotEnrolled(id) {
    return axios.get(STUDENT_API_BASE_URL + "/noenrollment/" + id);
  }
}

export default new StudentService();
