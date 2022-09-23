import { SET_EMPLOYEES, SET_LOGIN } from "./types";

export const setEmployees = (payload) => ({
    type: SET_EMPLOYEES,
    payload
})

export const setLogin = (payload) => ({
    type: SET_LOGIN,
    payload
})