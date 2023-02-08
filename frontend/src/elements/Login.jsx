import React, {  useState } from "react";
import { loginUser } from "../api/userApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
      onSubmit={() => loginUser({ email, password })}
    >
      <div className="text-xl font-bold text-black">Login To Vity</div>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
};

export default Login;
