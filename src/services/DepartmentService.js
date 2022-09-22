import axios from "axios";

const DEPARTMENT_API_BASE_URL = "http://localhost:8080/department";

class DepartmentService {
  getDepartments() {
    return axios.get(DEPARTMENT_API_BASE_URL);
  }

  getDepartmentById(id) {
    return axios.get(DEPARTMENT_API_BASE_URL + "/" + id);
  }

  saveDepartment(department) {
    return axios.post(DEPARTMENT_API_BASE_URL, department);
  }

  deleteDepartment(id) {
    return axios.delete(DEPARTMENT_API_BASE_URL + "/" + id);
  }
}

export default new DepartmentService();
