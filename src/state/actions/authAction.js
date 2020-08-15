import { GET_USER_PROFILE, SET_CURRENT_USER } from "../types/types";
import axios from "axios";
import { BASE_URL } from "../baseApi";
import { errorHandler } from "../../utils/errorHandler";
import { setRequestStatus } from "../../utils/setRequestStatus";
import { setAuthToken } from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Regsitering a new user
export const registerUser = (userInfo) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/register`, userInfo);
    dispatch(setRequestStatus(false));

    if (res.status === 201) {
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

// Confirming the OTP of a user
export const confirmOtp = (otpInfo) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/verify-otp`, otpInfo);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: GET_USER_PROFILE,
        payload: res.data.status,
      });
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

// Authenticating a user
export const loginUser = (userInfo, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/login`, userInfo);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      const token = res.data.data.token;

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);

      const decodedData = await jwt_decode(token);
      localStorage.setItem("userId", decodedData._id);

      dispatch(setCurrentUser(decodedData));

      history.push("/admin/dashboard");
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

export const setCurrentUser = (decodedData) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedData,
  };
};
