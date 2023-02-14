import React from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./elements/Layout";
import Paths from "./utils/paths";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path={Paths.Home.path} element={Paths.Home.element} />
            <Route path={Paths.Blog.path} element={Paths.Blog.element} />
            <Route
              path={Paths.Application.path}
              element={Paths.Application.element}
            />
            <Route path={Paths.Login.path} element={Paths.Login.element} />
            <Route
              path={Paths.Register.path}
              element={Paths.Register.element}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
