import Home from "../elements/Home";
import Blog from "../elements/Blog";
import WebApp from "../elements/WebApp";
import Login from "../elements/Login";
import Register from "../elements/Register";

const paths = {
  Home: {
    title: "Home",
    path: "/",
    element: <Home />,
  },
  Blog: {
    title: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  Application: {
    title: "Web App",
    path: "/web-app",
    element: <WebApp />,
  },
  Login: {
    title: "Login",
    path: "/login",
    element: <Login />,
  },
  Register: {
    title: "Register",
    path: "/register",
    element: <Register />,
  }
};

export default paths;
