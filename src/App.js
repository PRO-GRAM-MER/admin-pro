import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/auth/LogInPage";
import { HomePage } from "./pages/homePage/HomePage";
import {
  checkAuthLoader,
  DashBoardPage,
} from "./pages/dashboard/DashBoardPage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { RootLayout } from "./pages/RootLayout";

const router = createBrowserRouter([
  // { path: "/", element: <LoginPage /> },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: "dashboard",
        element: <DashBoardPage />,
        loader: checkAuthLoader,
        children: [
          { index: true, element: <HomePage /> },
          { path: ":category", element: <CategoryPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
