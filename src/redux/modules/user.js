import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 로컬스토리지 token 작업 임포트
import { getToken, insertToken, removeToken } from "../../shared/token";

const BASE_URL = "";

const initialState = {
  user: null,
  token: null,
  isLogin: false,
};

// 액션
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";

// 액션 생성함수
const login = createAction(LOG_IN, (token, user) => ({ token, user }));
const signUp = createAction(SIGN_UP, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// 미들웨어
const loginAction = (token, user) => {
  return async function (dispatch, getState, { history }) {
    dispatch(login(token, user));
    history.push("/");
  };
};

const logoutAction = (user) => {
  return async function (dispatch, getState, { history }) {
    removeToken();
    dispatch(logOut(user));
    history.replace("/login");
  };
};

// 여기부터 api 응답 받는 미들웨어
const signUpDB = (inputs) => {
  return async function (dispatch, getState, { history }) {
    await axios.post(`${BASE_URL}/user/signup`);
  };
};
