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
}

export default new StudentService();
