import { GET_USER_PROFILE } from "../types/types";
import axios from "axios";
import { BASE_URL } from "../baseApi";
import { errorHandler } from "../../utils/errorHandler";
import { setRequestStatus } from "../../utils/setRequestStatus";

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
