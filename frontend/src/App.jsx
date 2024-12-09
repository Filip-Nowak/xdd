import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import PageContainer from "./components/container/PageContainer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import BlogList from "./components/blog/BlogList";
import Blog from "./components/blog/Blog";
import Faq from "./components/faq/Faq";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageContainer />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <BlogList />,
        },
        {
          path: "/blog/:id",
          element: <Blog />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
