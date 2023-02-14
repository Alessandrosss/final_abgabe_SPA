import react from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

export const loginUser = async ({ email, password }) => {
  const result = api
    .post("/auth/login", { email, password })
    .then((res) => {
      return res.data;
    })
    .catch(console.error());
};

export const registerUser = async ({
  name,
  email,
  password,
  repeatPassword,
}) => {
  const result = api
    .post("/auth/register", { name, email, password, repeatPassword })
    .then((res) => {
      return res.data;
    })
    .catch(console.error());
};
