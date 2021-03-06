import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    // set AUTHORIZATION in headers of all request
    axios.defaults.headers.common["Authorization"] =
      token || localStorage.getItem("jwtToken");
  } else {
    // delete from the headers
    delete axios.defaults.headers.common["Authorization"];
  }
};
