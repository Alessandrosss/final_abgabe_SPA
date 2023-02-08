import Home from "../elements/Home";
import Blog from "../elements/Blog";
import WebApp from "../elements/WebApp";
import Layout from "../elements/Layout";

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
};

export default paths;
