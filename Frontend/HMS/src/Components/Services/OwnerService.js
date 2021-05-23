import axios from "axios";

/* Axios calls */
const EMPLOYEE_API_FINDALL_URL = "http://localhost:9191/owner/findManagers";
const EMPLOYEE_API_ADDMANAGER_URL = "http://localhost:9191/owner/addManager";
const EMPLOYEE_API_VIEWMANAGER_URL = "http://localhost:9191/owner/findManager";
const EMPLOYEE_API_EDITMANAGER_URL = "http://localhost:9191/owner/editManager";
const EMPLOYEE_API_DELETEMANAGER_URL =
  "http://localhost:9191/owner/deleteManager";

const generateHeader = (backEndToken) => {
  let header = {
    headers: {
      Authorization: "Bearer " + backEndToken,
    },
  };
  return header;
};

class OwnerService {
  /* methods wrt axios calls(APIs) */

  getEmployees(backEndToken) {
    return axios.get(EMPLOYEE_API_FINDALL_URL, generateHeader(backEndToken));
  }

  createEmployee(employee, backEndToken) {
    return axios.post(
      EMPLOYEE_API_ADDMANAGER_URL,
      employee,
      generateHeader(backEndToken)
    );
  }

  getEmployeeById(employeeId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_VIEWMANAGER_URL + "/" + employeeId,
      generateHeader(backEndToken)
    );
  }

  updateEmployee(employee, employeeId, backEndToken) {
    return axios.put(
      EMPLOYEE_API_EDITMANAGER_URL + "/" + employeeId,
      employee,
      generateHeader(backEndToken)
    );
  }

  deleteEmployee(employeeId, backEndToken) {
    return axios.delete(
      EMPLOYEE_API_DELETEMANAGER_URL + "/" + employeeId,
      generateHeader(backEndToken)
    );
  }
}

export default new OwnerService();
