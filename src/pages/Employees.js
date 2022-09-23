import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../api";
import { setEmployees } from "../actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";

const Employees = () => {
  useEffect(() => {
    const fetchemployees = async () => {
      const employeeRes = await getEmployees();
      const data = await employeeRes.json();
      dispatch(setEmployees(data.data.employees));
    };
    fetchemployees();
  }, []);

  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [empleados, setEmpleados] = useState([]);
  const [filter, setFilter] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [form, setForm] = useState({
    name: "",
    last_name: "",
  });

  useEffect(() => {
    setEmpleados([...employees]);
  }, [employees]);

  const handleSubmit = (event) => {
    event.preventDefault();
    filter == ""
      ? setEmpleados(employees)
      : setEmpleados(
          employees.filter(function (emp) {
            return emp.last_name.includes(filter) || emp.name.includes(filter);
          })
        );
  };

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    fetch(
      "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:" +
        process.env.REACT_APP_API,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          last_name: form.last_name,
          birthday: formatDate(startDate),
        }),
      }
    )
      .then((response) => {
        setForm({ name: "", last_name: "" });
        const fetchemployees = async () => {
          const employeeRes = await getEmployees();
          const data = await employeeRes.json();
          dispatch(setEmployees(data.data.employees));
          setEmpleados(data.data.employees);
        };
        fetchemployees();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function formatDate(date) {
    let d = "";
    d = new Date(date.valueOf());
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("/");
  }

  return (
    <div className="container m-auto">
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            name="user"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            className="border border-gray-300 m-2"
            type="text"
          />
          <button
            className="border border-gray-300 m-2 px-2 bg-cyan-500 text-white hover:bg-cyan-700"
            type="submit"
          >
            Look for
          </button>
        </form>
      </div>
      <div className="text-center">
        <form onSubmit={handleSubmit2} className="grid grid-cols-8 gap-4">
          <div className="col-span-8 sm:col-span-2  ">
            <p>Name</p>
            <input
              name="last_name"
              onChange={(e) => {
                handleInput(e);
              }}
              className="border border-gray-300 m-2 w-full"
              type="text"
              required
              value={form.last_name}
            />
          </div>
          <div className="col-span-8 sm:col-span-2 ">
            <p>Last Name</p>
            <input
              name="name"
              onChange={(e) => {
                handleInput(e);
              }}
              className="border border-gray-300 m-2   w-full"
              type="text"
              required
              value={form.name}
            />
          </div>
          <div className="col-span-8 sm:col-span-2 ">
            <p>Date Of Birthday</p>
            <DatePicker
              className="border border-gray-300 m-2 w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat={"yyyy/MM/dd"}
            />
          </div>

          <button
            className=" w-full  col-span-8 sm:col-span-2 border border-gray-300 px-2 bg-cyan-500 text-white hover:bg-cyan-700"
            type="submit"
          >
            Add Person
          </button>
        </form>
      </div>
      <div className="grid grid-cols-10 gap-4">
        {empleados.map((employees, key) => (
          <div
            key={key}
            className="col-span-10 sm:col-span-5 lg:col-span-2 my-3"
          >
            <div className="bg-gray-300">
              <img
                alt="image"
                src={"https://joeschmoe.io/api/v1/" + key}
                className="h-60 w-full"
              />
            </div>
            <div>
              <p className="mx-3 my-1 text-md font-semibold">
                {employees.last_name} {employees.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
