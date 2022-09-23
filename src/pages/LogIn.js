import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setLogin } from "../actions";

const LogIn = () => {
  const statusUser = useSelector((state) => state.statusUser);
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    user: "",
    password: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      loginUser[0].user == form.user &&
      loginUser[0].password == form.password
    ) {
      dispatch(setLogin(true));
    } else {
      setForm({ ...form, message: "Wrong Credentials" });
    }
  };

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  if (statusUser == false) {
    return (
      <>
        <div className="flex justify-center h-auto mt-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <h1 className="text-center border-2 border-b-gray-300 border-x-transparent border-t-transparent mb-4">
                LOG IN
              </h1>
              <p className="text-red-700 text-center">{form.message}</p>
              <input
                name="user"
                onChange={(e) => {
                  handleInput(e);
                }}
                className="border border-gray-300 m-2"
                type="text"
                required
                placeholder='USER'
                onCopy={(event) => {
                  event.preventDefault();
                }}
                onCut={(event) => {
                  event.preventDefault();
                }}
                onPaste={(event) => {
                  event.preventDefault();
                }}
              />
              <input
                name="password"
                onChange={(e) => {
                  handleInput(e);
                }}
                className="border border-gray-300 m-2"
                type="password"
                required
                placeholder='PASSWORD'
                onCopy={(event) => {
                  event.preventDefault();
                }}
                onCut={(event) => {
                  event.preventDefault();
                }}
                onPaste={(event) => {
                  event.preventDefault();
                }}
              />
              <button
                className="border border-gray-300 m-2 px-2 bg-cyan-500 text-white hover:bg-cyan-700"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <Navigate to="/employees" replace />;
  }
};

export default LogIn;
