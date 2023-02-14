import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/userApi";
import { ButtonCompact } from "./buttons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form>
          <div className="font-semibold text-3xl mb-4">Login</div>

          <div className="form-group mb-6">
            <label
              htmlFor="email"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="password"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="
              form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"

              onClick={()=>loginUser({email, password})}
          >
            Sign in
          </button>
          <p className="mt-6 text-center">
            Not a member?
            <Link
              to="/register"
              style={{ color: "blue", marginLeft: "0.5rem" }}
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
