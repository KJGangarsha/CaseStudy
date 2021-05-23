import axios from "axios";
/* Axios calls */

/* staff */
const EMPLOYEE_API_FINDALLS_URL = "http://localhost:9191/manager/findStaffs";
const EMPLOYEE_API_ADDEMPLOYEE_URL = "http://localhost:9191/manager/addStaff";
const EMPLOYEE_API_VIEWEMPLOYEE_URL = "http://localhost:9191/manager/findStaff";
const EMPLOYEE_API_EDITEMPLOYEE_URL = "http://localhost:9191/manager/editStaff";
const EMPLOYEE_API_DELETEEMPLOYEE_URL =
  "http://localhost:9191/manager/deleteStaff";

/* inventory */
const EMPLOYEE_API_FINDALLI_URL =
  "http://localhost:9191/manager/findInventories";
const EMPLOYEE_API_ADDINVENTORY_URL =
  "http://localhost:9191/manager/addInventory";
const EMPLOYEE_API_VIEWINVENTORY_URL =
  "http://localhost:9191/manager/findInventory";
const EMPLOYEE_API_EDITINVENTORY_URL =
  "http://localhost:9191/manager/editInventory";
const EMPLOYEE_API_DELETEINVENTORY_URL =
  "http://localhost:9191/manager/deleteInventory";

/* rooms */
const EMPLOYEE_API_FINDALLR_URL = "http://localhost:9191/manager/findRooms";
const EMPLOYEE_API_ADDROOM_URL = "http://localhost:9191/manager/addRoom";
const EMPLOYEE_API_FINDAVAILROOMS_URL =
  "http://localhost:9191/manager/availRooms";
const EMPLOYEE_API_VIEWROOM_URL = "http://localhost:9191/manager/findRoom";
const EMPLOYEE_API_VIEWBYROOM_URL =
  "http://localhost:9191/manager/findRoomByNumber";
const EMPLOYEE_API_EDITROOM_URL = "http://localhost:9191/manager/editRoom";
const EMPLOYEE_API_DELETEROOM_URL = "http://localhost:9191/manager/deleteRoom";

const generateHeader = (backEndToken) => {
  let header = {
    headers: {
      Authorization: "Bearer " + backEndToken,
    },
  };
  return header;
};

class ManagerService {
  /* methods wrt axios calls(APIs) */

  /* --staff-- */

  getEmployees(backEndToken) {
    return axios.get(EMPLOYEE_API_FINDALLS_URL, generateHeader(backEndToken));
  }

  createEmployee(employee, backEndToken) {
    return axios.post(
      EMPLOYEE_API_ADDEMPLOYEE_URL,
      employee,
      generateHeader(backEndToken)
    );
  }

  getEmployeeById(employeeId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_VIEWEMPLOYEE_URL + "/" + employeeId,
      generateHeader(backEndToken)
    );
  }

  updateEmployee(employee, employeeId, backEndToken) {
    return axios.put(
      EMPLOYEE_API_EDITEMPLOYEE_URL + "/" + employeeId,
      employee,
      generateHeader(backEndToken)
    );
  }

  deleteEmployee(employeeId, backEndToken) {
    return axios.delete(
      EMPLOYEE_API_DELETEEMPLOYEE_URL + "/" + employeeId,
      generateHeader(backEndToken)
    );
  }

  /* --Inventory-- */

  getInventory(backEndToken) {
    return axios.get(EMPLOYEE_API_FINDALLI_URL, generateHeader(backEndToken));
  }

  createInventory(inventory, backEndToken) {
    return axios.post(
      EMPLOYEE_API_ADDINVENTORY_URL,
      inventory,
      generateHeader(backEndToken)
    );
  }

  getInventoryById(inventoryId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_VIEWINVENTORY_URL + "/" + inventoryId,
      generateHeader(backEndToken)
    );
  }

  updateInventory(inventory, inventoryId, backEndToken) {
    return axios.put(
      EMPLOYEE_API_EDITINVENTORY_URL + "/" + inventoryId,
      inventory,
      generateHeader(backEndToken)
    );
  }

  deleteInventory(inventoryId, backEndToken) {
    return axios.delete(
      EMPLOYEE_API_DELETEINVENTORY_URL + "/" + inventoryId,
      generateHeader(backEndToken)
    );
  }

  /* --room-- */
  getRooms(backEndToken) {
    return axios.get(EMPLOYEE_API_FINDALLR_URL, generateHeader(backEndToken));
  }

  getAvailRooms(backEndToken) {
    return axios.get(
      EMPLOYEE_API_FINDAVAILROOMS_URL,
      generateHeader(backEndToken)
    );
  }

  createRoom(room, backEndToken) {
    return axios.post(
      EMPLOYEE_API_ADDROOM_URL,
      room,
      generateHeader(backEndToken)
    );
  }

  getRoomById(roomId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_VIEWROOM_URL + "/" + roomId,
      generateHeader(backEndToken)
    );
  }

  getRoomByNumber(roomId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_VIEWBYROOM_URL + "/" + roomId,
      generateHeader(backEndToken)
    );
  }

  updateRoom(room, roomId, backEndToken) {
    return axios.put(
      EMPLOYEE_API_EDITROOM_URL + "/" + roomId,
      room,
      generateHeader(backEndToken)
    );
  }

  deleteRoom(roomId, backEndToken) {
    return axios.delete(
      EMPLOYEE_API_DELETEROOM_URL + "/" + roomId,
      generateHeader(backEndToken)
    );
  }
}

export default new ManagerService();
