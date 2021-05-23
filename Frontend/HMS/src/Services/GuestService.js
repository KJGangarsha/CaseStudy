import axios from "axios";

/* Axios calls */
const EMPLOYEE_API_FINDALL_URL = "http://localhost:8083/guest/findGuests";
const EMPLOYEE_API_FINDCHECKOUTS_URL = "http://localhost:8083/guest/Checkouts";
const EMPLOYEE_API_GETAVAILABLEROOMS_URL =
  "http://localhost:8083/guest/availableRooms";
const EMPLOYEE_API_GETROOM_URL = "http://localhost:8083/guest/getRoom";
const EMPLOYEE_API_GETROOMBYNUMBER_URL =
  "http://localhost:8083/guest/getRoomByNumber";
const EMPLOYEE_API_ADDGUEST_URL = "http://localhost:8083/guest/addGuest";
const EMPLOYEE_API_ADDCHECKOUT_URL = "http://localhost:8083/guest/checkOut";
const EMPLOYEE_API_VIEWGUEST_URL = "http://localhost:8083/guest/findGuest";
const EMPLOYEE_API_EDITGUEST_URL = "http://localhost:8083/guest/editGuest";
const EMPLOYEE_API_DELETEGUEST_URL = "http://localhost:8083/guest/deleteGuest";
const EMPLOYEE_API_SUGGESTION_URL = "http://localhost:8085/suggestion/post";

const generateHeader = (backEndToken) => {
  let header = {
    headers: {
      Authorization: "Bearer " + backEndToken,
    },
  };
  return header;
};

class GuestService {
  /* methods wrt axios calls(APIs) */

  getGuests(backEndToken) {
    return axios.get(EMPLOYEE_API_FINDALL_URL, generateHeader(backEndToken));
  }

  getCheckOuts(backEndToken) {
    return axios.get(
      EMPLOYEE_API_FINDCHECKOUTS_URL,
      generateHeader(backEndToken)
    );
  }

  createGuest(guest, backEndToken) {
    return axios.post(
      EMPLOYEE_API_ADDGUEST_URL,
      guest,
      generateHeader(backEndToken)
    );
  }

  createCheckOut(guest, backEndToken) {
    return axios.post(
      EMPLOYEE_API_ADDCHECKOUT_URL,
      guest,
      generateHeader(backEndToken)
    );
  }

  getGuestById(guestId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_VIEWGUEST_URL + "/" + guestId,
      generateHeader(backEndToken)
    );
  }

  getAvailableRooms(backEndToken) {
    return axios.get(
      EMPLOYEE_API_GETAVAILABLEROOMS_URL,
      generateHeader(backEndToken)
    );
  }

  getRoom(roomId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_GETROOM_URL + "/" + roomId,
      generateHeader(backEndToken)
    );
  }

  getRoomByNumber(roomId, backEndToken) {
    return axios.get(
      EMPLOYEE_API_GETROOMBYNUMBER_URL + "/" + roomId,
      generateHeader(backEndToken)
    );
  }

  updateGuest(guest, guestId, backEndToken) {
    return axios.put(
      EMPLOYEE_API_EDITGUEST_URL + "/" + guestId,
      guest,
      generateHeader(backEndToken)
    );
  }

  suggest(guest) {
    return axios.post(
      EMPLOYEE_API_SUGGESTION_URL,
      guest      
    );
  }

  deleteGuest(guestId, backEndToken) {
    return axios.delete(
      EMPLOYEE_API_DELETEGUEST_URL + "/" + guestId,
      generateHeader(backEndToken)
    );
  }
}

export default new GuestService();
