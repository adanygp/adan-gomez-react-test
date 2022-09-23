export const getEmployees = () => {
  return fetch("https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:"+process.env.REACT_APP_API);
};


