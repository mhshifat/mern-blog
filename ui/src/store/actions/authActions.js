import axios from "axios";

export const SET_REGISTER_LOADER = "SET_REGISTER_LOADER";
export const CLOSE_REGISTER_LOADER = "CLOSE_REGISTER_LOADER";
export const SET_REGISTER_ERRORS = "SET_REGISTER_ERRORS";

export const registerAUserAction = (formValues) => async (dispatch) => {
  dispatch({ type: SET_REGISTER_LOADER });
  axios
    .post("/register", formValues)
    .then((res) => {
      localStorage.tid = res.data.token;
      dispatch({ type: CLOSE_REGISTER_LOADER });
    })
    .catch((err) => {
      dispatch({
        type: SET_REGISTER_ERRORS,
        payload: err.response.data.errors,
      });
      dispatch({ type: CLOSE_REGISTER_LOADER });
    });
};
