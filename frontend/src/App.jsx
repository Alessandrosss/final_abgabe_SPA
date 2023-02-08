import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./elements/Layout";
import Paths from "./utils/paths";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home.path} element={<Layout />}>
          <Route index element={Paths.Home.element} />
          <Route path={Paths.Blog.path} element={Paths.Blog.element} />
          <Route
            path={Paths.Application.path}
            element={Paths.Application.element}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
