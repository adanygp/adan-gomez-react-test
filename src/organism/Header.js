import React from "react";
import logo from "../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../actions";
import { Link } from "react-router-dom";

const Header = () => {
  const loginUser = useSelector((state) => state.loginUser);
  const statusUser = useSelector((state) => state.statusUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLogin(false));
  };
  return (
    <div className="bg-cyan-100 h-auto">
      <div className="flex flex-row justify-between">
        <img alt="image" src={logo} className="h-24 flex self-center" />
        {statusUser == true ? (
          <>
            <div className="flex flex-row">
              <Link
                className="m-auto align-center mx-2 text-md md:text-2xl"
                to={{
                  pathname: "/employees",
                  hash: "#",
                }}
              >
                Employees
              </Link>
              <Link
                className="m-auto align-center mx-2 text-md md:text-2xl"
                to={{
                  pathname: "/upload",
                  hash: "#",
                }}
              >
                Upload
              </Link>
            </div>
            <div>
              <img
                alt="image"
                src={"https://joeschmoe.io/api/v1/1"}
                className="h-24"
              />
              <p className="text-center">{loginUser.user}</p>
              <p className="text-center" onClick={handleClick}>
                Log Out
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
