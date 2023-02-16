import react from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

export const getAllUsers = async (id) => {
  const response = await api.get("auth/users");
  return response.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await api.post("/auth/user/login", { email, password });
  return response.data;
};

export const registerUser = async ({
  name,
  email,
  password,
  repeatPassword,
}) => {
  const response = await api.post("/auth/user/register", {
    name,
    email,
    password,
    repeatPassword,
  })

  return response.data;
};
