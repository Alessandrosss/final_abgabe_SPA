import react from "react";
import axios from "axios";

export const loginUser = async ({ email, password }) => {
  const result = axios
    .post("/auth/login", { email, password })
    .then((res) => console.log({ res }))
    .catch(console.error());
};