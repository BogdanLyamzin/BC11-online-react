import {createAction} from "@reduxjs/toolkit";

const registerRequest = createAction("auth/register/request");
const registerSuccess = createAction("auth/register/success");
const registerError = createAction("auth/register/error");

const loginRequest = createAction("auth/login/request");
const loginSuccess = createAction("auth/login/success");
const loginError = createAction("auth/login/error");

const logoutRequest = createAction("auth/logout/request");
const logoutSuccess = createAction("auth/logout/success");
const logoutError = createAction("auth/logout/error");

const getCurrentRequest = createAction("auth/current/request");
const getCurrentSuccess = createAction("auth/current/success");
const getCurrentError = createAction("auth/current/error");

export default {
    registerRequest,
    registerSuccess,
    registerError,

    loginRequest,
    loginSuccess,
    loginError,

    logoutRequest,
    logoutSuccess,
    logoutError,

    getCurrentRequest,
    getCurrentSuccess,
    getCurrentError
}
