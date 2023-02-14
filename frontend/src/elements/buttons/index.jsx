import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonCompact = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(props.path)}
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {props.value}
    </button>
  );
};

export const ButtonOutlined = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(props.path)}
      type="button"
      className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.value}
    </button>
  );
};
