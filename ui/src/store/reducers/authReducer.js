import decode from "jwt-decode";
import {
  CLOSE_REGISTER_LOADER,
  SET_REGISTER_ERRORS,
  SET_REGISTER_LOADER,
} from "../actions/authActions";

const initialState = {
  loading: false,
  registerErrors: [],
  loginErrors: [],
  token: null,
  user: null,
};

const token = localStorage?.tid;
if (token) {
  const decodedToken = decode(token);
  const expiresIn = new Date(decodedToken.exp * 1000);
  if (new Date() > expiresIn) {
    delete localStorage?.tid;
  } else {
    initialState.token = token;
    initialState.user = decodedToken._doc;
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_LOADER:
      return { ...state, loading: true };
    case CLOSE_REGISTER_LOADER:
      console.log("Hi");
      return { ...state, loading: false };
    case SET_REGISTER_ERRORS:
      return { ...state, registerErrors: action.payload };
    default:
      return state;
  }
};

export default authReducer;
