import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
