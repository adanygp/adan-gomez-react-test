import { SET_EMPLOYEES, SET_LOGIN } from "../actions/types";

const initialState = { employees: [] , loginUser:[ {user:"chopper004", password:"password123" }], statusUser:false};

export const factumexReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    case SET_LOGIN:
      return { ...state, statusUser: action.payload };
    default:
      return state;
  }
};
