import "./App.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleList from "./pages/ArticleListPage";
import ArticlePage, { loader as articleLoader } from "./pages/ArticlePage";
import NavBar from "./NavBar";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage";
import axios from "axios";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/articles",
        element: <ArticleList />,
      },
      {
        path: "/articles/:name",
        element: <ArticlePage />,
        loader: articleLoader,
      },

      // {
      //   path: "/articles/:name",
      //   element: <ArticlePage />,
      //   loader: async function () {
      //     const responce = await axios.get("/api/articles/learn-node");
      //     const { upvotes, comments } = responce.data;
      //     return { upvotes, comments };
      //   },
      // },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
