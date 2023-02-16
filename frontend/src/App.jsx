import React from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./elements/Layout";
import paths from "./utils/paths";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path={paths.Home.path} element={paths.Home.element} />
            <Route path={paths.Blog.path} element={paths.Blog.element} />
            <Route
              path={paths.Application.path}
              element={paths.Application.element}
            />
            <Route path={paths.Login.path} element={paths.Login.element} />
            <Route
              path={paths.Register.path}
              element={paths.Register.element}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
